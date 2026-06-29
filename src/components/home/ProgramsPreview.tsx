import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"
import { ButtonLink } from "../ui/Button"
import { programs } from "../../lib/content"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"

export function ProgramsPreview() {
  const { t } = useLanguage()
  const featured = programs.slice(0, 6)
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          eyebrow={t({ en: "What We Do", fr: "Ce Que Nous Faisons" })}
          title={t({ en: "Our Programs", fr: "Nos Programmes" })}
          subtitle={t({
            en: "Eight Christ-centered programs working together to rescue, nurture, and empower vulnerable children.",
            fr: "Huit programmes centres sur Christ travaillent ensemble pour secourir, nourrir et fortifier les enfants vulnerables.",
          })}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((program, i) => {
            const Icon = program.icon
            return (
              <Reveal key={program.slug} delay={i * 0.08}>
                <Link
                  to={`/programs/${program.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={t(program.title)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-royal-dark shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-royal-dark">
                      {t(program.title)}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t(program.short)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green">
                      {t({ en: "Learn more", fr: "En savoir plus" })}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink to="/programs/orphan-care" variant="primary" size="lg">
            {t({ en: "Explore Our Programs", fr: "Explorer Nos Programmes" })} <ArrowRight className="h-5 w-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
