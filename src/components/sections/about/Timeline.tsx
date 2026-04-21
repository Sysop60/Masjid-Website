import BlurFade from "@/components/ui/BlurFade";

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <BlurFade className="mb-16">
        <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
          Unsere <span className="italic">Geschichte</span>
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </BlurFade>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gray-200" />

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
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-white shadow-sm z-10" />

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
    </section>
  );
}
