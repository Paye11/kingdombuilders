import { motion } from "framer-motion"
import { Reveal } from "../ui/Reveal"
import { stats } from "../../lib/content"
import { useLanguage } from "@/context/LanguageContext"

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{ backgroundImage: "url(/images/pattern-cross.png)", backgroundSize: "240px" }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={`${stat.value}-${stat.label.en}`} delay={i * 0.1} className="text-center">
            <motion.p
              className="font-heading text-4xl font-bold text-secondary md:text-5xl"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 140, damping: 12, delay: i * 0.1 }}
            >
              {stat.value}
            </motion.p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-primary-foreground/80 md:text-base">
              {t(stat.label)}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
