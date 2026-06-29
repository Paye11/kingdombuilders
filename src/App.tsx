import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProgramDetailPage from "./pages/ProgramDetailPage"
import SuccessStoriesPage from "./pages/SuccessStoriesPage"
import GalleryPage from "./pages/GalleryPage"
import GetInvolvedPage from "./pages/GetInvolvedPage"
import DonatePage from "./pages/DonatePage"
import ContactPage from "./pages/ContactPage"
import OurTeamPage from "./pages/OurTeamPage"
import NotFoundPage from "./pages/NotFoundPage"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/programs/:slug" element={<ProgramDetailPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
