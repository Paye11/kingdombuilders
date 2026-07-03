import { useState } from "react"
import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { ContactForm } from "../components/ContactForm"
import { site } from "../lib/site"
import { cn } from "../lib/utils"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6"
import { useLanguage } from "../context/LanguageContext"

export default function ContactPage() {
  const { t } = useLanguage()

  useSeo({
    title: t({ en: "Contact Us | Kingdom Builders Kids", fr: "Contact | Kingdom Builders Kids" }),
    description: t({
      en: "Get in touch with Kingdom Builders Kids. Send us a message, share a prayer request, or reach out to partner with us in caring for vulnerable children.",
      fr: "Prenez contact avec Kingdom Builders Kids. Envoyez-nous un message, partagez une requete de priere ou contactez-nous pour collaborer avec nous dans l'accompagnement des enfants vulnerables.",
    }),
  })

  const [tab, setTab] = useState<"contact" | "prayer">("contact")

  const details = [
    { icon: MapPin, label: t({ en: "Address", fr: "Adresse" }), value: site.address },
    { icon: Phone, label: t({ en: "Phone", fr: "Telephone" }), value: `${site.phonePrimary} / ${site.phoneSecondary}` },
    { icon: Mail, label: t({ en: "Email", fr: "Email" }), value: site.email },
    { icon: MessageCircle, label: t({ en: "WhatsApp", fr: "WhatsApp" }), value: site.whatsapp },
  ]

  return (
    <>
      <PageHero
        crumb={t({ en: "Contact", fr: "Contact" })}
        title={t({ en: "We'd Love to Hear From You", fr: "Nous Serions Heureux de Vous Entendre" })}
        subtitle={t({
          en: "Whether you want to give, volunteer, partner, or simply ask a question, our door is always open.",
          fr: "Que vous souhaitiez faire un don, faire du benevolat, devenir partenaire ou simplement poser une question, notre porte vous est toujours ouverte.",
        })}
        image="/images/community-home.jpeg"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-5 lg:gap-16 lg:px-8">
          {/* Contact details */}
          <Reveal direction="right" className="lg:col-span-2">
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-green">
              {t({ en: "Get in Touch", fr: "Entrer en Contact" })}
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-royal-dark">
              {t({ en: "Reach Out to Us", fr: "Contactez-Nous" })}
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gold" />
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {t({
                en: "Have a question or want to get involved? Use the form, or contact us directly with the details below.",
                fr: "Vous avez une question ou vous voulez vous impliquer? Utilisez le formulaire ou contactez-nous directement avec les coordonnees ci-dessous.",
              })}
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((d) => {
                const Icon = d.icon
                return (
                  <li key={d.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-royal-dark">{d.label}</p>
                      <p className="text-muted-foreground">{d.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8">
              <p className="font-heading font-semibold text-royal-dark">
                {t({ en: "Follow Us", fr: "Suivez-Nous" })}
              </p>
              <div className="mt-3 flex gap-3">
                {[
                  { icon: FaFacebookF, href: site.social.facebook, label: "Facebook" },
                  { icon: FaInstagram, href: site.social.instagram, label: "Instagram" },
                  { icon: FaYoutube, href: site.social.youtube, label: "YouTube" },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal text-white transition hover:bg-royal-dark"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Forms */}
          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl bg-card p-6 shadow-lg ring-1 ring-border sm:p-8 lg:p-10">
              <div className="mb-8 flex gap-2 rounded-xl bg-muted p-1.5">
                <button
                  type="button"
                  onClick={() => setTab("contact")}
                  className={cn(
                    "flex-1 rounded-lg px-4 py-2.5 font-heading text-sm font-semibold transition",
                    tab === "contact"
                      ? "bg-royal text-white shadow"
                      : "text-muted-foreground hover:text-royal",
                  )}
                >
                  {t({ en: "Send a Message", fr: "Envoyer un Message" })}
                </button>
                <button
                  type="button"
                  onClick={() => setTab("prayer")}
                  className={cn(
                    "flex-1 rounded-lg px-4 py-2.5 font-heading text-sm font-semibold transition",
                    tab === "prayer"
                      ? "bg-green text-white shadow"
                      : "text-muted-foreground hover:text-green",
                  )}
                >
                  {t({ en: "Prayer Request", fr: "Requete de Priere" })}
                </button>
              </div>

              {tab === "contact" ? <ContactForm variant="contact" /> : <ContactForm variant="prayer" />}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
              <iframe
                title={t({ en: "Kingdom Builders Kids location", fr: "Emplacement de Kingdom Builders Kids" })}
                src={site.mapEmbedSrc}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
