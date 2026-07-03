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
  fr: "Voir chaque enfant orphelin, abandonne, handicape et defavorise transforme par l'amour de Jesus-Christ, eleve dans un environnement sur et bienveillant, fortifie par l'education et le discipulat, et equipe pour devenir un leader pieux qui influence les generations futures pour le Royaume de Dieu.",
}

export const missionStatement: LocalizedText = {
  en: "Kingdom Builders Kids exists to rescue, protect, nurture, educate, disciple, and empower orphaned, disabled, abandoned, and vulnerable children through Christ-centered care, family support, healthcare, education, and spiritual development.",
  fr: "Kingdom Builders Kids existe pour secourir, proteger, nourrir, eduquer, discipler et fortifier les enfants orphelins, handicapes, abandonnes et vulnerables grace a un accompagnement centre sur Christ, au soutien familial, aux soins de sante, a l'education et au developpement spirituel.",
}

export const themeScriptures = [
  {
    text: {
      en: "Defend the weak and the fatherless; uphold the cause of the poor and the oppressed.",
      fr: "Defendez le faible et l'orphelin; faites droit au malheureux et au pauvre.",
    },
    ref: "Psalm 82:3",
  },
  {
    text: {
      en: "Let the little children come to me and do not hinder them, for the kingdom of heaven belongs to such as these.",
      fr: "Laissez venir a moi les petits enfants, et ne les en empechez pas; car le royaume des cieux est pour ceux qui leur ressemblent.",
    },
    ref: "Matthew 19:14",
  },
  {
    text: {
      en: "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress.",
      fr: "La religion pure et sans tache devant Dieu notre Pere consiste a visiter les orphelins et les veuves dans leurs afflictions.",
    },
    ref: "James 1:27",
  },
]

export const coreValues = [
  {
    title: { en: "Christ-Centered Love", fr: "Amour Centre Sur Christ" },
    desc: {
      en: "We believe every child is precious and created in the image of God.",
      fr: "Nous croyons que chaque enfant est precieux et cree a l'image de Dieu.",
    },
  },
  {
    title: { en: "Compassion", fr: "Compassion" },
    desc: {
      en: "We respond to suffering children with practical action and genuine care.",
      fr: "Nous repondons a la souffrance des enfants par des actions concretes et une attention sincere.",
    },
  },
  {
    title: { en: "Dignity", fr: "Dignite" },
    desc: {
      en: "Every child deserves respect, protection, and opportunity.",
      fr: "Chaque enfant merite le respect, la protection et des opportunites.",
    },
  },
  {
    title: { en: "Integrity", fr: "Integrite" },
    desc: {
      en: "We serve with honesty, accountability, and transparency.",
      fr: "Nous servons avec honnetete, responsabilite et transparence.",
    },
  },
  {
    title: { en: "Hope", fr: "Esperance" },
    desc: {
      en: "We believe every child's future can be transformed.",
      fr: "Nous croyons que l'avenir de chaque enfant peut etre transforme.",
    },
  },
  {
    title: { en: "Family", fr: "Famille" },
    desc: {
      en: "Children thrive when surrounded by love and belonging.",
      fr: "Les enfants s'epanouissent lorsqu'ils sont entoures d'amour et d'un sentiment d'appartenance.",
    },
  },
  {
    title: { en: "Service", fr: "Service" },
    desc: {
      en: "We serve vulnerable children regardless of background, tribe, religion, or social status.",
      fr: "Nous servons les enfants vulnerables sans tenir compte de leur origine, de leur ethnie, de leur religion ou de leur statut social.",
    },
  },
]

