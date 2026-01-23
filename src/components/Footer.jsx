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
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src="/Resource/processed_logo.png"
                                alt="Mandat"
                                className="h-20 w-auto"
                            />
                        </Link>
                        <p className="text-neutral-600 text-lg mb-6 max-w-md">
                            Transforming audience data into strategic intelligence
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white border border-neutral-200 rounded-full text-neutral-500 hover:text-primary-600 hover:border-primary-300 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white border border-neutral-200 rounded-full text-neutral-500 hover:text-primary-600 hover:border-primary-300 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="mailto:info@mandatanalytic.com"
                                className="p-3 bg-white border border-neutral-200 rounded-full text-neutral-500 hover:text-primary-600 hover:border-primary-300 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-neutral-900 font-semibold text-sm uppercase tracking-wider mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-neutral-600 hover:text-primary-600 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-neutral-900 font-semibold text-sm uppercase tracking-wider mb-6">
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            {contactInfo.map((contact) => (
                                <li key={contact.email}>
                                    <p className="text-neutral-400 text-sm mb-1">{contact.label}</p>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="text-neutral-600 hover:text-primary-600 transition-colors duration-300 text-sm break-all"
                                    >
                                        {contact.email}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm">
                        © {currentYear} Mandat. All rights reserved.
                    </p>
                    <p className="text-neutral-500 text-sm">
                        Malaysia's Premier Audience Intelligence Partner
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
