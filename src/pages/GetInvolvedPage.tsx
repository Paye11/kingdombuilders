import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { ButtonLink } from "../components/ui/Button"
import { CtaSection } from "../components/CtaSection"
import { Heart, HandHeart, Users, Church, Megaphone, GraduationCap } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const ways = [
  {
    icon: Heart,
    title: { en: "Give a Donation", fr: "Faire un Don" },
    desc: {
      en: "Your financial gift provides food, healthcare, education, and shelter for vulnerable children. Every gift makes a real difference.",
      fr: "Votre don financier fournit de la nourriture, des soins de sante, de l'education et un abri aux enfants vulnerables. Chaque don fait une vraie difference.",
    },
    to: "/donate",
    cta: { en: "Donate Now", fr: "Faire un don" },
    variant: "gold" as const,
  },
  {
    icon: HandHeart,
    title: { en: "Sponsor a Child", fr: "Parrainer un Enfant" },
    desc: {
      en: "Walk alongside a child by helping provide for their ongoing needs — their care, education, and spiritual growth.",
      fr: "Marchez aux cotes d'un enfant en aidant a repondre a ses besoins permanents: soins, education et croissance spirituelle.",
    },
    to: "/contact",
    cta: { en: "Become a Sponsor", fr: "Devenir Parrain" },
    variant: "primary" as const,
  },
  {
    icon: Users,
    title: { en: "Volunteer", fr: "Faire du Benevolat" },
    desc: {
      en: "Share your time, skills, and heart. Volunteers help with caregiving, teaching, mentoring, outreach, and special events.",
      fr: "Partagez votre temps, vos competences et votre coeur. Les benevoles aident dans les soins, l'enseignement, le mentorat, les actions communautaires et les evenements speciaux.",
    },
    to: "/contact",
    cta: { en: "Volunteer With Us", fr: "Faire du benevolat avec nous" },
    variant: "green" as const,
  },
  {
    icon: Church,
    title: { en: "Partner as a Church", fr: "Devenir Partenaire en Tant qu'Eglise" },
    desc: {
      en: "Mobilize your church or organization to support and protect vulnerable children alongside us.",
      fr: "Mobilisez votre eglise ou votre organisation afin de soutenir et proteger les enfants vulnerables a nos cotes.",
    },
    to: "/contact",
    cta: { en: "Partner With Us", fr: "Devenir Partenaire" },
    variant: "primary" as const,
  },
  {
    icon: Megaphone,
    title: { en: "Spread the Word", fr: "Faire Connaitre la Mission" },
    desc: {
      en: "Share our mission with your community and on social media to help more children be seen, loved, and rescued.",
      fr: "Partagez notre mission dans votre communaute et sur les reseaux sociaux pour aider davantage d'enfants a etre vus, aimes et secourus.",
    },
    to: "/contact",
    cta: { en: "Get in Touch", fr: "Entrer en Contact" },
    variant: "green" as const,
  },
  {
    icon: GraduationCap,
    title: { en: "Pray With Us", fr: "Prier Avec Nous" },
    desc: {
      en: "Prayer is the foundation of everything we do. Stand with us in prayer for the children and families we serve.",
      fr: "La priere est le fondement de tout ce que nous faisons. Tenez-vous avec nous dans la priere pour les enfants et les familles que nous servons.",
    },
    to: "/contact",
    cta: { en: "Send a Prayer Request", fr: "Envoyer une Requete de Priere" },
    variant: "gold" as const,
  },
]

export default function GetInvolvedPage() {
  const { t } = useLanguage()

  useSeo({
    title: t({ en: "Get Involved | Kingdom Builders Kids", fr: "S'impliquer | Kingdom Builders Kids" }),
    description: t({
      en: "There are many ways to help vulnerable children — donate, sponsor a child, volunteer, partner as a church, spread the word, or pray with us.",
      fr: "Il existe plusieurs manieres d'aider les enfants vulnerables: faire un don, parrainer un enfant, faire du benevolat, devenir partenaire comme eglise, partager la mission ou prier avec nous.",
    }),
  })

  return (
    <>
      <PageHero
        crumb={t({ en: "Get Involved", fr: "S'impliquer" })}
        title={t({ en: "Be the Hope a Child Needs", fr: "Soyez l'Esperance dont un Enfant a Besoin" })}
        subtitle={t({
          en: "There are many ways to join the mission. Find the one that fits your heart and help build children for God's Kingdom.",
          fr: "Il existe plusieurs facons de rejoindre la mission. Trouvez celle qui correspond a votre coeur et aidez a former des enfants pour le Royaume de Dieu.",
        })}
        image="/images/hero-involved.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "Ways to Help", fr: "Moyens d'Aider" })}
            title={t({ en: "Every Hand Makes a Difference", fr: "Chaque Main Fait la Difference" })}
            subtitle={t({
              en: "Whether through giving, serving, or praying, you can be part of transforming a child's life.",
              fr: "Que ce soit par le don, le service ou la priere, vous pouvez participer a la transformation de la vie d'un enfant.",
            })}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ways.map((way, i) => {
              const Icon = way.icon
              return (
                <Reveal key={way.title.en} delay={i * 0.07}>
                  <div className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-bold text-royal-dark">
                      {t(way.title)}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t(way.desc)}
                    </p>
                    <div className="mt-6">
                      <ButtonLink to={way.to} variant={way.variant} size="sm">
                        {t(way.cta)}
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
