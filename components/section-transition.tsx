import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  variant?: "toMuted" | "toBackground";
}

export function SectionTransition({ variant = "toMuted" }: SectionTransitionProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-full h-24 sm:h-32 lg:h-40 shrink-0 pointer-events-none",
        variant === "toMuted"
          ? "bg-gradient-to-b from-background to-muted/40"
          : "bg-gradient-to-b from-muted/40 to-background"
      )}
      style={{ scrollSnapAlign: "none" }}
    />
  );
}
