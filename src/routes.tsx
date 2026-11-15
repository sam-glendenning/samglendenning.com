import { Routes, Route } from 'react-router'
import HomePage from './pages/home'
import AboutPage from './pages/about' 
import TermsPage from './pages/terms'   
import NotFoundPage from './pages/notFound'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
