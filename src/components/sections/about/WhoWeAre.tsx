import BlurFade from "@/components/ui/BlurFade";

export default function WhoWeAre() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Heading */}
        <BlurFade direction="left">
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
    </section>
  );
}
