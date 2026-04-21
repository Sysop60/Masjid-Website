import Image from "next/image";
import { Heart, BookOpen, Users } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import mosaicPattern from "@/assets/images/Gemini_Generated_Image_mbc1twmbc1twmbc1.png";

const VALUES = [
  {
    icon: Heart,
    title: "Gemeinschaft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: BookOpen,
    title: "Bildung",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    icon: Users,
    title: "Offenheit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function Values() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Mosaic Pattern Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -top-16 -right-32 w-[500px] h-[500px] object-contain opacity-[0.08]"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
        <Image
          src={mosaicPattern}
          alt=""
          className="absolute -bottom-24 -left-36 w-[600px] h-[600px] object-contain opacity-[0.06]"
          style={{ maskImage: "radial-gradient(ellipse, black 30%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
            Unsere <span className="italic">Werte</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((value, idx) => (
            <BlurFade key={value.title} delay={idx * 0.15}>
              <div
                className="group rounded-[2rem] p-8 sm:p-10 border border-white/30 ring-1 ring-white/40 h-full transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,253,250,0.25) 100%)",
                  backdropFilter: "blur(40px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(40px) saturate(1.6)",
                  boxShadow: "0 4px 16px rgba(1,61,39,0.05), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-500">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
