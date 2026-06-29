import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Heart, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ButtonLink } from "./ui/Button"
import { programsMenu, site } from "@/lib/site"
import { useLanguage } from "@/context/LanguageContext"
import logoImage from "../../images/logo.jpeg"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { language, toggleLanguage, t } = useLanguage()

  const labels = {
    home: { en: "Home", fr: "Accueil" },
    about: { en: "About Us", fr: "A Propos" },
    ourTeam: { en: "Our Team", fr: "Notre Equipe" },
    programs: { en: "Programs", fr: "Programmes" },
    gallery: { en: "Gallery", fr: "Galerie" },
    involved: { en: "Get Involved", fr: "S'impliquer" },
    contact: { en: "Contact", fr: "Contact" },
    donate: { en: "Donate", fr: "Faire un don" },
    toggleMenu: { en: "Toggle menu", fr: "Afficher le menu" },
    toggleLanguage: { en: "Switch language", fr: "Changer de langue" },
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setProgramsOpen(false)
    setMobileProgramsOpen(false)
  }, [location.pathname])

  const isProgramsActive =
    location.pathname.startsWith("/programs") ||
    location.pathname === "/success-stories"

  useEffect(() => {
    if (!programsOpen) return

    const onPointerDown = (event: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramsOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProgramsOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [programsOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="Kingdom Builders Kids Logo" 
            className="h-24 w-auto object-contain"
          />
        </Link>

        <div className="hidden flex-wrap items-center justify-center gap-1 lg:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors font-heading",
                scrolled
                  ? isActive
                    ? "text-green"
                    : "text-royal-dark hover:text-green"
                  : isActive
                    ? "text-gold"
                    : "text-white hover:text-gold",
              )
            }
          >
            {t(labels.home)}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors font-heading",
                scrolled
                  ? isActive
                    ? "text-green"
                    : "text-royal-dark hover:text-green"
                  : isActive
                    ? "text-gold"
                    : "text-white hover:text-gold",
              )
            }
          >
            {t(labels.about)}
          </NavLink>
          <NavLink
            to="/our-team"
            className={({ isActive }) =>
              cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors font-heading",
                scrolled
                  ? isActive
                    ? "text-green"
                    : "text-royal-dark hover:text-green"
                  : isActive
                    ? "text-gold"
                    : "text-white hover:text-gold",
              )
            }
          >
            {t(labels.ourTeam)}
          </NavLink>
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={programsOpen}
              onClick={() => setProgramsOpen((value) => !value)}
              className={cn(
                "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors font-heading",
                scrolled
                  ? isProgramsActive
                    ? "text-green"
                    : "text-royal-dark hover:text-green"
                  : isProgramsActive
                    ? "text-gold"
                    : "text-white hover:text-gold",
              )}
            >
              {t(labels.programs)}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  programsOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {programsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-border"
                >
                  {programsMenu.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "block rounded-xl px-4 py-2.5 text-sm font-semibold font-heading transition-colors",
                          isActive
                            ? "bg-muted text-green"
                            : "text-royal-dark hover:bg-muted hover:text-green",
                        )
                      }
                    >
                      {t(item.label)}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors font-heading",
                scrolled
                  ? isActive
                    ? "text-green"
                    : "text-royal-dark hover:text-green"
                  : isActive
                    ? "text-gold"
                    : "text-white hover:text-gold",
              )
            }
          >
            {t(labels.gallery)}
          </NavLink>
          <NavLink
            to="/get-involved"
            className={({ isActive }) =>
              cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors font-heading",
                scrolled
                  ? isActive
                    ? "text-green"
                    : "text-royal-dark hover:text-green"
                  : isActive
                    ? "text-gold"
                    : "text-white hover:text-gold",
              )
            }
          >
            {t(labels.involved)}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors font-heading",
                scrolled
                  ? isActive
                    ? "text-green"
                    : "text-royal-dark hover:text-green"
                  : isActive
                    ? "text-gold"
                    : "text-white hover:text-gold",
              )
            }
          >
            {t(labels.contact)}
          </NavLink>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t(labels.toggleLanguage)}
            className={cn(
              "rounded-full border px-3 py-2 text-sm font-heading font-semibold transition-colors",
              scrolled
                ? "border-border text-royal-dark hover:border-green hover:text-green"
                : "border-white/30 text-white hover:border-gold hover:text-gold",
            )}
          >
            {language === "en" ? "FR" : "EN"}
          </button>
          <ButtonLink to="/donate" variant="gold" size="sm">
            <Heart className="h-4 w-4" /> {t(labels.donate)}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={t(labels.toggleMenu)}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            scrolled || open ? "bg-royal text-white" : "bg-white/15 text-white",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white shadow-lg xl:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 font-heading text-base font-semibold transition-colors",
                    isActive ? "bg-muted text-green" : "text-royal-dark hover:bg-muted",
                  )
                }
              >
                {t(labels.home)}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 font-heading text-base font-semibold transition-colors",
                    isActive ? "bg-muted text-green" : "text-royal-dark hover:bg-muted",
                  )
                }
              >
                {t(labels.about)}
              </NavLink>
              <NavLink
                to="/our-team"
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 font-heading text-base font-semibold transition-colors",
                    isActive ? "bg-muted text-green" : "text-royal-dark hover:bg-muted",
                  )
                }
              >
                {t(labels.ourTeam)}
              </NavLink>

              <button
                type="button"
                aria-expanded={mobileProgramsOpen}
                onClick={() => setMobileProgramsOpen((value) => !value)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-4 py-3 text-left font-heading text-base font-semibold transition-colors",
                  isProgramsActive ? "bg-muted text-green" : "text-royal-dark hover:bg-muted",
                )}
              >
                {t(labels.programs)}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    mobileProgramsOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {mobileProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 border-l-2 border-border pl-3">
                      {programsMenu.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={({ isActive }) =>
                            cn(
                              "rounded-lg px-4 py-2.5 font-heading text-sm font-semibold transition-colors",
                              isActive
                                ? "bg-muted text-green"
                                : "text-royal-dark hover:bg-muted",
                            )
                          }
                        >
                          {t(item.label)}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 font-heading text-base font-semibold transition-colors",
                    isActive ? "bg-muted text-green" : "text-royal-dark hover:bg-muted",
                  )
                }
              >
                {t(labels.gallery)}
              </NavLink>
              <NavLink
                to="/get-involved"
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 font-heading text-base font-semibold transition-colors",
                    isActive ? "bg-muted text-green" : "text-royal-dark hover:bg-muted",
                  )
                }
              >
                {t(labels.involved)}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 font-heading text-base font-semibold transition-colors",
                    isActive ? "bg-muted text-green" : "text-royal-dark hover:bg-muted",
                  )
                }
              >
                {t(labels.contact)}
              </NavLink>

              <button
                type="button"
                onClick={toggleLanguage}
                className="rounded-lg border border-border px-4 py-3 text-left font-heading text-base font-semibold text-royal-dark transition-colors hover:bg-muted"
              >
                {t(labels.toggleLanguage)}: {language === "en" ? "FR" : "EN"}
              </button>

              <ButtonLink to="/donate" variant="gold" className="mt-2 w-full">
                <Heart className="h-4 w-4" /> {t(labels.donate)}
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
