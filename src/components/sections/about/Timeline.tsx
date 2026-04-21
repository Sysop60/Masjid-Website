import BlurFade from "@/components/ui/BlurFade";
import MosaicPattern from "@/components/ui/MosaicPattern";

const MILESTONES = [
  {
    year: "1995",
    title: "Die Gründung",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    year: "2003",
    title: "Neuer Standort",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    year: "2012",
    title: "Erweiterung & Bildung",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    year: "2020",
    title: "Digitalisierung",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "Heute",
    title: "Unsere Zukunft",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

export default function Timeline() {
  return (
    <section className="relative bg-warm-white overflow-hidden">
      <MosaicPattern variant="corners" />

      {/* Soft edges */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 z-10">
        <BlurFade className="mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
            Unsere <span className="italic">Geschichte</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </BlurFade>

        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {MILESTONES.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <BlurFade
                  key={item.year}
                  delay={idx * 0.12}
                  direction={isLeft ? "left" : "right"}
                >
                  <div className="relative flex items-start md:items-center">
                    {/* Dot with glow */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-4 h-4 rounded-full bg-accent border-[3px] border-warm-white shadow-[0_0_12px_rgba(242,167,82,0.3)]" />
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[45%] ${
                        isLeft ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                      }`}
                    >
                      <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-primary mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
