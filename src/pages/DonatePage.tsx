import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { ButtonLink } from "../components/ui/Button"
import { site } from "../lib/site"
import { useLanguage } from "../context/LanguageContext"
import {
  Utensils,
  Stethoscope,
  GraduationCap,
  Home,
  CreditCard,
  Smartphone,
  Landmark,
  Heart,
} from "lucide-react"

const impact = [
  {
    icon: Utensils,
    amount: "$25",
    desc: {
      en: "Provides nutritious meals for a child",
      fr: "Fournit des repas nutritifs à un enfant",
    },
  },
  {
    icon: Stethoscope,
    amount: "$50",
    desc: {
      en: "Covers basic healthcare and medicine",
      fr: "Couvre les soins de santé de base et les médicaments",
    },
  },
  {
    icon: GraduationCap,
    amount: "$100",
    desc: {
      en: "Supports a child's education and supplies",
      fr: "Soutient l'éducation et les fournitures d'un enfant",
    },
  },
  {
    icon: Home,
    amount: "$250",
    desc: {
      en: "Helps provide safe shelter and care",
      fr: "Aide à fournir un abri sûr et des soins",
    },
  },
]

export default function DonatePage() {
  const { t } = useLanguage()

  useSeo({
    title: t({ en: "Donate | Kingdom Builders Kids", fr: "Faire un don | Kingdom Builders Kids" }),
    description: t({
      en: "Your gift rescues, feeds, heals, and educates vulnerable children. Give today and help build children for God's Kingdom.",
      fr: "Votre don secourt, nourrit, soigne et éduque les enfants vulnérables. Donnez aujourd'hui et aidez à former des enfants pour le Royaume de Dieu.",
    }),
  })

  return (
    <>
      <PageHero
        crumb={t({ en: "Donate", fr: "Faire un don" })}
        title={t({ en: "Your Gift Changes a Life", fr: "Votre don change une vie" })}
        subtitle={t({
          en: "Every donation helps rescue, feed, heal, educate, and disciple a vulnerable child. Together we build children for God's Kingdom.",
          fr: "Chaque don aide à secourir, nourrir, soigner, éduquer et discipler un enfant vulnérable. Ensemble, nous formons des enfants pour le Royaume de Dieu.",
        })}
        image="/images/children-crowd.jpeg"
      />

      {/* Impact */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "Your Impact", fr: "Votre Impact" })}
            title={t({ en: "See What Your Gift Can Do", fr: "Voyez ce que votre don peut faire" })}
            subtitle={t({
              en: "Every amount, big or small, brings real hope to a child in need.",
              fr: "Chaque montant, petit ou grand, apporte une véritable espérance à un enfant dans le besoin.",
            })}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.amount} delay={i * 0.08}>
                  <div className="flex h-full flex-col items-center rounded-2xl bg-cream p-8 text-center shadow-sm ring-1 ring-border">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-royal-dark">
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-5 font-heading text-3xl font-bold text-royal-dark">
                      {item.amount}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(item.desc)}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Donation methods */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "How to Give", fr: "Comment donner" })}
            title={t({ en: "Ways to Donate", fr: "Moyens de donner" })}
            subtitle={t({
              en: "Choose the giving method most convenient for you. Thank you for your generosity.",
              fr: "Choisissez la méthode de don la plus pratique pour vous. Merci pour votre générosité.",
            })}
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {/* Online */}
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                  <CreditCard className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-royal-dark">
                  {t({ en: "Give Online", fr: "Donner en ligne" })}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t({
                    en: "Make a secure online donation quickly and easily through our online giving link.",
                    fr: "Effectuez un don en ligne sécurisé rapidement et facilement grâce à notre lien de don en ligne.",
                  })}
                </p>
                <div className="mt-6">
                  <ButtonLink to={site.donate.paypal} external variant="primary" size="sm">
                    {t({ en: "Donate Online", fr: "Donner en ligne" })}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>

            {/* Mobile Money */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-green">
                  <Smartphone className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-royal-dark">
                  {t({ en: "Mobile Money", fr: "Mobile Money" })}
                </h3>
                <dl className="mt-3 flex-1 space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">{t({ en: "Provider", fr: "Opérateur" })}</dt>
                    <dd className="text-muted-foreground">
                      {site.donate.mobileMoney.provider}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">{t({ en: "Account Name", fr: "Nom du compte" })}</dt>
                    <dd className="text-muted-foreground">
                      {site.donate.mobileMoney.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">{t({ en: "Number", fr: "Numéro" })}</dt>
                    <dd className="text-muted-foreground">
                      {site.donate.mobileMoney.number}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            {/* Bank */}
            <Reveal delay={0.2}>
              <div className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
                  <Landmark className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-royal-dark">
                  {t({ en: "Bank Transfer", fr: "Virement bancaire" })}
                </h3>
                <dl className="mt-3 flex-1 space-y-2 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">{t({ en: "Bank", fr: "Banque" })}</dt>
                    <dd className="text-muted-foreground">{site.donate.bank.bankName}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">{t({ en: "Account Name", fr: "Nom du compte" })}</dt>
                    <dd className="text-muted-foreground">
                      {site.donate.bank.accountName}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">{t({ en: "Account Number", fr: "Numéro de compte" })}</dt>
                    <dd className="text-muted-foreground">
                      {site.donate.bank.accountNumber}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">SWIFT / BIC</dt>
                    <dd className="text-muted-foreground">{site.donate.bank.swift}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              {t({
                en: "For questions about giving, or to discuss other ways to support our work, please",
                fr: "Pour toute question concernant les dons, ou pour discuter d'autres moyens de soutenir notre travail, veuillez",
              })}{" "}
              <a href="/contact" className="font-semibold text-royal underline">
                {t({ en: "contact us", fr: "nous contacter" })}
              </a>
              . {t({ en: "Thank you for standing with vulnerable children.", fr: "Merci de vous tenir aux côtés des enfants vulnérables." })}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden bg-royal py-16 text-center text-white lg:py-20">
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          <Heart className="mx-auto h-12 w-12 fill-gold text-gold" />
          <h2 className="mt-6 text-balance font-heading text-2xl font-bold sm:text-3xl">
            &ldquo;
            {t({
              en: "Whoever is kind to the poor lends to the Lord.",
              fr: "Celui qui a pitié du pauvre prête à l'Éternel.",
            })}
            &rdquo;
          </h2>
          <p className="mt-3 font-heading font-semibold text-gold">Proverbs 19:17</p>
        </div>
      </section>
    </>
  )
}
