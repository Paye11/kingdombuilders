import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "./ui/Button"
import { emailjsConfig, isEmailConfigured } from "../lib/site"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm({ variant = "contact" }: { variant?: "contact" | "prayer" }) {
  const [status, setStatus] = useState<Status>("idle")
  const isPrayer = variant === "prayer"
  const { t } = useLanguage()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    if (!isEmailConfigured) {
      // Forms are scaffolded; keys not yet provided.
      setStatus("error")
      return
    }

    try {
      setStatus("sending")
      await emailjs.sendForm(
        emailjsConfig.serviceId as string,
        emailjsConfig.templateId as string,
        form,
        { publicKey: emailjsConfig.publicKey as string },
      )
      setStatus("success")
      form.reset()
    } catch (err) {
      console.log("[v0] EmailJS error:", err)
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="hidden"
        name="form_type"
        value={isPrayer ? t({ en: "Prayer Request", fr: "Requête de prière" }) : t({ en: "Contact Message", fr: "Message de contact" })}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${variant}-name`} className="mb-2 block text-sm font-semibold text-foreground">
            {t({ en: "Full Name", fr: "Nom complet" })}
          </label>
          <input
            id={`${variant}-name`}
            name="from_name"
            type="text"
            required
            placeholder={t({ en: "Your name", fr: "Votre nom" })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${variant}-email`} className="mb-2 block text-sm font-semibold text-foreground">
            {t({ en: "Email Address", fr: "Adresse e-mail" })}
          </label>
          <input
            id={`${variant}-email`}
            name="reply_to"
            type="email"
            required
            placeholder={t({ en: "you@example.com", fr: "vous@exemple.com" })}
            className={inputClass}
          />
        </div>
      </div>

      {!isPrayer && (
        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-foreground">
            {t({ en: "Subject", fr: "Sujet" })}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder={t({ en: "How can we help?", fr: "Comment pouvons-nous vous aider ?" })}
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor={`${variant}-message`} className="mb-2 block text-sm font-semibold text-foreground">
          {isPrayer
            ? t({ en: "Your Prayer Request", fr: "Votre requête de prière" })
            : t({ en: "Message", fr: "Message" })}
        </label>
        <textarea
          id={`${variant}-message`}
          name="message"
          required
          rows={5}
          placeholder={
            isPrayer
              ? t({ en: "Share how we can pray for you...", fr: "Partagez comment nous pouvons prier pour vous..." })
              : t({ en: "Write your message here...", fr: "Écrivez votre message ici..." })
          }
          className={inputClass}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant={isPrayer ? "green" : "primary"} size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> {t({ en: "Sending...", fr: "Envoi en cours..." })}
            </>
          ) : isPrayer ? (
            t({ en: "Send Prayer Request", fr: "Envoyer la requête de prière" })
          ) : (
            t({ en: "Send Message", fr: "Envoyer le message" })
          )}
        </Button>

        {status === "success" && (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-green">
            <CheckCircle2 className="h-5 w-5" /> {t({ en: "Thank you! Your message has been sent.", fr: "Merci ! Votre message a été envoyé." })}
          </span>
        )}
        {status === "error" && (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-red-600">
            <AlertCircle className="h-5 w-5" />
            {isEmailConfigured
              ? t({ en: "Something went wrong. Please try again.", fr: "Une erreur s'est produite. Veuillez réessayer." })
              : t({ en: "Email is not configured yet. Add your EmailJS keys to enable sending.", fr: "L'e-mail n'est pas encore configuré. Ajoutez vos clés EmailJS pour activer l'envoi." })}
          </span>
        )}
      </div>
    </form>
  )
}
