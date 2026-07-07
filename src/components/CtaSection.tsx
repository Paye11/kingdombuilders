import { Heart, HandHeart } from "lucide-react"
import { ButtonLink } from "./ui/Button"
import { Reveal } from "./ui/Reveal"
import { useLanguage } from "@/context/LanguageContext"
import type { LocalizedText } from "@/lib/i18n"

export function CtaSection({
  title = {
    en: "Every Child Deserves Hope",
    fr: "Chaque enfant mérite l'espérance",
  },
  description = {
    en: "Your compassion can rescue a child from being forgotten. Partner with us today and help build children for God's Kingdom.",
    fr: "Votre compassion peut sauver un enfant de l'oubli. Rejoignez-nous aujourd'hui et aidez-nous à former des enfants pour le Royaume de Dieu.",
  },
}: {
  title?: LocalizedText
  description?: LocalizedText
}) {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-royal py-20 lg:py-24">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/pattern-cross.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t(title)}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            {t(description)}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink to="/donate" variant="gold" size="lg">
              <Heart className="h-5 w-5" /> {t({ en: "Donate Now", fr: "Faire un don" })}
            </ButtonLink>
            <ButtonLink to="/get-involved" variant="white" size="lg">
              <HandHeart className="h-5 w-5" /> {t({ en: "Get Involved", fr: "S'impliquer" })}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
