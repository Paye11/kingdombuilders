import { motion } from "framer-motion"
import { Languages } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function LanguageToggleButton() {
  const { language, toggleLanguage, t } = useLanguage()
  const target = language === "en" ? "FR" : "EN"

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      aria-label={
        language === "en"
          ? t({ en: "Switch to French", fr: "Passer en francais" })
          : t({ en: "Switch to English", fr: "Passer en anglais" })
      }
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-full bg-royal text-white shadow-xl shadow-royal/30 lg:hidden"
    >
      <Languages className="h-5 w-5" aria-hidden="true" />
      <span className="font-heading text-xs font-bold leading-none">{target}</span>
    </motion.button>
  )
}
