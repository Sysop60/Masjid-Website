import BlurFade from "@/components/ui/BlurFade";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleItalic?: string;
  titleAfter?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  titleItalic,
  titleAfter,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <BlurFade className={cn(align === "center" && "text-center", className)}>
      {tag && (
        <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
          {tag}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-normal text-primary tracking-tight font-serif">
        {title}{" "}
        {titleItalic && <span className="italic">{titleItalic}</span>}
        {titleAfter && ` ${titleAfter}`}
      </h2>
      {description && (
        <p className={cn("mt-4 text-gray-500 text-lg", align === "center" ? "max-w-xl mx-auto" : "max-w-xl")}>
          {description}
        </p>
      )}
    </BlurFade>
  );
}
