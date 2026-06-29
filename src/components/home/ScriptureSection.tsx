import { motion } from "framer-motion"
import { Reveal } from "../ui/Reveal"
import { themeScriptures } from "../../lib/content"
import { Quote } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function ScriptureSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-royal-dark py-20 text-white lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "url(/images/pattern-cross.png)", backgroundSize: "200px" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
            {t({ en: "Rooted in Scripture", fr: "Ancre dans les Ecritures" })}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl">
            {t({ en: "God's Heart for Children", fr: "Le coeur de Dieu pour les enfants" })}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {themeScriptures.map((s, i) => (
            <Reveal key={s.ref} delay={i * 0.12}>
              <motion.blockquote
                whileHover={{ y: -4 }}
                className="flex h-full flex-col rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <Quote className="h-9 w-9 text-gold" />
                <p className="mt-5 flex-1 text-pretty text-lg leading-relaxed text-white/90">
                  &ldquo;{t(s.text)}&rdquo;
                </p>
                <footer className="mt-6 font-heading font-semibold text-gold">
                  {s.ref}
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
