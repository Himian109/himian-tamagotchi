/**
 * 日本角色遊樂園風格：用真實 Tamagotchi Artwork 排成不規則角色群，搭配彩虹軌道而非一般圖庫網格。
 */
import { characterCatalog } from "@/data/characters";

const positions = [
  { left: "35%", top: "18%", width: "35%", rotate: "-4deg" },
  { left: "4%", top: "48%", width: "26%", rotate: "7deg" },
  { left: "67%", top: "52%", width: "27%", rotate: "-7deg" },
  { left: "10%", top: "2%", width: "23%", rotate: "-9deg" },
  { left: "68%", top: "0%", width: "24%", rotate: "9deg" },
];

export default function CharacterParade({ names, className = "" }: { names: string[]; className?: string }) {
  const characters = names.map((name) => characterCatalog.find((item) => item.name === name)).filter(Boolean);
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute inset-[1%] rounded-[48%_52%_44%_56%/55%_55%_45%_45%] border-[4px] border-[#273d76] bg-[#ff7a70] shadow-[0_10px_0_rgba(39,61,118,.22)]" />
      <div className="absolute inset-[9%_11%_18%] rounded-[42%_44%_36%_38%] border-[4px] border-[#273d76] bg-[#9fe1ee]" />
      <div className="absolute inset-[13%_15%_22%] rounded-[42%] border-[18px] border-[#ffec67]/90" />
      <span className="absolute bottom-[7%] left-[39%] h-[7%] w-[7%] rounded-full border-2 border-[#273d76] bg-[#ffec67]" />
      <span className="absolute bottom-[7%] left-[48%] h-[7%] w-[7%] rounded-full border-2 border-[#273d76] bg-[#f7a6c8]" />
      <span className="absolute bottom-[7%] left-[57%] h-[7%] w-[7%] rounded-full border-2 border-[#273d76] bg-[#92dfbc]" />
      {characters.slice(0, 5).map((character, index) => {
        if (!character) return null;
        const position = positions[index];
        return <img loading="lazy" key={`${character.id}-${index}`} src={character.artwork} alt="" className="absolute h-auto object-contain drop-shadow-[0_7px_0_rgba(39,61,118,.13)]" style={{ left: position.left, top: position.top, width: position.width, transform: `rotate(${position.rotate})` }} />;
      })}
    </div>
  );
}
