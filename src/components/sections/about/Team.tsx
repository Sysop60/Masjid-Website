import { User } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

const TEAM_MEMBERS = [
  { name: "Max Mustermann", role: "1. Vorsitzender" },
  { name: "Ahmed Beispiel", role: "2. Vorsitzender" },
  { name: "Youssef Platzhalter", role: "Schatzmeister" },
  { name: "Omar Muster", role: "Schriftführer" },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <BlurFade className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight font-serif">
            Unser <span className="italic">Vorstand</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <BlurFade key={member.name} delay={idx * 0.1}>
              <div
                className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-[2rem] border border-white/10 ring-1 ring-white/5 hover:scale-[1.03] transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                  backdropFilter: "blur(40px) saturate(1.4)",
                  WebkitBackdropFilter: "blur(40px) saturate(1.4)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                {/* Avatar */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 flex items-center justify-center text-white/30 mb-5 border border-white/15 group-hover:border-accent/40 transition-colors duration-500">
                  <User className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-white/40 mt-1">{member.role}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
