import { Reveal } from "../ui/Reveal"
import { Eye, Target } from "lucide-react"
import { visionStatement, missionStatement } from "../../lib/content"
import { useLanguage } from "@/context/LanguageContext"

export function VisionMissionSection() {
  const { t } = useLanguage()

  return (
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
  )
}
