import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { CtaSection } from "../components/CtaSection"
import { successStories } from "../lib/content"
import { Quote } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function SuccessStoriesPage() {
  const { t } = useLanguage()

  useSeo({
    title: t({
      en: "Success Stories | Kingdom Builders Kids",
      fr: "Temoignages de Reussite | Kingdom Builders Kids",
    }),
    description: t({
      en: "Read real stories of hope and transformation — children who were once forgotten and are now thriving through the love and care of Kingdom Builders Kids.",
      fr: "Lisez de vraies histoires d'esperance et de transformation: des enfants autrefois oublies qui s'epanouissent aujourd'hui grace a l'amour et aux soins de Kingdom Builders Kids.",
    }),
  })

  return (
    <>
      <PageHero
        crumb={t({ en: "Success Stories", fr: "Temoignages de Reussite" })}
        title={t({ en: "Stories of Hope & Transformation", fr: "Histoires d'Esperance et de Transformation" })}
        subtitle={t({
          en: "Behind every program is a child whose life has been forever changed by love, care, and the hope of Christ.",
          fr: "Derriere chaque programme se trouve un enfant dont la vie a ete changee pour toujours par l'amour, les soins et l'esperance du Christ.",
        })}
        image="/images/hero-stories.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "Lives Transformed", fr: "Vies Transformees" })}
            title={t({ en: "Real Children, Real Hope", fr: "De Vrais Enfants, Une Vraie Esperance" })}
            subtitle={t({
              en: "These are just a few of the precious lives being rebuilt for God's Kingdom.",
              fr: "Ce ne sont que quelques-unes des vies precieuses en reconstruction pour le Royaume de Dieu.",
            })}
          />

          <div className="mt-16 space-y-16 lg:space-y-24">
            {successStories.map((story, i) => {
              const reversed = i % 2 === 1
              return (
                <Reveal key={story.slug}>
                  <article
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative">
                      <div className="overflow-hidden rounded-3xl shadow-xl">
                        <img
                          src={story.image || "/placeholder.svg"}
                          alt={story.name}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-5 left-6 rounded-2xl bg-gold px-6 py-4 shadow-lg">
                        <p className="font-heading text-xl font-bold text-royal-dark">
                          {story.name}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Quote className="h-10 w-10 text-gold" />
                      <h3 className="mt-4 text-balance font-heading text-2xl font-bold text-royal-dark sm:text-3xl">
                        {t(story.title)}
                      </h3>
                      <div className="mt-4 h-1 w-16 rounded-full bg-green" />
                      <div className="mt-5 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                        {story.story.map((p, idx) => (
                          <p key={idx}>{t(p)}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal>
            <div className="mt-20 rounded-3xl bg-cream p-8 text-center lg:p-12">
              <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {t({
                  en: "Every story of transformation begins with someone who chose to care. Your support can write the next story of hope.",
                  fr: "Chaque histoire de transformation commence avec quelqu'un qui a choisi de prendre soin. Votre soutien peut ecrire la prochaine histoire d'esperance.",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title={{
          en: "Be Part of the Next Story",
          fr: "Faites Partie de la Prochaine Histoire",
        }}
        description={{
          en: "When you give, volunteer, or pray, you help write a new story of hope for a child who needs it most.",
          fr: "Lorsque vous donnez, faites du benevolat ou priez, vous aidez a ecrire une nouvelle histoire d'esperance pour un enfant qui en a le plus besoin.",
        }}
      />
    </>
  )
}
