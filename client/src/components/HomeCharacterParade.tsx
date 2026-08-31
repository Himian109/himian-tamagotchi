import { characterCatalog } from "@/data/characters";

const officialArtwork: Record<string, string> = {
  Mametchi: "https://tamagotchi-official.com/tamagotchi/jp/character/2025/05/07/x5L4gBAu0ulur7Lp/22_%E3%81%BE%E3%82%81%E3%81%A3%E3%81%A1_LAND.png",
  Kuchipatchi: "https://tamagotchi-official.com/tamagotchi/jp/character/2025/05/07/7pLcB0f1vhrrGZcN/58_%E3%81%8F%E3%81%A1%E3%81%B1%E3%81%A3%E3%81%A1_SKY.png",
  Mimitchi: "https://tamagotchi-official.com/tamagotchi/jp/character/2025/05/07/jOxYtX6kq89MZuKz/23_%E3%81%BF%E3%81%BF%E3%81%A3%E3%81%A1_LAND.png",
  Irukatchi: "https://tamagotchi-official.com/tamagotchi/jp/character/2025/05/07/3lgIUTgfN1oa1JPE/34_%E3%81%84%E3%82%8B%E3%81%8B%E3%81%A3%E3%81%A1_WATER.png",
  Horhotchi: "https://tamagotchi-official.com/tamagotchi/jp/character/2025/05/07/we5Yc497XcMID13K/50_%E3%81%BB%E3%83%BC%E3%81%BB%E3%81%A3%E3%81%A1_SKY.png",
};

const positions = [
  "left-[3%] top-[4%] h-36 w-36 rotate-[-7deg]",
  "right-[7%] top-[7%] h-32 w-32 rotate-[6deg]",
  "left-[14%] bottom-[8%] h-32 w-32 rotate-[4deg]",
  "right-[20%] bottom-[12%] h-36 w-36 rotate-[-5deg]",
  "left-1/2 top-[32%] h-28 w-28 -translate-x-1/2 rotate-[3deg]",
];

export default function HomeCharacterParade({ names }: { names: string[] }) {
  const items = names
    .map((name) => ({ name, item: characterCatalog.find((character) => character.name === name) }))
    .filter(({ item }) => item);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {items.map(({ name, item }, index) => (
        <img
          key={name}
          src={officialArtwork[name] ?? item?.artwork}
          alt=""
          className={`float-soft absolute object-contain drop-shadow-[0_8px_8px_rgba(35,57,107,.14)] transition-transform duration-500 ${positions[index % positions.length]}`}
          loading="eager"
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
}
