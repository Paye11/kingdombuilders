import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type Variant = "primary" | "gold" | "green" | "outline" | "ghost" | "white"
type Size = "sm" | "md" | "lg"

const variants: Record<Variant, string> = {
  primary:
    "bg-royal text-white hover:bg-royal-dark shadow-lg shadow-royal/20",
  gold: "bg-gold text-royal-dark hover:bg-gold-dark shadow-lg shadow-gold/20",
  green: "bg-green text-white hover:bg-green-dark shadow-lg shadow-green/20",
  outline:
    "border-2 border-royal text-royal hover:bg-royal hover:text-white",
  ghost: "text-royal hover:bg-muted",
  white: "bg-white text-royal hover:bg-muted shadow-lg",
}

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"

export function ButtonLink({
  to,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
}: CommonProps & { to: string; external?: boolean }) {
  const classes = cn(base, variants[variant], sizes[size], className)
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}

export function Button({
  type = "button",
  onClick,
  disabled,
  variant = "primary",
  size = "md",
  className,
  children,
}: CommonProps & {
  type?: "button" | "submit"
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
}
