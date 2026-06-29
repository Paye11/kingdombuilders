import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"
import { ButtonLink } from "../ui/Button"
import { successStories } from "../../lib/content"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"

export function StoriesPreview() {
  const { t } = useLanguage()

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t({ en: "Lives Transformed", fr: "Vies Transformees" })}
          title={t({ en: "Stories of Hope", fr: "Histoires d'Esperance" })}
          subtitle={t({
            en: "Behind every program is a child whose life has been changed forever.",
            fr: "Derriere chaque programme se trouve un enfant dont la vie a change pour toujours.",
          })}
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {successStories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 0.1}>
              <Link
                to="/success-stories"
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl sm:flex-row"
              >
                <div className="relative h-56 overflow-hidden sm:h-auto sm:w-2/5">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="font-heading text-xl font-bold text-royal-dark">
                    {story.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-green">{t(story.title)}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t(story.excerpt)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green">
                    {t({ en: "Read story", fr: "Lire l'histoire" })}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink to="/success-stories" variant="green" size="lg">
            {t({ en: "Read More Stories", fr: "Lire Plus d'Histoires" })} <ArrowRight className="h-5 w-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
