import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'

function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
    ]

    const contactInfo = [
        { label: 'General', email: 'info@mandatanalytic.com' },
        { label: 'Afiq Akmal', email: 'afiq.akmal@mandatanalytic.com' },
        { label: 'Zaki Hamidi', email: 'zaki.hamidi@mandatanalytic.com' },
    ]

    return (
        <footer className="bg-slate-950 border-t border-white/10 pt-16 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src="/Resource/processed_logo.png"
                                alt="Mandat"
                                className="h-40 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-slate-400 text-lg mb-8 max-w-md font-light">
                            Transforming audience data into strategic intelligence. Empowering decisions with precision.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-primary-400 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-primary-400 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="mailto:info@mandatanalytic.com"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-primary-400 hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-primary-400 flex items-center transition-colors duration-300 group"
                                    >
                                        <span className="h-px w-0 bg-primary-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            {contactInfo.map((contact) => (
                                <li key={contact.email} className="group">
                                    <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">{contact.label}</p>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="text-slate-300 hover:text-primary-400 transition-colors duration-300 text-sm break-all"
                                    >
                                        {contact.email}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Mandat Analytic. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm font-medium">
                        Malaysia's Premier <span className="text-primary-500">Audience Intelligence</span> Partner
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
