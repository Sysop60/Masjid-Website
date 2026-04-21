import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
}

const intensityStyles = {
  light: {
    background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,253,250,0.2) 50%, rgba(255,255,255,0.3) 100%)",
    backdropFilter: "blur(40px) saturate(1.4)",
  },
  medium: {
    background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,253,250,0.25) 100%)",
    backdropFilter: "blur(60px) saturate(1.6)",
  },
  strong: {
    background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,253,250,0.35) 100%)",
    backdropFilter: "blur(80px) saturate(1.8)",
  },
};

export default function GlassCard({ children, className, intensity = "medium" }: GlassCardProps) {
  const styles = intensityStyles[intensity];

  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/30 ring-1 ring-white/40",
        "shadow-[0_4px_16px_rgba(1,61,39,0.05),inset_0_1px_0_rgba(255,255,255,0.4)]",
        className
      )}
      style={{
        background: styles.background,
        backdropFilter: styles.backdropFilter,
        WebkitBackdropFilter: styles.backdropFilter,
      }}
    >
      {children}
    </div>
  );
}
