import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path("/home/ubuntu/himian-Tamagotchi")
CATALOG_PATH = ROOT / "research" / "character-catalog.json"
OUTPUT_DIR = ROOT / "research" / "contact-sheets"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

with CATALOG_PATH.open("r", encoding="utf-8") as file:
    catalog = json.load(file)["catalog"]

font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
bold_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
font_small = ImageFont.truetype(font_path, 15)
font_name = ImageFont.truetype(bold_path, 18)
font_title = ImageFont.truetype(bold_path, 32)

palette = {
    "Land": "#F9C6E3",
    "Forest": "#8CDED5",
    "Sky": "#C8C9F6",
    "Water": "#9DDAF4",
    "Tropical": "#F7B07F",
    "Ice": "#E8E7EB",
}

for field, accent in palette.items():
    entries = [
        item for item in catalog
        if field in item.get("fields", []) and item.get("stage") in {"Young", "Adult"}
    ]
    entries.sort(key=lambda item: (0 if item["stage"] == "Young" else 1, item["name"], item["id"]))
    if len(entries) != 21:
        raise RuntimeError(f"{field} expected 21 Young/Adult entries, got {len(entries)}")

    width, header, card_w, card_h, gap, cols = 1250, 90, 230, 260, 16, 5
    rows = (len(entries) + cols - 1) // cols
    height = header + gap + rows * (card_h + gap)
    sheet = Image.new("RGB", (width, height), "#FFF9E9")
    draw = ImageDraw.Draw(sheet)
    draw.rounded_rectangle((15, 15, width - 15, height - 15), radius=28, outline="#23396B", width=5)
    draw.text((35, 26), f"{field} candidate artwork — 21 forms", font=font_title, fill="#23396B")

    for index, item in enumerate(entries, start=1):
        row = (index - 1) // cols
        col = (index - 1) % cols
        x = 35 + col * (card_w + gap)
        y = header + row * (card_h + gap)
        draw.rounded_rectangle((x, y, x + card_w, y + card_h), radius=22, fill="white", outline="#23396B", width=4)
        draw.rounded_rectangle((x + 8, y + 8, x + card_w - 8, y + 165), radius=16, fill=accent)

        local_asset = Path(item["localAsset"])
        if local_asset.exists():
            artwork = Image.open(local_asset).convert("RGBA")
            artwork.thumbnail((175, 145), Image.Resampling.LANCZOS)
            px = x + (card_w - artwork.width) // 2
            py = y + 16 + (140 - artwork.height) // 2
            sheet.paste(artwork, (px, py), artwork)

        draw.ellipse((x + 12, y + 12, x + 48, y + 48), fill="#FF6F61", outline="#23396B", width=2)
        number = str(index)
        number_box = draw.textbbox((0, 0), number, font=font_name)
        draw.text((x + 30 - (number_box[2] - number_box[0]) / 2, y + 20), number, font=font_name, fill="white")
        draw.text((x + 14, y + 178), item["name"][:21], font=font_name, fill="#23396B")
        draw.text((x + 14, y + 205), item["stage"], font=font_small, fill="#FF5F64")
        short_id = item["id"][:25]
        draw.text((x + 14, y + 229), short_id, font=font_small, fill="#607070")

    sheet.save(OUTPUT_DIR / f"{field.lower()}.png", quality=95)
    with (OUTPUT_DIR / f"{field.lower()}.json").open("w", encoding="utf-8") as file:
        json.dump([
            {"index": index, "id": item["id"], "english_name": item["name"], "stage": item["stage"], "local_asset": item["localAsset"]}
            for index, item in enumerate(entries, start=1)
        ], file, ensure_ascii=False, indent=2)
    print(field, len(entries), OUTPUT_DIR / f"{field.lower()}.png")
