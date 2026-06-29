import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  light?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block font-heading text-sm font-semibold uppercase tracking-widest",
            light ? "text-gold" : "text-green",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-royal-dark",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-1 w-20 rounded-full bg-gold",
          align === "center" && "mx-auto",
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-6 text-pretty text-lg leading-relaxed",
            light ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
