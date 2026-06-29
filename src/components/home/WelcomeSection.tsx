import { Reveal } from "../ui/Reveal"
import { ButtonLink } from "../ui/Button"
import { missionStatement } from "@/lib/content"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function WelcomeSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/welcome.png"
                alt={t({ en: "A child smiling with hope", fr: "Un enfant qui sourit avec espoir" })}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold px-6 py-5 shadow-lg sm:block lg:-right-6">
              <div className="font-heading text-3xl font-bold text-royal-dark">
                James 1:27
              </div>
              <div className="text-sm font-medium text-royal-dark/80">
                {t({ en: "Pure and faultless religion", fr: "Une religion pure et sans tache" })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <span className="inline-block font-heading text-sm font-semibold uppercase tracking-widest text-green">
            {t({ en: "Welcome to Kingdom Builders Kids", fr: "Bienvenue a Kingdom Builders Kids" })}
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold leading-tight text-royal-dark sm:text-4xl">
            {t({ en: "Every child deserves love, hope, and a future", fr: "Chaque enfant merite l'amour, l'esperance et un avenir" })}
          </h2>
          <div className="mt-5 h-1 w-20 rounded-full bg-gold" />
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t(missionStatement)}
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t({
              en: "We believe every child is precious and created in the image of God. Through Christ-centered care, we walk with forgotten children and give them the chance to thrive.",
              fr: "Nous croyons que chaque enfant est precieux et cree a l'image de Dieu. Grace a des soins centres sur Christ, nous marchons avec les enfants oublies et leur donnons l'occasion de s'epanouir.",
            })}
          </p>
          <div className="mt-8">
            <ButtonLink to="/about" variant="primary" size="lg">
              {t({ en: "Learn Our Story", fr: "Decouvrir Notre Histoire" })} <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
