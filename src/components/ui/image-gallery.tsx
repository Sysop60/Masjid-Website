"use client";

import BlurFade from "@/components/ui/blur-fade";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591604129939-f1efa4f9b7eb?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&h=800&w=800&auto=format&fit=crop",
];

export default function ImageGallery() {
  return (
    <section className="w-full flex flex-col items-center justify-start py-12 sm:py-20">
      <BlurFade className="max-w-3xl text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
          Einblicke in unsere{" "}
          <span className="italic">Moschee</span>
        </h2>
        <p className="text-sm text-gray-500 mt-3 px-2">
          Entdecken Sie die Atmosphäre, Architektur und das Gemeindeleben in
          unserer Moschee.
        </p>
      </BlurFade>

      {/* Desktop: Horizontal expand gallery */}
      <BlurFade delay={0.2} duration={1} className="hidden md:block w-full">
        <div className="flex items-center gap-2 h-[400px] w-full max-w-6xl mx-auto mt-10 px-4">
          {GALLERY_IMAGES.map((src, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-xl overflow-hidden h-[400px] duration-500 hover:w-full"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={src}
                alt={`Galerie ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Mobile: Horizontal scroll carousel */}
      <div className="md:hidden w-full mt-8">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {GALLERY_IMAGES.map((src, idx) => (
            <BlurFade key={idx} delay={0.1 + idx * 0.08}>
              <div className="flex-shrink-0 w-[75vw] sm:w-[60vw] h-[280px] snap-center rounded-2xl overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src={src}
                  alt={`Galerie ${idx + 1}`}
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
