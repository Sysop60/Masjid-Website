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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
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
            <div className="group flex flex-col items-center text-center">
              {/* Avatar Placeholder */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-300 mb-5 group-hover:scale-105 transition-transform duration-500 border border-gray-200/50">
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
    </section>
  );
}
