import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { CtaSection } from "../components/CtaSection"
import {
  visionStatement,
  missionStatement,
  coreValues,
  objectives,
  longTermGoals,
} from "../lib/content"
import { site } from "../lib/site"
import { Eye, Target, CheckCircle2, Flag, Quote } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function AboutPage() {
  const { t } = useLanguage()

  useSeo({
    title: t({
      en: "About Us | Kingdom Builders Kids",
      fr: "A Propos | Kingdom Builders Kids",
    }),
    description: t({
      en: "Learn about Kingdom Builders Kids — our story, vision, mission, core values, objectives, and long-term goals to care for vulnerable children in the love of Christ.",
      fr: "Decouvrez Kingdom Builders Kids: notre histoire, notre vision, notre mission, nos valeurs fondamentales, nos objectifs et nos buts a long terme pour prendre soin des enfants vulnerables dans l'amour du Christ.",
    }),
  })

  return (
    <>
      <PageHero
        crumb={t({ en: "About Us", fr: "A Propos" })}
        title={t({ en: "Who We Are", fr: "Qui Nous Sommes" })}
        subtitle={t({
          en: "A Christ-centered ministry devoted to rescuing, nurturing, and empowering the most vulnerable children.",
          fr: "Un ministere centre sur Christ consacre au secours, a l'accompagnement et au renforcement des enfants les plus vulnerables.",
        })}
        image="/images/congregation.jpeg"
      />

      {/* Story */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/children-joy.jpeg"
                alt={t({
                  en: "Children cared for by Kingdom Builders Kids",
                  fr: "Des enfants accompagnes par Kingdom Builders Kids",
                })}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-green">
              {t({ en: "Our Story", fr: "Notre Histoire" })}
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-royal-dark sm:text-4xl">
              {t({
                en: "Building children for God's Kingdom",
                fr: "Former des enfants pour le Royaume de Dieu",
              })}
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gold" />
            <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                {t({
                  en: "Kingdom Builders Kids was born out of a deep compassion for orphaned, abandoned, disabled, and less fortunate children — the children the world too often forgets.",
                  fr: "Kingdom Builders Kids est ne d'une profonde compassion pour les enfants orphelins, abandonnes, handicapes et defavorises, ceux que le monde oublie trop souvent.",
                })}
              </p>
              <p>
                {t({
                  en: "We believe every child is precious and created in the image of God. No matter their background, tribe, religion, or social status, every child deserves love, protection, opportunity, and the hope found in Jesus Christ.",
                  fr: "Nous croyons que chaque enfant est precieux et cree a l'image de Dieu. Quelle que soit son origine, son ethnie, sa religion ou son statut social, chaque enfant merite l'amour, la protection, des opportunites et l'esperance trouvee en Jesus-Christ.",
                })}
              </p>
              <p>
                {t({
                  en: "Through Christ-centered care, family support, healthcare, education, and spiritual development, we walk with vulnerable children and help them become godly leaders who will impact future generations for God's Kingdom.",
                  fr: "Grace a des soins centres sur Christ, au soutien familial, a la sante, a l'education et au developpement spirituel, nous marchons avec les enfants vulnerables et les aidons a devenir des leaders pieux qui influenceront les generations futures pour le Royaume de Dieu.",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="flex h-full flex-col rounded-3xl bg-primary p-8 text-primary-foreground shadow-lg lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-royal-dark">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold">{t({ en: "Our Vision", fr: "Notre Vision" })}</h3>
                <div className="mt-3 h-1 w-16 rounded-full bg-secondary" />
                <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/85">
                  {t(visionStatement)}
                </p>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-green p-8 text-white shadow-lg lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-green">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold">{t({ en: "Our Mission", fr: "Notre Mission" })}</h3>
                <div className="mt-3 h-1 w-16 rounded-full bg-white/70" />
                <p className="mt-5 text-pretty leading-relaxed text-white/90">
                  {t(missionStatement)}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "What Guides Us", fr: "Ce Qui Nous Guide" })}
            title={t({ en: "Our Core Values", fr: "Nos Valeurs Fondamentales" })}
            subtitle={t({
              en: "The convictions that shape everything we do.",
              fr: "Les convictions qui faconnent tout ce que nous faisons.",
            })}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <Reveal key={value.title.en} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-royal-dark">
                    {t(value.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(value.desc)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="relative overflow-hidden bg-royal-dark py-20 text-white lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "url(/images/pattern-cross.png)", backgroundSize: "200px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">
              {t({ en: "Our Objectives", fr: "Nos Objectifs" })}
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold sm:text-4xl">
              {t({ en: "What We Set Out To Do", fr: "Ce Que Nous Nous Engageons a Faire" })}
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {objectives.map((item, i) => (
              <Reveal key={item.en} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold font-heading text-sm font-bold text-royal-dark">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-white/90">{t(item)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term goals */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "Looking Ahead", fr: "Regarder Plus Loin" })}
            title={t({ en: "Our Long-Term Goals", fr: "Nos Objectifs a Long Terme" })}
            subtitle={t({
              en: "The future God is calling us to build, one child at a time.",
              fr: "L'avenir que Dieu nous appelle a construire, un enfant a la fois.",
            })}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {longTermGoals.map((goal, i) => (
              <Reveal key={goal.en} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                    <Flag className="h-5 w-5" />
                  </div>
                  <p className="pt-1 leading-relaxed text-foreground">{t(goal)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <Reveal direction="right" className="lg:col-span-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/CEO.jpeg"
                  alt={site.founder}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <Quote className="h-12 w-12 text-gold" />
            <blockquote className="mt-5 text-balance font-heading text-2xl font-semibold leading-snug text-royal-dark sm:text-3xl">
              &ldquo;
              {t({
                en: "Every child is precious in the eyes of God. When we lift up the forgotten, the abandoned, and the vulnerable, we are building His Kingdom one life at a time.",
                fr: "Chaque enfant est precieux aux yeux de Dieu. Quand nous relevons les oublies, les abandonnes et les vulnerables, nous construisons Son Royaume une vie a la fois.",
              })}
              &rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-heading text-lg font-bold text-royal-dark">
                {site.founder}
              </p>
              <p className="text-muted-foreground">{t(site.founderTitle)}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
