import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart, Mail, Phone, MapPin, Send } from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6"
import { site } from "@/lib/site"
import { Button } from "./ui/Button"
import { useLanguage } from "@/context/LanguageContext"
import logoImage from "../../images/logo.jpeg"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useLanguage()

  const quickLinks = [
    { to: "/about", label: { en: "About Us", fr: "À propos" } },
    { to: "/our-team", label: { en: "Our Team", fr: "Notre équipe" } },
    { to: "/programs/orphan-care", label: { en: "Programs", fr: "Programmes" } },
    { to: "/success-stories", label: { en: "Success Stories", fr: "Témoignages de réussite" } },
    { to: "/gallery", label: { en: "Gallery", fr: "Galerie" } },
  ]

  const involveLinks = [
    { to: "/get-involved", label: { en: "Volunteer", fr: "Faire du bénévolat" } },
    { to: "/get-involved", label: { en: "Sponsor a Child", fr: "Parrainer un enfant" } },
    { to: "/donate", label: { en: "Donate", fr: "Faire un don" } },
    { to: "/contact", label: { en: "Contact", fr: "Contact" } },
  ]

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail("")
  }

  const socials = [
    { href: site.social.facebook, icon: FaFacebookF, label: "Facebook" },
    { href: site.social.instagram, icon: FaInstagram, label: "Instagram" },
    { href: site.social.youtube, icon: FaYoutube, label: "YouTube" },
    { href: site.social.twitter, icon: FaXTwitter, label: "Twitter" },
  ]

  return (
    <footer className="bg-royal-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Kingdom Builders Kids Logo" 
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t({
                en: "A Christ-centered ministry rescuing, nurturing, educating, and empowering orphaned, abandoned, disabled, and vulnerable children.",
                fr: "Un ministère centré sur le Christ qui secourt, nourrit, éduque et fortifie les enfants orphelins, abandonnés, handicapés et vulnérables.",
              })}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-royal-dark"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-base font-semibold text-gold">
              {t({ en: "Quick Links", fr: "Liens Rapides" })}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to + t(l.label)}>
                  <Link
                    to={l.to}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <h3 className="font-heading text-base font-semibold text-gold">
              {t({ en: "Get Involved", fr: "S'impliquer" })}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {involveLinks.map((l) => (
                <li key={l.to + t(l.label)}>
                  <Link
                    to={l.to}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="font-heading text-base font-semibold text-gold">
              {t({ en: "Stay Connected", fr: "Restez connectés" })}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>{site.phonePrimary}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>{site.email}</span>
              </li>
            </ul>

            <form onSubmit={onSubscribe} className="mt-6">
              <label className="text-sm font-medium text-white/80">
                {t({ en: "Newsletter", fr: "Newsletter" })}
              </label>
              {subscribed ? (
                <p className="mt-2 rounded-lg bg-green/20 px-4 py-3 text-sm text-white">
                  {t({ en: "Thank you for subscribing!", fr: "Merci pour votre inscription!" })}
                </p>
              ) : (
                <div className="mt-2 flex overflow-hidden rounded-full bg-white/10">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t({ en: "Your email", fr: "Votre email" })}
                    className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label={t({ en: "Subscribe", fr: "S'abonner" })}
                    className="flex items-center justify-center bg-gold px-4 text-royal-dark transition-colors hover:bg-gold-dark"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <blockquote className="mx-auto max-w-3xl text-center font-heading text-lg italic text-white/80">
            &ldquo;
            {t({
              en: "Let the little children come to me and do not hinder them, for the kingdom of heaven belongs to such as these.",
              fr: "Laissez venir à moi les petits enfants, et ne les en empêchez pas ; car le royaume des cieux est pour ceux qui leur ressemblent.",
            })}
            &rdquo;
            <span className="mt-2 block text-sm not-italic text-gold">
              — Matthew 19:14
            </span>
          </blockquote>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Kingdom Builders Kids.{" "}
            {t({ en: "All rights reserved.", fr: "Tous droits réservés." })}
          </p>
          <p>{t(site.motto)}</p>
        </div>
      </div>
    </footer>
  )
}
