import { motion } from "framer-motion"
import { Heart, HandHeart, ChevronDown } from "lucide-react"
import { ButtonLink } from "../ui/Button"
import { useLanguage } from "@/context/LanguageContext"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
}

const bandImages = [
  {
    src: "/images/community-home.jpeg",
    alt: { en: "Children gathered together in the community", fr: "Des enfants rassembles dans la communaute" },
  },
  {
    src: "/images/children-crowd.jpeg",
    alt: { en: "Children gathered at a ministry outreach", fr: "Des enfants rassembles lors d'une action du ministere" },
  },
  {
    src: "/images/evening-service.jpeg",
    alt: { en: "Children in an evening worship service", fr: "Des enfants lors d'un culte du soir" },
  },
  {
    src: "/images/children-celebration.jpeg",
    alt: { en: "Children smiling together", fr: "Des enfants souriant ensemble" },
  },
]

export function HomeHero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-royal-dark">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src="/images/children-joy.jpeg"
          alt={t({
            en: "Joyful children supported by Kingdom Builders Kids",
            fr: "Des enfants joyeux accompagnes par Kingdom Builders Kids",
          })}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-dark/85 via-royal-dark/70 to-royal-dark/95" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "url('/images/pattern-cross.png')" }}
        />
        {/* Gold glow accent */}
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-28 pb-10 text-center">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-gold backdrop-blur-sm"
        >
          {t({
            en: "A Christ-Centered Ministry of Hope",
            fr: "Un ministere d'esperance centre sur Christ",
          })}
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-4xl text-balance font-heading text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          {t({ en: "Rescuing & Raising", fr: "Secourir et Elever" })}{" "}
          <span className="animate-text-blink text-gold">
            {t({ en: "Forgotten Children", fr: "les Enfants Oublies" })}
          </span>{" "}
          {t({ en: "for God's Kingdom", fr: "pour le Royaume de Dieu" })}
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/80"
        >
          {t({
            en: "We rescue, protect, nurture, educate, disciple, and empower orphaned, disabled, abandoned, and vulnerable children through the love of Jesus Christ.",
            fr: "Nous secourons, protegeons, nourrissons, eduquons, discipulons et fortifions les enfants orphelins, handicapes, abandonnes et vulnerables par l'amour de Jesus-Christ.",
          })}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <ButtonLink to="/donate" variant="gold" size="lg">
            <Heart className="h-5 w-5" /> {t({ en: "Donate Now", fr: "Faire un don" })}
          </ButtonLink>
          <ButtonLink
            to="/get-involved"
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white hover:text-royal-dark"
          >
            <HandHeart className="h-5 w-5" /> {t({ en: "Get Involved", fr: "S'impliquer" })}
          </ButtonLink>
        </motion.div>
      </div>

      {/* Bottom photo band */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {bandImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 shadow-xl"
            >
              <img
                src={img.src}
                alt={t(img.alt)}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-royal-dark/20 transition-colors group-hover:bg-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.1 },
            y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="mt-8 flex flex-col items-center gap-1 text-white/60"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">
            {t({ en: "Discover More", fr: "Decouvrir Plus" })}
          </span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
