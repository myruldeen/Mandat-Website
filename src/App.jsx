import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookDemoModal from './components/BookDemoModal'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const location = useLocation()

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleExitComplete = () => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar openModal={openModal} />
            <main>
                <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageTransition><Home openModal={openModal} /></PageTransition>} />
                        <Route path="/about" element={<PageTransition><About openModal={openModal} /></PageTransition>} />
                        <Route path="/services" element={<PageTransition><Services openModal={openModal} /></PageTransition>} />
                        <Route path="/blog" element={<PageTransition><Blog openModal={openModal} /></PageTransition>} />
                        <Route path="/blog/:slug" element={<PageTransition><BlogArticle openModal={openModal} /></PageTransition>} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
            <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default App
