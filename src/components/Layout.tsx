import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { WhatsAppButton } from "./WhatsAppButton"
import { LanguageToggleButton } from "./LanguageToggleButton"
import { ScrollToTop } from "./ScrollToTop"

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <LanguageToggleButton />
      <WhatsAppButton />
    </div>
  )
}
