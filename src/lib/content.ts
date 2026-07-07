import {
  HeartHandshake,
  Accessibility,
  Utensils,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Home,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { LocalizedText } from "./i18n"

export const visionStatement: LocalizedText = {
  en: "To see every orphaned, abandoned, disabled, and less fortunate child transformed by the love of Jesus Christ, nurtured in a safe and caring environment, empowered through education and discipleship, and equipped to become a godly leader who impacts future generations for God's Kingdom.",
  fr: "Voir chaque enfant orphelin, abandonné, handicapé et défavorisé transformé par l'amour de Jésus-Christ, élevé dans un environnement sûr et bienveillant, fortifié par l'éducation et le discipulat, et équipé pour devenir un leader pieux qui influence les générations futures pour le Royaume de Dieu.",
}

export const missionStatement: LocalizedText = {
  en: "Kingdom Builders Kids exists to rescue, protect, nurture, educate, disciple, and empower orphaned, disabled, abandoned, and vulnerable children through Christ-centered care, family support, healthcare, education, and spiritual development.",
  fr: "Kingdom Builders Kids existe pour secourir, protéger, nourrir, éduquer, discipler et fortifier les enfants orphelins, handicapés, abandonnés et vulnérables grâce à un accompagnement centré sur le Christ, au soutien familial, aux soins de santé, à l'éducation et au développement spirituel.",
}

export const themeScriptures = [
  {
    text: {
      en: "Defend the weak and the fatherless; uphold the cause of the poor and the oppressed.",
      fr: "Défendez le faible et l'orphelin ; faites droit au malheureux et au pauvre.",
    },
    ref: "Psalm 82:3",
  },
  {
    text: {
      en: "Let the little children come to me and do not hinder them, for the kingdom of heaven belongs to such as these.",
      fr: "Laissez venir à moi les petits enfants, et ne les en empêchez pas ; car le royaume des cieux est pour ceux qui leur ressemblent.",
    },
    ref: "Matthew 19:14",
  },
  {
    text: {
      en: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress.",
      fr: "La religion pure et sans tache devant Dieu notre Père consiste à visiter les orphelins et les veuves dans leurs afflictions.",
    },
    ref: "James 1:27",
  },
]

export const coreValues = [
  {
    title: { en: "Christ-Centered Love", fr: "Amour centré sur le Christ" },
    desc: {
      en: "We believe every child is precious and created in the image of God.",
      fr: "Nous croyons que chaque enfant est précieux et créé à l'image de Dieu.",
    },
  },
  {
    title: { en: "Compassion", fr: "Compassion" },
    desc: {
      en: "We respond to suffering children with practical action and genuine care.",
      fr: "Nous répondons à la souffrance des enfants par des actions concrètes et une attention sincère.",
    },
  },
  {
    title: { en: "Dignity", fr: "Dignité" },
    desc: {
      en: "Every child deserves respect, protection, and opportunity.",
      fr: "Chaque enfant mérite le respect, la protection et des opportunités.",
    },
  },
  {
    title: { en: "Integrity", fr: "Intégrité" },
    desc: {
      en: "We serve with honesty, accountability, and transparency.",
      fr: "Nous servons avec honnêteté, responsabilité et transparence.",
    },
  },
  {
    title: { en: "Hope", fr: "Espérance" },
    desc: {
      en: "We believe every child's future can be transformed.",
      fr: "Nous croyons que l'avenir de chaque enfant peut être transformé.",
    },
  },
  {
    title: { en: "Family", fr: "Famille" },
    desc: {
      en: "Children thrive when surrounded by love and belonging.",
      fr: "Les enfants s'épanouissent lorsqu'ils sont entourés d'amour et d'un sentiment d'appartenance.",
    },
  },
  {
    title: { en: "Service", fr: "Service" },
    desc: {
      en: "We serve vulnerable children regardless of background, tribe, religion, or social status.",
      fr: "Nous servons les enfants vulnérables sans tenir compte de leur origine, de leur ethnie, de leur religion ou de leur statut social.",
    },
  },
]

export const objectives = [
  { en: "Rescue orphaned and abandoned children.", fr: "Secourir les enfants orphelins et abandonnés." },
  { en: "Support children living with disabilities.", fr: "Soutenir les enfants vivant avec un handicap." },
  { en: "Improve child health and nutrition.", fr: "Améliorer la santé et la nutrition des enfants." },
  { en: "Provide access to quality education.", fr: "Donner accès à une éducation de qualité." },
  { en: "Raise children in a Christ-centered environment.", fr: "Élever les enfants dans un environnement centré sur le Christ." },
  { en: "Promote child protection and welfare.", fr: "Promouvoir la protection et le bien-être des enfants." },
  { en: "Equip children with leadership and life skills.", fr: "Équiper les enfants de compétences de leadership et de vie." },
  { en: "Strengthen families and caregivers.", fr: "Renforcer les familles et les personnes en charge des enfants." },
  { en: "Mobilize churches and communities to care for vulnerable children.", fr: "Mobiliser les églises et les communautés pour prendre soin des enfants vulnérables." },
  { en: "Restore hope and dignity to disadvantaged children.", fr: "Redonner espoir et dignité aux enfants défavorisés." },
]

export type Program = {
  slug: string
  title: LocalizedText
  short: LocalizedText
  description: LocalizedText
  icon: LucideIcon
  image: string
}

export const programs: Program[] = [
  {
    slug: "orphan-care",
    title: { en: "Orphan Care Program", fr: "Programme de prise en charge des orphelins" },
    short: {
      en: "Shelter, care, and family for orphaned and abandoned children.",
      fr: "Abri, soins et famille pour les enfants orphelins et abandonnés.",
    },
    description: {
      en: "Providing shelter, care, protection, and family support for orphaned and abandoned children so that no child has to face the world alone.",
      fr: "Offrir un abri, des soins, une protection et un soutien familial aux enfants orphelins et abandonnés, afin qu'aucun enfant n'ait à affronter le monde seul.",
    },
    icon: HeartHandshake,
    image: "/images/family-visit.jpeg",
  },
  {
    slug: "disability-care",
    title: {
      en: "Disability Care and Inclusion Program",
      fr: "Programme de soins et d'inclusion pour les enfants en situation de handicap",
    },
    short: {
      en: "Serving children with disabilities with dignity and inclusion.",
      fr: "Servir les enfants en situation de handicap avec dignité et inclusion.",
    },
    description: {
      en: "Serving children with physical, hearing, visual, intellectual, and developmental disabilities, ensuring they are included, valued, and given every opportunity to thrive.",
      fr: "Servir les enfants ayant des handicaps physiques, auditifs, visuels, intellectuels et développementaux, en veillant à ce qu'ils soient inclus, valorisés et qu'ils aient toutes les chances de s'épanouir.",
    },
    icon: Accessibility,
    image: "/images/children-group.jpeg",
  },
  {
    slug: "feeding-nutrition",
    title: { en: "Feeding and Nutrition Program", fr: "Programme d'alimentation et de nutrition" },
    short: {
      en: "Fighting hunger and malnutrition among vulnerable children.",
      fr: "Lutter contre la faim et la malnutrition chez les enfants vulnérables.",
    },
    description: {
      en: "Addressing hunger and malnutrition among vulnerable children with nutritious meals and ongoing nutritional support.",
      fr: "Combattre la faim et la malnutrition chez les enfants vulnérables grâce à des repas nutritifs et à un soutien nutritionnel continu.",
    },
    icon: Utensils,
    image: "/images/children-crowd.jpeg",
  },
  {
    slug: "education-support",
    title: { en: "Education Support Program", fr: "Programme de soutien éducatif" },
    short: {
      en: "Opening the door to quality education.",
      fr: "Ouvrir la porte à une éducation de qualité.",
    },
    description: {
      en: "Helping children gain access to quality education through school enrollment, learning materials, and academic support.",
      fr: "Aider les enfants à accéder à une éducation de qualité grâce à l'inscription scolaire, au matériel pédagogique et à l'accompagnement scolaire.",
    },
    icon: GraduationCap,
    image: "/images/community-home.jpeg",
  },
  {
    slug: "child-health",
    title: { en: "Child Health Program", fr: "Programme de santé infantile" },
    short: {
      en: "Medical treatment, screenings, and healthcare support.",
      fr: "Traitements médicaux, dépistages et soutien sanitaire.",
    },
    description: {
      en: "Providing medical treatment, health screenings, and healthcare support so children can grow up strong and healthy.",
      fr: "Fournir des traitements médicaux, des dépistages et un soutien sanitaire afin que les enfants grandissent forts et en bonne santé.",
    },
    icon: Stethoscope,
    image: "/images/children-celebration-2.jpeg",
  },
  {
    slug: "discipleship",
    title: {
      en: "Kingdom Builders Discipleship Program",
      fr: "Programme de discipulat Kingdom Builders",
    },
    short: {
      en: "Teaching children about Jesus Christ.",
      fr: "Enseigner aux enfants la personne de Jésus-Christ.",
    },
    description: {
      en: "Teaching children about Jesus Christ through Bible lessons, prayer, worship, and character development, raising up a generation rooted in faith.",
      fr: "Enseigner Jésus-Christ aux enfants au moyen d'études bibliques, de la prière, de la louange et de la formation du caractère, afin de faire grandir une génération enracinée dans la foi.",
    },
    icon: BookOpen,
    image: "/images/evening-service.jpeg",
  },
  {
    slug: "family-strengthening",
    title: { en: "Family Strengthening Program", fr: "Programme de renforcement des familles" },
    short: {
      en: "Equipping families and caregivers.",
      fr: "Outiller les familles et les personnes en charge des enfants.",
    },
    description: {
      en: "Helping families and caregivers provide better care for vulnerable children through support, training, and encouragement.",
      fr: "Aider les familles et les personnes en charge des enfants à mieux prendre soin des enfants vulnérables grâce au soutien, à la formation et à l'encouragement.",
    },
    icon: Home,
    image: "/images/congregation.jpeg",
  },
  {
    slug: "community-outreach",
    title: { en: "Community Outreach Program", fr: "Programme de sensibilisation communautaire" },
    short: {
      en: "Mobilizing churches and communities.",
      fr: "Mobiliser les églises et les communautés.",
    },
    description: {
      en: "Mobilizing churches and communities to support and protect vulnerable children, multiplying compassion across the nation.",
      fr: "Mobiliser les églises et les communautés pour soutenir et protéger les enfants vulnérables, en multipliant la compassion dans toute la nation.",
    },
    icon: Users,
    image: "/images/church-gathering.jpeg",
  },
]

export const longTermGoals = [
  { en: "Establish a Children's Care Center.", fr: "Établir un centre d'accueil pour enfants." },
  { en: "Develop a Christian orphanage and family care home.", fr: "Développer un orphelinat chrétien et un foyer familial." },
  { en: "Create a disability support and rehabilitation center.", fr: "Créer un centre de soutien et de réhabilitation pour le handicap." },
  { en: "Provide scholarships for vulnerable children.", fr: "Offrir des bourses aux enfants vulnérables." },
  { en: "Establish vocational training opportunities.", fr: "Mettre en place des opportunités de formation professionnelle." },
  { en: "Build partnerships with churches and supporters worldwide.", fr: "Construire des partenariats avec des églises et des soutiens dans le monde entier." },
  { en: "Raise a generation of children who know Christ and serve their communities.", fr: "Former une génération d'enfants qui connaissent le Christ et servent leurs communautés." },
]

export const stats = [
  { value: "8+", label: { en: "Care Programs", fr: "Programmes d'accompagnement" } },
  { value: "100%", label: { en: "Christ-Centered", fr: "Centré sur le Christ" } },
  { value: "7", label: { en: "Core Values", fr: "Valeurs fondamentales" } },
  { value: "1", label: { en: "Mission of Hope", fr: "Mission d'espérance" } },
]

export type SuccessStory = {
  slug: string
  name: string
  title: LocalizedText
  excerpt: LocalizedText
  story: LocalizedText[]
  image: string
}

export const successStories: SuccessStory[] = [
  {
    slug: "matthew",
    name: "Matthew",
    title: {
      en: "From a forgotten child to a baptized believer",
      fr: "D'un enfant oublié à un croyant baptisé",
    },
    excerpt: {
      en: "Once abandoned and afraid, Matthew gave his heart to Jesus and joyfully declared his new faith through water baptism.",
      fr: "Autrefois abandonné et effrayé, Matthew a donné son cœur à Jésus et a déclaré avec joie sa nouvelle foi par le baptême d'eau.",
    },
    story: [
      {
        en: "When Matthew first came into our care, he had been abandoned and left to survive on his own. Frightened, malnourished, and withdrawn, he carried wounds that ran far deeper than the eye could see.",
        fr: "Lorsque Matthew est arrivé pour la première fois chez nous, il avait été abandonné et laissé seul pour survivre. Effrayé, mal nourri et renfermé sur lui-même, il portait des blessures bien plus profondes que ce que l'on pouvait voir.",
      },
      {
        en: "Through the love of a caring community, Bible lessons, prayer, and daily discipleship, Matthew slowly began to heal, and for the first time he heard how deeply Jesus loved him. What began as mere survival grew into a living faith.",
        fr: "Grâce à l'amour d'une communauté bienveillante, aux leçons bibliques, à la prière et au discipulat quotidien, Matthew a commencé peu à peu à guérir, et pour la première fois il a entendu combien Jésus l'aimait. Ce qui n'était que survie est devenu une foi vivante.",
      },
      {
        en: "On the day of his water baptism, Matthew waded into the river to publicly declare that he now belongs to Christ. Rising from the water, he was no longer a forgotten child but a new creation, full of hope and ready to help build God's Kingdom.",
        fr: "Le jour de son baptême d'eau, Matthew est entré dans la rivière pour déclarer publiquement qu'il appartient désormais au Christ. En sortant de l'eau, il n'était plus un enfant oublié, mais une nouvelle création, remplie d'espérance et prête à bâtir le Royaume de Dieu.",
      },
    ],
    image: "/images/baptism-boy.jpeg",
  },
  {
    slug: "grace",
    name: "Grace",
    title: {
      en: "A new life in Christ, sealed in baptism",
      fr: "Une vie nouvelle en Christ, scellée par le baptême",
    },
    excerpt: {
      en: "Grace found healing and hope, gave her life to Jesus, and with a radiant smile was baptized as a beloved child of God.",
      fr: "Grace a trouvé la guérison et l'espérance, a donné sa vie à Jésus et, avec un sourire radieux, a été baptisée comme une enfant bien-aimée de Dieu.",
    },
    story: [
      {
        en: "Grace came to us weak and overlooked, having gone without proper food or medical attention for far too long. Few believed she would recover, but we believed every child's future can be transformed.",
        fr: "Grace est arrivée chez nous faible et négligée, après avoir été privée trop longtemps d'une alimentation correcte et de soins médicaux. Peu de gens pensaient qu'elle guérirait, mais nous croyions que l'avenir de chaque enfant peut être transformé.",
      },
      {
        en: "With consistent care, a family that loved her, and patient discipleship, Grace grew stronger every day. As she learned about Jesus, her heart opened to Him, and a quiet, unshakable joy began to shine through her.",
        fr: "Avec des soins réguliers, une famille qui l'aimait et un discipulat patient, Grace est devenue plus forte chaque jour. En apprenant à connaître Jésus, son cœur s'est ouvert à Lui, et une joie tranquille et inébranlable a commencé à rayonner en elle.",
      },
      {
        en: "On the day she was baptized, Grace could not stop smiling. Rising from the water, she stepped into a brand-new life as a daughter of God, a living testimony that no child is ever too far gone for the love of Christ.",
        fr: "Le jour de son baptême, Grace ne pouvait s'empêcher de sourire. En sortant de l'eau, elle est entrée dans une vie toute nouvelle comme fille de Dieu, un témoignage vivant qu'aucun enfant n'est jamais trop perdu pour l'amour du Christ.",
      },
    ],
    image: "/images/baptism-girl.jpeg",
  },
]

export type TeamMember = {
  name: string
  title: LocalizedText
  bio: LocalizedText
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Rev. Adrien Koiba",
    title: { en: "Founder & Executive Director", fr: "Fondateur et directeur exécutif" },
    bio: {
      en: "Provides spirituality, strategy and overall leadership for the ministry.",
      fr: "Assure la spiritualité, la stratégie et la direction globale du ministère.",
    },
    image: "/images/CEO.jpeg",
  },
  {
    name: "Mr Niamy Ernest",
    title: { en: "Director of Children's Care", fr: "Directeur des soins pour enfants" },
    bio: {
      en: "Oversees the child care, nurturing, and welfare of the Children.",
      fr: "Supervise les soins, l'éducation et le bien-être des enfants.",
    },
    image: "/images/Director of children care.jpeg",
  },
  {
    name: "Rev. Ramsey Pay Willie",
    title: {
      en: "Programs and Community Outreach Director",
      fr: "Directeur des programmes et de la sensibilisation communautaire",
    },
    bio: {
      en: "Coordinates children's programs, community outreach, volunteers, and partnerships.",
      fr: "Coordonne les programmes pour enfants, la sensibilisation communautaire, les bénévoles et les partenariats.",
    },
    image: "/images/Ramsey Willie.jpeg",
  },
  {
    name: "Gaston Zoyagué Koiba",
    title: { en: "Finance and Administration Officer (Treasurer)", fr: "Responsable finances et administration (trésorier)" },
    bio: {
      en: "Manages finance, budgeting, donations, and administrative affairs.",
      fr: "Gère les finances, le budget, les dons et les affaires administratives.",
    },
    image: "/images/Finance officer.jpeg",
  },
  {
    name: "Marceline Mamy",
    title: { en: "Secretary", fr: "Secrétaire" },
    bio: {
      en: "Maintains Ministry records, correspondences, meetings, minutes and documentation.",
      fr: "Tient les registres du ministère, les correspondances, les réunions, les procès-verbaux et la documentation.",
    },
    image: "/images/Secretary.jpeg",
  },
]
