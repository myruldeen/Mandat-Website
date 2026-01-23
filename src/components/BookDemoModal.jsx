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
                className="absolute inset-0 bg-neutral-900/50 backdrop-blur-modal"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 transition-colors rounded-full hover:bg-neutral-100"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                                <CheckCircle className="w-10 h-10 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h3>
                            <p className="text-neutral-600">
                                We'll be in touch within 24 hours to schedule your consultation.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                                    Let's chat
                                </h2>
                                <p className="text-neutral-600">
                                    Schedule a 30-minute consultation to discuss your objectives
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-2">
                                            Full Name <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                            Email Address <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                            placeholder="you@organization.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Organization */}
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                                            Organization Name <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                            placeholder="Your organization"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                            placeholder="+60 12-345 6789"
                                        />
                                    </div>
                                </div>

                                {/* Organization Type */}
                                <div>
                                    <label htmlFor="orgType" className="block text-sm font-medium text-neutral-700 mb-2">
                                        Organization Type
                                    </label>
                                    <select
                                        id="orgType"
                                        name="orgType"
                                        value={formData.orgType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
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
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                                        Project Description
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                                        placeholder="Tell us about your audience profiling needs..."
                                    />
                                </div>

                                {/* Preferred Contact */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-3">
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
                                                    className="w-4 h-4 text-primary-500 border-neutral-300 focus:ring-primary-500"
                                                />
                                                <span className="text-neutral-700 capitalize">{method}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed py-4"
                                >
                                    {isSubmitting ? (
                                        <span>Submitting...</span>
                                    ) : (
                                        <>
                                            <span>Let's chat</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Contact Info */}
                            <div className="mt-8 pt-6 border-t border-neutral-100">
                                <p className="text-sm text-neutral-500 text-center">
                                    Or reach us directly at{' '}
                                    <a
                                        href="mailto:info@mandatanalytic.com"
                                        className="text-primary-600 hover:underline"
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
