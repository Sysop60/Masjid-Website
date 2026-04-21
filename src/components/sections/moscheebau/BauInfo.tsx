import { Building2, MapPin, Hammer, Heart } from "lucide-react";
import BlurFade from "@/components/ui/BlurFade";

const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Grundstück gesichert",
    description:
      "Das Objekt für unsere neue Moschee wurde bereits erworben. Der Standort bietet Platz für Gebetshalle, Bildungsräume und Gemeindeflächen.",
  },
  {
    icon: Building2,
    title: "Umbau & Renovierung",
    description:
      "Das bestehende Gebäude muss umfassend umgebaut und renoviert werden, um den Anforderungen einer modernen Moschee gerecht zu werden.",
  },
  {
    icon: Hammer,
    title: "Was noch fehlt",
    description:
      "Sanitäranlagen, Gebetshalle, Schallisolierung, Heizungsanlage, Fassade und Innenausbau — jeder Beitrag hilft, diese Schritte zu verwirklichen.",
  },
  {
    icon: Heart,
    title: "Ihre Unterstützung zählt",
    description:
      "Ob einmalige Spende oder Dauerauftrag — jeder Euro fließt direkt in den Bau unserer neuen Moschee. Transparenz ist uns dabei besonders wichtig.",
  },
];

export default function BauInfo() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <BlurFade className="mb-16">
        <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
          Der <span className="italic">Weg</span> zu unserer neuen Moschee
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-xl">
          Was bisher geschah und was noch vor uns liegt.
        </p>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {INFO_CARDS.map((card, idx) => (
          <BlurFade key={card.title} delay={idx * 0.1}>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