export const objectives = [
  { en: "Rescue orphaned and abandoned children.", fr: "Secourir les enfants orphelins et abandonnes." },
  { en: "Support children living with disabilities.", fr: "Soutenir les enfants vivant avec un handicap." },
  { en: "Improve child health and nutrition.", fr: "Ameliorer la sante et la nutrition des enfants." },
  { en: "Provide access to quality education.", fr: "Donner acces a une education de qualite." },
  { en: "Raise children in a Christ-centered environment.", fr: "Elever les enfants dans un environnement centre sur Christ." },
  { en: "Promote child protection and welfare.", fr: "Promouvoir la protection et le bien-etre des enfants." },
  { en: "Equip children with leadership and life skills.", fr: "Equiper les enfants de competences de leadership et de vie." },
  { en: "Strengthen families and caregivers.", fr: "Renforcer les familles et les personnes en charge des enfants." },
  { en: "Mobilize churches and communities to care for vulnerable children.", fr: "Mobiliser les eglises et les communautes pour prendre soin des enfants vulnerables." },
  { en: "Restore hope and dignity to disadvantaged children.", fr: "Redonner espoir et dignite aux enfants defavorises." },
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
    title: { en: "Orphan Care Program", fr: "Programme de Prise en Charge des Orphelins" },
    short: {
      en: "Shelter, care, and family for orphaned and abandoned children.",
      fr: "Abri, prise en charge et famille pour les enfants orphelins et abandonnes.",
    },
    description: {
      en: "Providing shelter, care, protection, and family support for orphaned and abandoned children so that no child has to face the world alone.",
      fr: "Offrir un abri, des soins, une protection et un soutien familial aux enfants orphelins et abandonnes afin qu'aucun enfant n'affronte le monde seul.",
    },
    icon: HeartHandshake,
    image: "/images/family-visit.jpeg",
  },
  {
    slug: "disability-care",
    title: {
      en: "Disability Care and Inclusion Program",
      fr: "Programme de Soins et d'Inclusion pour les Enfants en Situation de Handicap",
    },
    short: {
      en: "Serving children with disabilities with dignity and inclusion.",
      fr: "Servir les enfants en situation de handicap avec dignite et inclusion.",
    },
    description: {
      en: "Serving children with physical, hearing, visual, intellectual, and developmental disabilities, ensuring they are included, valued, and given every opportunity to thrive.",
      fr: "Servir les enfants ayant des handicaps physiques, auditifs, visuels, intellectuels et developpementaux, en veillant a ce qu'ils soient inclus, valorises et qu'ils aient toutes les chances de s'epanouir.",
    },
    icon: Accessibility,
    image: "/images/children-group.jpeg",
  },
  {
    slug: "feeding-nutrition",
    title: { en: "Feeding and Nutrition Program", fr: "Programme d'Alimentation et de Nutrition" },
    short: {
      en: "Fighting hunger and malnutrition among vulnerable children.",
      fr: "Lutter contre la faim et la malnutrition chez les enfants vulnerables.",
    },
    description: {
      en: "Addressing hunger and malnutrition among vulnerable children with nutritious meals and ongoing nutritional support.",
      fr: "Combattre la faim et la malnutrition chez les enfants vulnerables grace a des repas nutritifs et a un soutien nutritionnel continu.",
    },
    icon: Utensils,
    image: "/images/children-crowd.jpeg",
  },
  {
    slug: "education-support",
    title: { en: "Education Support Program", fr: "Programme de Soutien Educatif" },
    short: {
      en: "Opening the door to quality education.",
      fr: "Ouvrir la porte a une education de qualite.",
    },
    description: {
      en: "Helping children gain access to quality education through school enrollment, learning materials, and academic support.",
      fr: "Aider les enfants a acceder a une education de qualite grace a l'inscription scolaire, au materiel pedagogique et a l'accompagnement scolaire.",
    },
    icon: GraduationCap,
    image: "/images/community-home.jpeg",
  },
  {
    slug: "child-health",
    title: { en: "Child Health Program", fr: "Programme de Sante Infantile" },
    short: {
      en: "Medical treatment, screenings, and healthcare support.",
      fr: "Traitements medicaux, depistages et soutien sanitaire.",
    },
    description: {
      en: "Providing medical treatment, health screenings, and healthcare support so children can grow up strong and healthy.",
      fr: "Fournir des traitements medicaux, des depistages et un soutien sanitaire afin que les enfants grandissent forts et en bonne sante.",
    },
    icon: Stethoscope,
    image: "/images/children-celebration-2.jpeg",
  },
  {
    slug: "discipleship",
    title: {
      en: "Kingdom Builders Discipleship Program",
      fr: "Programme de Discipulat Kingdom Builders",
    },
    short: {
      en: "Teaching children about Jesus Christ.",
      fr: "Enseigner aux enfants la personne de Jesus-Christ.",
    },
    description: {
      en: "Teaching children about Jesus Christ through Bible lessons, prayer, worship, and character development, raising up a generation rooted in faith.",
      fr: "Enseigner aux enfants Jesus-Christ au moyen d'etudes bibliques, de la priere, de la louange et de la formation du caractere, afin de faire grandir une generation enracinee dans la foi.",
    },
    icon: BookOpen,
    image: "/images/evening-service.jpeg",
  },
  {
    slug: "family-strengthening",
    title: { en: "Family Strengthening Program", fr: "Programme de Renforcement des Familles" },
    short: {
      en: "Equipping families and caregivers.",
      fr: "Outiller les familles et les personnes en charge des enfants.",
    },
    description: {
      en: "Helping families and caregivers provide better care for vulnerable children through support, training, and encouragement.",
      fr: "Aider les familles et les personnes en charge des enfants a mieux prendre soin des enfants vulnerables grace au soutien, a la formation et a l'encouragement.",
    },
    icon: Home,
    image: "/images/congregation.jpeg",
  },
  {
    slug: "community-outreach",
    title: { en: "Community Outreach Program", fr: "Programme de Sensibilisation Communautaire" },
    short: {
      en: "Mobilizing churches and communities.",
      fr: "Mobiliser les eglises et les communautes.",
    },
    description: {
      en: "Mobilizing churches and communities to support and protect vulnerable children, multiplying compassion across the nation.",
      fr: "Mobiliser les eglises et les communautes pour soutenir et proteger les enfants vulnerables, en multipliant la compassion dans toute la nation.",
    },
    icon: Users,
    image: "/images/church-gathering.jpeg",
  },
]

