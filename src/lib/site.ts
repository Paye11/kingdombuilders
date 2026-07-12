import type { LocalizedText } from "./i18n"

/**
 * Central place for ministry contact details and config.
 * Replace the placeholder values below with the ministry's real information.
 */
export const site = {
  /** Public site URL used for sitemap, Open Graph, and canonical links. */
  url: "https://kingdombuilderskidsmission.com",
  name: "Kingdom Builders Kids",
  motto: {
    en: "Building Children for God's Kingdom",
    fr: "Former des enfants pour le Royaume de Dieu",
  },
  founder: "[Founder Name]",
  founderTitle: {
    en: "Founder & Executive Director",
    fr: "Fondatrice et directrice exécutive",
  },

  // --- CONTACT (placeholders — replace with real details) ---
  address: "Zagopé Clinic, Belle -Vue, N'zérékoré Republic of Guinea",
  phonePrimary: "+224624905259",
  phoneSecondary: "+224624905259",
  whatsapp: "+224624905259",
  whatsappNumberDigits: "224624905259", // used for wa.me link, digits only
  email: "info@kingdombuilderskids.org",

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },

  // Google Maps embed — replace q= with the real location
  mapEmbedSrc:
    "https://www.google.com/maps?q=Zagopé+Clinic,+Belle-Vue,+N'zérékoré,+Guinea&output=embed",

  // --- DONATIONS (placeholders) ---
  donate: {
    paypal: "https://paypal.me/[your-paypal]",
    mobileMoney: {
      provider: "MTN / Orange Mobile Money",
      name: "Kingdom Builders Kids",
      number: "+224624905259",
    },
    bank: {
      bankName: "[Bank Name]",
      accountName: "Kingdom Builders Kids",
      accountNumber: "[Account Number]",
      swift: "[SWIFT/BIC Code]",
    },
  },
}

/**
 * EmailJS configuration.
 * Add these to a .env file (prefixed with VITE_) to activate the contact &
 * prayer request forms:
 *   VITE_EMAILJS_SERVICE_ID
 *   VITE_EMAILJS_TEMPLATE_ID
 *   VITE_EMAILJS_PUBLIC_KEY
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
}

export const isEmailConfigured =
  !!emailjsConfig.serviceId &&
  !!emailjsConfig.templateId &&
  !!emailjsConfig.publicKey

/**
 * Submenu shown under the "Programs" parent menu item.
 * "Programs" itself is not a navigable page — it only opens this dropdown.
 */
export const programsMenu = [
  {
    to: "/programs/orphan-care",
    label: { en: "Orphan Care Program", fr: "Programme de prise en charge des orphelins" },
  },
  {
    to: "/programs/education-support",
    label: { en: "Education Support Program", fr: "Programme de soutien éducatif" },
  },
  {
    to: "/programs/child-health",
    label: { en: "Child Health Program", fr: "Programme de santé infantile" },
  },
  {
    to: "/programs/discipleship",
    label: {
      en: "Kingdom Builders Discipleship Program",
      fr: "Programme de discipulat Kingdom Builders",
    },
  },
  {
    to: "/programs/community-outreach",
    label: { en: "Community Outreach Program", fr: "Programme de sensibilisation communautaire" },
  },
  { to: "/success-stories", label: { en: "Success Stories", fr: "Témoignages de réussite" } },
] satisfies Array<{ to: string; label: LocalizedText }>
