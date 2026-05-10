import { useState } from 'react'

import { useForm, ValidationError } from '@formspree/react'

function BookDemoModal({ isOpen, onClose }) {
    const [state, handleSubmit] = useForm('xaqakqby')
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        phone: '',
        orgType: '',
        message: '',
        preferredContact: 'email',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    if (!isOpen) return null

    if (state.succeeded) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />
                <div className="relative glass-panel rounded-2xl shadow-2xl max-w-2xl w-full p-12 text-center border border-white/10 bg-slate-900/90 animate-slide-up">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10">
                        <span className="text-xl leading-none">✕</span>
                    </button>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/20 rounded-full mb-6 border border-primary-500/30">
                        <span className="text-4xl text-primary-400 leading-none">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-slate-400 font-light">
                        We've received your request and will be in touch within 24 hours to schedule your consultation.
                    </p>
                </div>
            </div>
        )
    }

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
                    <span className="text-xl leading-none">✕</span>
                </button>

                <div className="p-8">
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
                                <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-red-400 text-xs mt-1" />
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
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
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
                                <ValidationError prefix="Organization" field="organization" errors={state.errors} className="text-red-400 text-xs mt-1" />
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
                                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-400 text-xs mt-1" />
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
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
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
                            disabled={state.submitting}
                            className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed py-4 box-border"
                        >
                            {state.submitting ? (
                                <span>Submitting...</span>
                            ) : (
                                <>
                                    <span className="leading-none">Let's chat</span>
                                    <span className="translate-y-[1px] ml-2 text-xl leading-none">→</span>
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
                </div>
            </div>
        </div>
    )
}

export default BookDemoModal
