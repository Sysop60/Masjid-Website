import { User } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";
import MosaicPattern from "@/components/ui/MosaicPattern";

const TEAM_MEMBERS = [
  { name: "Max Mustermann", role: "1. Vorsitzender" },
  { name: "Ahmed Beispiel", role: "2. Vorsitzender" },
  { name: "Youssef Platzhalter", role: "Schatzmeister" },
  { name: "Omar Muster", role: "Schriftführer" },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden">
      <MosaicPattern variant="corners" />

      {/* Ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10">
        <BlurFade className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
            Unser <span className="italic">Vorstand</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <BlurFade key={member.name} delay={idx * 0.1}>
              <div
                className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-[2rem] border border-white/30 ring-1 ring-white/40 hover:scale-[1.03] transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,253,250,0.3) 100%)",
                  backdropFilter: "blur(40px) saturate(1.4)",
                  WebkitBackdropFilter: "blur(40px) saturate(1.4)",
                  boxShadow: "0 4px 16px rgba(1,61,39,0.04), inset 0 1px 0 rgba(255,255,255,0.5)",
                }}
              >
                {/* Avatar */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary/5 flex items-center justify-center text-primary/30 mb-5 border border-primary/10 group-hover:border-accent/30 transition-colors duration-500">
                  <User className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-base font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
