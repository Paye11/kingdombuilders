import { useSeo } from "../hooks/useSeo"
import { HomeHero } from "../components/home/HomeHero"
import { WelcomeSection } from "../components/home/WelcomeSection"
import { StatsSection } from "../components/home/StatsSection"
import { VisionMissionSection } from "../components/home/VisionMissionSection"
import { ProgramsPreview } from "../components/home/ProgramsPreview"
import { ScriptureSection } from "../components/home/ScriptureSection"
import { StoriesPreview } from "../components/home/StoriesPreview"
import { CtaSection } from "../components/CtaSection"
import { useLanguage } from "../context/LanguageContext"

export default function Home() {
  const { t } = useLanguage()

  useSeo({
    title: t({
      en: "Kingdom Builders Kids | Building Children for God's Kingdom",
      fr: "Kingdom Builders Kids | Former des enfants pour le Royaume de Dieu",
    }),
    description: t({
      en: "Kingdom Builders Kids rescues, protects, nurtures, educates, disciples, and empowers orphaned, disabled, abandoned, and vulnerable children through the love of Jesus Christ.",
      fr: "Kingdom Builders Kids secourt, protege, nourrit, eduque, discipule et fortifie les enfants orphelins, handicapes, abandonnes et vulnerables par l'amour de Jesus-Christ.",
    }),
  })

  return (
    <>
      <HomeHero />
      <WelcomeSection />
      <StatsSection />
      <VisionMissionSection />
      <ProgramsPreview />
      <ScriptureSection />
      <StoriesPreview />
      <CtaSection />
    </>
  )
}
