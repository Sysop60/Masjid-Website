import Image from "next/image";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";

type Placement = {
  position: string;
  size: string;
  opacity: string;
};

const PRESETS = {
  corners: [
    { position: "-top-16 -right-32", size: "w-[500px] h-[500px]", opacity: "opacity-20" },
    { position: "-bottom-24 -left-36", size: "w-[600px] h-[600px]", opacity: "opacity-15" },
    { position: "-top-20 -left-32", size: "w-[500px] h-[500px]", opacity: "opacity-20" },
    { position: "-bottom-20 -right-28", size: "w-[500px] h-[500px]", opacity: "opacity-20" },
  ],
  footer: [
    { position: "-bottom-20 left-1/2 -translate-x-1/2", size: "w-[600px] h-[600px]", opacity: "opacity-15" },
    { position: "-top-16 -right-32", size: "w-[500px] h-[500px]", opacity: "opacity-20" },
    { position: "-top-20 -left-32", size: "w-[500px] h-[500px]", opacity: "opacity-20" },
  ],
  subtle: [
    { position: "-top-16 -right-32", size: "w-[500px] h-[500px]", opacity: "opacity-[0.08]" },
    { position: "-bottom-24 -left-36", size: "w-[600px] h-[600px]", opacity: "opacity-[0.06]" },
  ],
} satisfies Record<string, Placement[]>;

interface MosaicPatternProps {
  variant?: keyof typeof PRESETS;
  placements?: Placement[];
}

export default function MosaicPattern({ variant = "corners", placements }: MosaicPatternProps) {
  const items = placements ?? PRESETS[variant];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((item, i) => (
        <Image
          key={i}
          src={mosaicPattern}
          alt=""
          className={`absolute ${item.position} ${item.size} object-contain ${item.opacity}`}
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
