import { useParams, Navigate, Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { CtaSection } from "../components/CtaSection"
import { ButtonLink } from "../components/ui/Button"
import { programs } from "../lib/content"
import { useLanguage } from "../context/LanguageContext"
import type { LocalizedText } from "../lib/i18n"

const highlightsBySlug: Record<string, LocalizedText[]> = {
  "orphan-care": [
    { en: "Safe shelter and loving family-style care", fr: "Un abri sûr et un accompagnement familial rempli d'amour" },
    { en: "Daily provision of food, clothing, and essentials", fr: "Une provision quotidienne de nourriture, de vêtements et d'articles essentiels" },
    { en: "Protection from abuse, neglect, and exploitation", fr: "Une protection contre les abus, la négligence et l'exploitation" },
    { en: "Emotional healing and a sense of belonging", fr: "La guérison émotionnelle et un sentiment d'appartenance" },
  ],
  "education-support": [
    { en: "School enrollment and tuition assistance", fr: "Inscription scolaire et aide aux frais de scolarité" },
    { en: "Books, uniforms, and learning materials", fr: "Livres, uniformes et matériel d'apprentissage" },
    { en: "After-school tutoring and academic support", fr: "Soutien scolaire après les cours et accompagnement académique" },
    { en: "Encouraging every child to reach their potential", fr: "Encourager chaque enfant à atteindre son potentiel" },
  ],
  "child-health": [
    { en: "Medical treatment and regular check-ups", fr: "Traitements médicaux et bilans réguliers" },
    { en: "Health screenings and preventative care", fr: "Dépistages de santé et soins préventifs" },
    { en: "Nutritional support for healthy growth", fr: "Soutien nutritionnel pour une croissance saine" },
    { en: "Access to medicine and follow-up care", fr: "Accès aux médicaments et aux soins de suivi" },
  ],
  discipleship: [
    { en: "Bible lessons and Scripture memorization", fr: "Leçons bibliques et mémorisation des Écritures" },
    { en: "Prayer, worship, and spiritual mentoring", fr: "Prière, louange et mentorat spirituel" },
    { en: "Christian character and values development", fr: "Développement du caractère et des valeurs chrétiennes" },
    { en: "Raising future godly leaders", fr: "Former de futurs leaders pieux" },
  ],
  "community-outreach": [
    { en: "Mobilizing churches to care for children", fr: "Mobiliser les églises pour prendre soin des enfants" },
    { en: "Partnering with families and caregivers", fr: "Collaborer avec les familles et les personnes en charge des enfants" },
    { en: "Identifying and supporting vulnerable children", fr: "Identifier et soutenir les enfants vulnérables" },
    { en: "Multiplying compassion across communities", fr: "Multiplier la compassion dans les communautés" },
  ],
}

export default function ProgramDetailPage() {
  const { t } = useLanguage()
  const { slug } = useParams<{ slug: string }>()
  const program = programs.find((p) => p.slug === slug)

  if (!program) {
    return <Navigate to="/" replace />
  }

  useSeo({
    title: `${t(program.title)} | Kingdom Builders Kids`,
    description: t(program.description),
  })

  const Icon = program.icon
  const highlights = highlightsBySlug[program.slug] ?? []
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3)

  return (
    <>
      <PageHero
        crumb={t(program.title)}
        title={t(program.title)}
        subtitle={t(program.short)}
        image={program.image}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={t(program.title)}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal text-white shadow-md">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="font-heading text-sm font-semibold uppercase tracking-widest text-green">
                    {t({ en: "Our Programs", fr: "Nos programmes" })}
                  </span>
                </div>

                <h2 className="mt-5 text-balance font-heading text-2xl font-bold text-royal-dark sm:text-3xl">
                  {t(program.title)}
                </h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-gold" />
                <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {t(program.description)}
                </p>

                {highlights.length > 0 && (
                  <ul className="mt-7 space-y-3">
                    {highlights.map((h) => (
                      <li key={h.en} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/10 text-green">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="text-pretty leading-relaxed text-royal-dark">
                          {t(h)}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink to="/donate" variant="gold">
                    {t({ en: "Support This Program", fr: "Soutenir ce programme" })}
                  </ButtonLink>
                  <ButtonLink to="/get-involved" variant="outline">
                    {t({ en: "Get Involved", fr: "S'impliquer" })}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Explore other programs */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-bold text-royal-dark sm:text-3xl">
            {t({ en: "Explore Other Programs", fr: "Explorer les autres programmes" })}
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => {
              const OtherIcon = p.icon
              return (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    to={`/programs/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={p.image || "/placeholder.svg"}
                        alt={t(p.title)}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-md">
                        <OtherIcon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-lg font-bold text-royal-dark">
                        {t(p.title)}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {t(p.short)}
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
        </div>
      </section>

      <CtaSection
        title={{
          en: "Help Us Sustain This Program",
          fr: "Aidez-nous à soutenir ce programme",
        }}
        description={{
          en: "Your generosity keeps this program running and changes the lives of children who need it most.",
          fr: "Votre générosité permet à ce programme de continuer et transforme la vie des enfants qui en ont le plus besoin.",
        }}
      />
    </>
  )
}
