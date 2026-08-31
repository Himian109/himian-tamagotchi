import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { characterCatalog } from "@/data/characters";
import { hasSeenSupportPopup, markSupportPopupSeen } from "@/data/supportPopup";
import { ExternalLink, Heart, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const invitationUrl = "https://manus.im/invitation/ZOFL7IJ4WO5Q?utm_source=invitation&utm_medium=social&utm_campaign=copy_link";

const decorations = ["Mametchi", "Mimitchi", "Kuchipatchi"]
  .map((name) => characterCatalog.find((character) => character.name === name))
  .filter((character): character is NonNullable<typeof character> => Boolean(character));

export default function SupportPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(!hasSeenSupportPopup(window.localStorage));
    } catch {
      setOpen(true);
    }
  }, []);

  const rememberAndClose = () => {
    try {
      markSupportPopupSeen(window.localStorage);
    } catch {
      // Storage may be unavailable in strict privacy mode; the close action still works.
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && rememberAndClose()}>
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(event) => event.preventDefault()}
        className="support-popup max-h-[calc(100dvh-2rem)] w-[min(92vw,470px)] overflow-y-auto rounded-[2rem] border-[3px] border-[#23396b] bg-[#fff8e7] p-0 text-[#23396b] shadow-[0_10px_0_#23396b,0_24px_70px_rgba(35,57,107,.28)]"
      >
        <DialogClose asChild>
          <button
            type="button"
            onClick={rememberAndClose}
            className="focus-ring absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#23396b] bg-white text-[#23396b] shadow-[0_2px_0_#23396b] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label="關閉支持訊息，之後不再顯示"
            title="關閉"
          >
            <X className="h-3.5 w-3.5" strokeWidth={3} />
          </button>
        </DialogClose>

        <div className="relative overflow-hidden rounded-t-[1.8rem] border-b-[3px] border-[#23396b] bg-[#9fe1ee] px-6 pb-5 pt-8 text-center">
          <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-[#ffd75e]/80" aria-hidden="true" />
          <div className="absolute -right-7 top-9 h-24 w-24 rounded-full bg-[#ff8fb8]/70" aria-hidden="true" />
          <div className="relative mx-auto flex h-20 max-w-[250px] items-end justify-center gap-1" aria-hidden="true">
            {decorations.map((character, index) => (
              <img loading="lazy"
                key={character.id}
                src={character.artwork}
                alt=""
                className={`h-16 w-16 object-contain drop-shadow-[0_4px_0_rgba(35,57,107,.2)] ${index === 1 ? "mb-2 h-[4.75rem] w-[4.75rem]" : ""}`}
              />
            ))}
          </div>
          <div className="relative mt-3 inline-flex items-center gap-2 rounded-full border-2 border-[#23396b] bg-[#ffd75e] px-4 py-2 text-xs font-black shadow-[0_3px_0_#23396b]">
            <Heart className="h-4 w-4 fill-[#ff6f61] text-[#ff6f61]" />
            幫攻略星球補充能量
          </div>
        </div>

        <div className="px-6 pb-6 pt-5 text-center sm:px-8">
          <DialogTitle className="display-type text-2xl font-black leading-tight text-[#23396b] sm:text-[1.75rem]">
            感謝各位使用本網站
          </DialogTitle>
          <DialogDescription asChild>
            <div className="mt-4 space-y-3 text-[15px] font-bold leading-7 text-[#31534d]">
              <p>請各位大大動動手指，完成登入 Manus AI，幫本攻略網獲得維護更新的 AI 積分。</p>
            </div>
          </DialogDescription>

          <a
            href={invitationUrl}
            onClick={rememberAndClose}
            className="focus-ring mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-[3px] border-[#23396b] bg-[#ff6f61] px-5 py-4 text-lg font-black text-white shadow-[0_5px_0_#23396b] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
          >
            <Sparkles className="h-5 w-5" />
            請點我支持
            <ExternalLink className="h-4 w-4" />
          </a>

          <div className="mt-5 rounded-2xl border-2 border-dashed border-[#23396b]/35 bg-white/75 px-4 py-3 text-sm font-bold leading-6 text-[#31534d]">
            <p>不是詐騙、不是有毒網站，也無須花錢。</p>
            <p className="mt-1 text-[#d94f57]">好人一生平安</p>
          </div>
          <p className="mt-3 text-[11px] font-medium text-[#31534d]/70">連結將前往 manus.im；關閉或點擊後，本瀏覽器不再顯示。</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
