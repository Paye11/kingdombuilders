import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { useSeo } from "../hooks/useSeo"
import { PageHero } from "../components/PageHero"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { CtaSection } from "../components/CtaSection"
import { useLanguage } from "../context/LanguageContext"

const images = [
  { src: "/images/children-joy.jpeg", alt: { en: "Children smiling together with their pastor", fr: "Des enfants souriant avec leur pasteur" } },
  { src: "/images/children-crowd.jpeg", alt: { en: "Children and families gathered at an evening service", fr: "Des enfants et des familles réunis lors d'un culte du soir" } },
  { src: "/images/evening-service.jpeg", alt: { en: "An evening worship service with the children", fr: "Un culte du soir avec les enfants" } },
  { src: "/images/evening-service-2.jpeg", alt: { en: "Children standing together during worship", fr: "Des enfants debout ensemble pendant la louange" } },
  { src: "/images/evening-service-3.jpeg", alt: { en: "Ministers leading the children in worship", fr: "Des serviteurs conduisant les enfants dans la louange" } },
  { src: "/images/outreach-preaching.jpeg", alt: { en: "Sharing the gospel during a community outreach", fr: "Annonce de l'Évangile lors d'une action communautaire" } },
  { src: "/images/baptism-boy.jpeg", alt: { en: "A young boy being baptized in the river", fr: "Un jeune garçon baptisé dans la rivière" } },
  { src: "/images/baptism-girl.jpeg", alt: { en: "A girl joyfully baptized in water", fr: "Une fille joyeusement baptisée dans l'eau" } },
  { src: "/images/children-celebration.jpeg", alt: { en: "Children celebrating together at a church gathering", fr: "Des enfants qui célèbrent ensemble lors d'un rassemblement" } },
  { src: "/images/children-celebration-2.jpeg", alt: { en: "Joyful children at a church celebration", fr: "Des enfants joyeux lors d'une célébration à l'église" } },
  { src: "/images/children-group.jpeg", alt: { en: "A large group of children together", fr: "Un grand groupe d'enfants ensemble" } },
  { src: "/images/congregation.jpeg", alt: { en: "The community gathered outside the church", fr: "La communauté rassemblée devant l'église" } },
  { src: "/images/church-gathering.jpeg", alt: { en: "The church family gathered together", fr: "La famille de l'église réunie" } },
  { src: "/images/community-home.jpeg", alt: { en: "Children and caregivers by their home", fr: "Des enfants et leurs tuteurs près de leur maison" } },
  { src: "/images/family-visit.jpeg", alt: { en: "A family welcomed and supported by the ministry", fr: "Une famille accueillie et soutenue par le ministère" } },
]

export default function GalleryPage() {
  const { t } = useLanguage()

  useSeo({
    title: t({ en: "Gallery | Kingdom Builders Kids", fr: "Galerie | Kingdom Builders Kids" }),
    description: t({
      en: "See the joy, hope, and transformation in action through photos of the children and communities served by Kingdom Builders Kids.",
      fr: "Découvrez la joie, l'espérance et la transformation à travers des photos des enfants et des communautés accompagnés par Kingdom Builders Kids.",
    }),
  })

  const [index, setIndex] = useState(-1)

  return (
    <>
      <PageHero
        crumb={t({ en: "Gallery", fr: "Galerie" })}
        title={t({ en: "Moments of Joy & Hope", fr: "Moments de joie et d'espérance" })}
        subtitle={t({
          en: "A glimpse into the lives being transformed and the joy that fills our ministry every day.",
          fr: "Un aperçu des vies en cours de transformation et de la joie qui remplit notre ministère chaque jour.",
        })}
        image="/images/children-celebration.jpeg"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "Our Gallery", fr: "Notre galerie" })}
            title={t({ en: "Hope in Action", fr: "L'espérance en action" })}
            subtitle={t({ en: "Click any photo to view it larger.", fr: "Cliquez sur une photo pour l'agrandir." })}
          />

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, i) => (
              <Reveal key={image.src} delay={(i % 4) * 0.08}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`group relative w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-border transition-all hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={t(image.alt)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-royal-dark/0 transition-colors group-hover:bg-royal-dark/20" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index < 0 ? 0 : index}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.src, alt: t(img.alt) }))}
      />

      <CtaSection />
    </>
  )
}
