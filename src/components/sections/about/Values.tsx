import { Heart, BookOpen, Users } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import MosaicPattern from "@/components/ui/MosaicPattern";

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
    <section className="relative py-24 sm:py-32 overflow-hidden bg-warm-white">
      <MosaicPattern variant="corners" />

      {/* Ambient warmth */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Soft edges */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

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
