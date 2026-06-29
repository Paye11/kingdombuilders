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
  { src: "/images/gallery-1.png", alt: { en: "Children playing joyfully together", fr: "Des enfants jouant joyeusement ensemble" } },
  { src: "/images/gallery-2.png", alt: { en: "Children worshipping in church", fr: "Des enfants adorant dans une eglise" } },
  { src: "/images/gallery-3.png", alt: { en: "Volunteers distributing supplies at an outreach", fr: "Des benevoles distribuant des fournitures lors d'une action sociale" } },
  { src: "/images/gallery-4.png", alt: { en: "A girl reading and learning at school", fr: "Une fille qui lit et apprend a l'ecole" } },
  { src: "/images/gallery-5.png", alt: { en: "A caregiver holding a smiling toddler", fr: "Une personne en charge d'un tout-petit souriant" } },
  { src: "/images/gallery-6.png", alt: { en: "A group of children smiling together", fr: "Un groupe d'enfants souriant ensemble" } },
  { src: "/images/gallery-7.png", alt: { en: "Children with disabilities included in play", fr: "Des enfants en situation de handicap inclus dans le jeu" } },
  { src: "/images/gallery-8.png", alt: { en: "A pastor praying with children", fr: "Un pasteur priant avec des enfants" } },
]

export default function GalleryPage() {
  const { t } = useLanguage()

  useSeo({
    title: t({ en: "Gallery | Kingdom Builders Kids", fr: "Galerie | Kingdom Builders Kids" }),
    description: t({
      en: "See the joy, hope, and transformation in action through photos of the children and communities served by Kingdom Builders Kids.",
      fr: "Decouvrez la joie, l'esperance et la transformation a travers des photos des enfants et des communautes accompagnes par Kingdom Builders Kids.",
    }),
  })

  const [index, setIndex] = useState(-1)

  return (
    <>
      <PageHero
        crumb={t({ en: "Gallery", fr: "Galerie" })}
        title={t({ en: "Moments of Joy & Hope", fr: "Moments de Joie et d'Esperance" })}
        subtitle={t({
          en: "A glimpse into the lives being transformed and the joy that fills our ministry every day.",
          fr: "Un apercu des vies en cours de transformation et de la joie qui remplit notre ministere chaque jour.",
        })}
        image="/images/hero-gallery.png"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t({ en: "Our Gallery", fr: "Notre Galerie" })}
            title={t({ en: "Hope in Action", fr: "L'Esperance en Action" })}
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
