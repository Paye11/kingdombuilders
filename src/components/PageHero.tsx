import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function PageHero({
  title,
  subtitle,
  image,
  crumb,
}: {
  title: string
  subtitle?: string
  image: string
  crumb: string
}) {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-[58vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={image || "/placeholder.svg"}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-dark/90 via-royal-dark/75 to-royal/50" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-white/70"
        >
          <Link to="/" className="hover:text-gold">
            {t({ en: "Home", fr: "Accueil" })}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gold">{crumb}</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-3xl text-balance font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
