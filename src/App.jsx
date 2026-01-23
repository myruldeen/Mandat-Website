import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookDemoModal from './components/BookDemoModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <ScrollToTop />
            <Navbar openModal={openModal} />
            <main>
                <Routes>
                    <Route path="/" element={<Home openModal={openModal} />} />
                    <Route path="/about" element={<About openModal={openModal} />} />
                    <Route path="/services" element={<Services openModal={openModal} />} />
                    <Route path="/blog" element={<Blog openModal={openModal} />} />
                </Routes>
            </main>
            <Footer />
            <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}

export default App
