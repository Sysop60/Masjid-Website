import BlurFade from "@/components/ui/BlurFade";

export default function WhoWeAre() {
  return (
    <section className="relative bg-warm-white overflow-hidden">
      {/* Ambient Orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />

      {/* Top gradient fade from hero */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <BlurFade direction="left">
            <div className="relative">
              {/* Accent line */}
              <div className="absolute -left-4 sm:-left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />
              <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
                Wer wir sind
              </p>
              <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif leading-tight">
                Ein Ort des <span className="italic">Glaubens</span>,
                <br />
                der <span className="italic">Begegnung</span>
                <br />
                und des <span className="italic">Miteinanders</span>
              </h2>
            </div>
          </BlurFade>

          {/* Right: Text */}
          <BlurFade direction="right" delay={0.2}>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
