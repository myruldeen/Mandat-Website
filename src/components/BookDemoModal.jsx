import { useState } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'

function BookDemoModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        phone: '',
        orgType: '',
        message: '',
        preferredContact: 'email',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset after showing success
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                fullName: '',
                email: '',
                organization: '',
                phone: '',
                orgType: '',
                message: '',
                preferredContact: 'email',
            })
            onClose()
        }, 3000)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative glass-panel rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up border border-white/10 bg-slate-900/90">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 rounded-full mb-6 border border-primary-500/30">
                                <CheckCircle className="w-10 h-10 text-primary-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                            <p className="text-slate-400 font-light">
                                We'll be in touch within 24 hours to schedule your consultation.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                    Let's chat
                                </h2>
                                <p className="text-slate-400 font-light">
                                    Schedule a 30-minute consultation to discuss your objectives
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                                            Full Name <span className="text-primary-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                            Email Address <span className="text-primary-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                            placeholder="you@organization.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Organization */}
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-medium text-slate-300 mb-2">
                                            Organization Name <span className="text-primary-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                            placeholder="Your organization"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                            placeholder="+60 12-345 6789"
                                        />
                                    </div>
                                </div>

                                {/* Organization Type */}
                                <div>
                                    <label htmlFor="orgType" className="block text-sm font-medium text-slate-300 mb-2">
                                        Organization Type
                                    </label>
                                    <select
                                        id="orgType"
                                        name="orgType"
                                        value={formData.orgType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none [&>option]:bg-slate-800"
                                    >
                                        <option value="">Select type...</option>
                                        <option value="government">Government Agency</option>
                                        <option value="ngo">NGO / Foundation</option>
                                        <option value="university">University / Education</option>
                                        <option value="corporate">Corporate</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        Project Description
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none outline-none"
                                        placeholder="Tell us about your audience profiling needs..."
                                    />
                                </div>

                                {/* Preferred Contact */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-3">
                                        Preferred Contact Method
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        {['email', 'phone', 'whatsapp'].map((method) => (
                                            <label
                                                key={method}
                                                className="flex items-center space-x-2 cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name="preferredContact"
                                                    value={method}
                                                    checked={formData.preferredContact === method}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 text-primary-500 bg-slate-800 border-white/20 focus:ring-primary-500 focus:ring-offset-slate-900"
                                                />
                                                <span className="text-slate-300 capitalize">{method}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed py-4 box-border"
                                >
                                    {isSubmitting ? (
                                        <span>Submitting...</span>
                                    ) : (
                                        <>
                                            <span className="leading-none">Let's chat</span>
                                            <Send size={18} className="translate-y-[1px]" />
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Contact Info */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-sm text-slate-500 text-center font-light">
                                    Or reach us directly at{' '}
                                    <a
                                        href="mailto:info@mandatanalytic.com"
                                        className="text-primary-400 hover:text-primary-300 hover:underline transition-colors"
                                    >
                                        info@mandatanalytic.com
                                    </a>
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BookDemoModal
