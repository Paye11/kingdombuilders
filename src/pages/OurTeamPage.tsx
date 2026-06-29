import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { CtaSection } from "../components/CtaSection"
import { teamMembers } from "../lib/content"
import { useLanguage } from "../context/LanguageContext"

export default function OurTeamPage() {
  const { t } = useLanguage()

  useSeo({
    title: t({
      en: "Our Team | Kingdom Builders Kids",
      fr: "Notre Equipe | Kingdom Builders Kids",
    }),
    description: t({
      en: "Meet the dedicated leadership team of Kingdom Builders Kids, committed to rescuing and empowering vulnerable children.",
      fr: "Rencontrez l'equipe de direction dediee de Kingdom Builders Kids, engagee a secourir et a autonomiser les enfants vulnerables.",
    }),
  })

  return (
    <>
      <PageHero
        crumb={t({ en: "Our Team", fr: "Notre Equipe" })}
        title={t({ en: "Meet Our Leadership", fr: "Rencontrez Notre Direction" })}
        subtitle={t({
          en: "A dedicated team committed to transforming the lives of vulnerable children in the love of Christ.",
          fr: "Une equipe dediee engagee a transformer la vie des enfants vulnerables dans l'amour de Christ.",
        })}
        image="/images/hero-about.png"
      />

      {/* Team Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "Our Leadership", fr: "Notre Direction" })}
            title={t({ en: "Who Leads Us", fr: "Qui Nous Dirige" })}
            subtitle={t({
              en: "Passionate individuals serving God by serving His children.",
              fr: "Des individus passionnes servant Dieu en servant Ses enfants.",
            })}
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:-translate-y-2 hover:shadow-xl">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="font-heading text-xl font-bold text-royal-dark">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-green">
                      {t(member.title)}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(member.bio)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
