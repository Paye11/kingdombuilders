import { useSeo } from "../hooks/useSeo"
import { ButtonLink } from "../components/ui/Button"
import { Home } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function NotFoundPage() {
  const { t } = useLanguage()

  useSeo({ title: t({ en: "Page Not Found | Kingdom Builders Kids", fr: "Page Introuvable | Kingdom Builders Kids" }) })

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background px-4 pt-20">
      <div className="text-center">
        <p className="font-heading text-7xl font-bold text-royal sm:text-8xl">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-royal-dark sm:text-3xl">
          {t({ en: "Page Not Found", fr: "Page Introuvable" })}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {t({
            en: "The page you're looking for doesn't exist or may have been moved. Let's get you back home.",
            fr: "La page que vous recherchez n'existe pas ou a peut-etre ete deplacee. Revenons a l'accueil.",
          })}
        </p>
        <div className="mt-8">
          <ButtonLink to="/" variant="primary" size="lg">
            <Home className="h-5 w-5" /> {t({ en: "Back to Home", fr: "Retour a l'Accueil" })}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