export const longTermGoals = [
  { en: "Establish a Children's Care Center.", fr: "Etablir un centre d'accueil pour enfants." },
  { en: "Develop a Christian orphanage and family care home.", fr: "Developper un orphelinat chretien et un foyer familial." },
  { en: "Create a disability support and rehabilitation center.", fr: "Creer un centre de soutien et de rehabilitation pour le handicap." },
  { en: "Provide scholarships for vulnerable children.", fr: "Offrir des bourses aux enfants vulnerables." },
  { en: "Establish vocational training opportunities.", fr: "Mettre en place des opportunites de formation professionnelle." },
  { en: "Build partnerships with churches and supporters worldwide.", fr: "Construire des partenariats avec des eglises et des soutiens dans le monde entier." },
  { en: "Raise a generation of children who know Christ and serve their communities.", fr: "Former une generation d'enfants qui connaissent Christ et servent leurs communautes." },
]

export const stats = [
  { value: "8+", label: { en: "Care Programs", fr: "Programmes d'Accompagnement" } },
  { value: "100%", label: { en: "Christ-Centered", fr: "Centre sur Christ" } },
  { value: "7", label: { en: "Core Values", fr: "Valeurs Fondamentales" } },
  { value: "1", label: { en: "Mission of Hope", fr: "Mission d'Esperance" } },
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
      fr: "D'un enfant oublie a un croyant baptise",
    },
    excerpt: {
      en: "Once abandoned and afraid, Matthew gave his heart to Jesus and joyfully declared his new faith through water baptism.",
      fr: "Autrefois abandonne et effraye, Matthew a donne son coeur a Jesus et a declare avec joie sa nouvelle foi par le bapteme d'eau.",
    },
    story: [
      {
        en: "When Matthew first came into our care, he had been abandoned and left to survive on his own. Frightened, malnourished, and withdrawn, he carried wounds that ran far deeper than the eye could see.",
        fr: "Lorsque Matthew est arrive pour la premiere fois chez nous, il avait ete abandonne et laisse seul pour survivre. Effraye, mal nourri et renferme sur lui-meme, il portait des blessures bien plus profondes que ce que l'on pouvait voir.",
      },
      {
        en: "Through the love of a caring community, Bible lessons, prayer, and daily discipleship, Matthew slowly began to heal, and for the first time he heard how deeply Jesus loved him. What began as mere survival grew into a living faith.",
        fr: "Grace a l'amour d'une communaute bienveillante, aux lecons bibliques, a la priere et au discipulat quotidien, Matthew a commence peu a peu a guerir, et pour la premiere fois il a entendu combien Jesus l'aimait. Ce qui n'etait que survie est devenu une foi vivante.",
      },
      {
        en: "On the day of his water baptism, Matthew waded into the river to publicly declare that he now belongs to Christ. Rising from the water, he was no longer a forgotten child but a new creation, full of hope and ready to help build God's Kingdom.",
        fr: "Le jour de son bapteme d'eau, Matthew est entre dans la riviere pour declarer publiquement qu'il appartient desormais au Christ. En sortant de l'eau, il n'etait plus un enfant oublie mais une nouvelle creation, rempli d'esperance et pret a batir le Royaume de Dieu.",
      },
    ],
    image: "/images/baptism-boy.jpeg",
  },
  {
    slug: "grace",
    name: "Grace",
    title: {
      en: "A new life in Christ, sealed in baptism",
      fr: "Une vie nouvelle en Christ, scellee par le bapteme",
    },
    excerpt: {
      en: "Grace found healing and hope, gave her life to Jesus, and with a radiant smile was baptized as a beloved child of God.",
      fr: "Grace a trouve la guerison et l'esperance, a donne sa vie a Jesus et, avec un sourire radieux, a ete baptisee comme une enfant bien-aimee de Dieu.",
    },
    story: [
      {
        en: "Grace came to us weak and overlooked, having gone without proper food or medical attention for far too long. Few believed she would recover, but we believed every child's future can be transformed.",
        fr: "Grace est arrivee chez nous faible et souffrante, apres avoir ete privee trop longtemps d'une alimentation correcte et de soins medicaux. Peu de gens pensaient qu'elle guerirait, mais nous croyions que l'avenir de chaque enfant peut etre transforme.",
      },
      {
        en: "With consistent care, a family that loved her, and patient discipleship, Grace grew stronger every day. As she learned about Jesus, her heart opened to Him, and a quiet, unshakable joy began to shine through her.",
        fr: "Avec des soins reguliers, une famille qui l'aimait et un discipulat patient, Grace est devenue plus forte chaque jour. En apprenant a connaitre Jesus, son coeur s'est ouvert a Lui, et une joie tranquille et inebranlable a commence a rayonner en elle.",
      },
      {
        en: "On the day she was baptized, Grace could not stop smiling. Rising from the water, she stepped into a brand-new life as a daughter of God, a living testimony that no child is ever too far gone for the love of Christ.",
        fr: "Le jour de son bapteme, Grace ne pouvait s'empecher de sourire. En sortant de l'eau, elle est entree dans une vie toute nouvelle comme fille de Dieu, un temoignage vivant qu'aucun enfant n'est jamais trop perdu pour l'amour du Christ.",
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
    title: { en: "Founder & Executive Director", fr: "Fondateur et Directeur Exécutif" },
    bio: {
      en: "Provides spirituality, strategy and overall leadership for the ministry.",
      fr: "Assure la spiritualité, la stratégie et la direction globale du ministère.",
    },
    image: "/images/CEO.jpeg",
  },
  {
    name: "Mr Niamy Ernest",
    title: { en: "Director of Children's Care", fr: "Directeur des Soins pour Enfants" },
    bio: {
      en: "Oversees the child care, nurturing, and welfare of the Children.",
      fr: "Supervise les soins, l'éducation et le bien-être des enfants.",
    },
    image: "/images/Director of children care.jpeg",
  },
  {
    name: "Gaston Zoyagué Koiba",
    title: { en: "Finance and Administration Officer (Treasurer)", fr: "Responsable Finances et Administration (Trésorier)" },
    bio: {
      en: "Manages finance, budgeting, donations, and administrative affairs.",
      fr: "Gère les finances, le budget, les dons et les affaires administratives.",
    },
    image: "/images/Finance officer.jpeg",
  },
  {
    name: "Marceline Mamy",
    title: { en: "Secretary", fr: "Secretaire" },
    bio: {
      en: "Maintains Ministry records, correspondences, meetings, minutes and documentation.",
      fr: "Garde les registres du ministère, les correspondances, les réunions, les procès-verbaux et la documentation.",
    },
    image: "/images/Secretary.jpeg",
  },
]
