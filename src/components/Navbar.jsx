import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar({ openModal }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10'
                : 'bg-transparent'
                }`}
            style={isScrolled ? { boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)' } : {}}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-1">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/Resource/processed_logo.png"
                            alt="Mandat"
                            className="h-40 w-auto transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative font-medium text-sm transition-colors duration-300 font-display ${isActive(link.path)
                                    ? 'text-primary-400'
                                    : 'text-slate-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400 rounded-full"
                                        style={{ boxShadow: '0 0 10px rgba(45,212,191,0.5)' }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <button
                            onClick={openModal}
                            className="btn-primary text-sm font-display"
                        >
                            Book a demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-slate-900 border-t border-white/10"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block py-3 px-4 rounded-xl font-medium transition-colors ${isActive(link.path)
                                        ? 'bg-primary-500/10 text-primary-400'
                                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    openModal()
                                }}
                                className="w-full btn-primary mt-4 text-sm"
                            >
                                Book a demo
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
