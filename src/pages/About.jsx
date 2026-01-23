import { Link } from 'react-router-dom'
import {
    Target,
    Eye,
    Compass,
    Search,
    Database,
    LineChart,
    FileText,
    Users,
    ArrowRight,
    CheckCircle,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

function About({ openModal }) {
    const missionPoints = [
        'Uncover deep audience insights through advanced profiling and analytics',
        'Transform complex data into clear, actionable intelligence for decision-makers',
        'Help clients design strategies, programs, and decisions that resonate',
    ]

    const methodologySteps = [
        {
            icon: Search,
            title: 'Problem Definition',
            description:
                'Understanding client objectives, constraints, and decision context',
        },
        {
            icon: Database,
            title: 'Data Collection & Integration',
            description:
                'Internal data, external data, performance data, survey data, observational data',
        },
        {
            icon: LineChart,
            title: 'Modeling & Analysis',
            description: 'Segmentation, profiling, predictive and descriptive analytics',
        },
        {
            icon: FileText,
            title: 'Insight Interpretation',
            description:
                'Translating outputs into clear narratives through reports, dashboards, or presentations',
        },
    ]

    const expertiseAreas = [
        'Data Science',
        'Organizational Psychology',
        'Survey Methodology',
        'Strategic Consulting',
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto">
                            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                About Us
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                                About Mandat
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                A Malaysia-based data analytics consultancy specializing in Audience
                                Profiling and Advanced Analytics
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Vision */}
                        <AnimatedSection>
                            <div className="bg-white rounded-2xl border border-neutral-200 p-8 h-full shadow-soft">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-xl mb-6">
                                    <Eye className="w-7 h-7 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h2>
                                <p className="text-neutral-600 leading-relaxed text-lg">
                                    To become a trusted data intelligence partner in Malaysia that
                                    enables organizations to truly understand their audiences and make
                                    confident, evidence-based decisions.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Mission */}
                        <AnimatedSection delay={100}>
                            <div className="bg-white rounded-2xl border border-neutral-200 p-8 h-full shadow-soft">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-xl mb-6">
                                    <Target className="w-7 h-7 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
                                <ul className="space-y-4">
                                    {missionPoints.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-neutral-600 leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* About Mandat Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                                    Who we are
                                </h2>
                                <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                                    Mandat is a Malaysia-based data analytics consultancy specializing in
                                    Audience Profiling and Advanced Analytics. We help organizations
                                    understand who they are engaging with, why people behave the way they
                                    do, and how to design better strategies.
                                </p>
                                <p className="text-neutral-600 leading-relaxed mb-6">
                                    Unlike traditional analytics that tell you{' '}
                                    <span className="text-neutral-900 font-semibold">WHAT</span> happened, we
                                    reveal <span className="text-primary-600 font-semibold">WHY</span> it
                                    happened and{' '}
                                    <span className="text-primary-600 font-semibold">HOW</span> to act on
                                    it.
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    Our approach combines demographic profiling, psychographic analysis
                                    using the scientifically-validated OCEAN personality model, and
                                    sentiment analysis to create a comprehensive understanding of any
                                    audience.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Illustration */}
                        <AnimatedSection delay={100}>
                            <div className="relative">
                                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 rounded-3xl" />
                                <div className="relative bg-white rounded-2xl p-8 shadow-card">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-3 bg-neutral-900 rounded-xl p-4">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                                <div className="w-2 h-2 rounded-full bg-green-400" />
                                            </div>
                                            <div className="flex gap-2 mb-2">
                                                <div className="h-8 bg-purple-500 rounded flex-1" />
                                                <div className="h-8 bg-purple-300 rounded flex-1" />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="h-6 bg-primary-500 rounded flex-[2]" />
                                                <div className="h-6 bg-primary-300 rounded flex-1" />
                                            </div>
                                        </div>
                                        <div className="bg-pink-100 rounded-xl p-4 flex items-center justify-center">
                                            <Target className="w-8 h-8 text-pink-500" />
                                        </div>
                                        <div className="bg-primary-100 rounded-xl p-4 flex items-center justify-center">
                                            <Users className="w-8 h-8 text-primary-600" />
                                        </div>
                                        <div className="bg-purple-100 rounded-xl p-4 flex items-center justify-center">
                                            <LineChart className="w-8 h-8 text-purple-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                How we work
                            </h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                                Mandat follows a structured yet flexible analytical approach that puts
                                your objectives first
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {methodologySteps.map((step, index) => (
                            <AnimatedSection key={step.title} delay={index * 100}>
                                <div className="relative bg-white rounded-2xl border border-neutral-200 p-6 h-full">
                                    {/* Step number */}
                                    <div className="absolute -top-3 left-6">
                                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-xl mb-4">
                                            <step.icon className="w-6 h-6 text-neutral-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Promise */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="bg-neutral-900 rounded-3xl p-12 text-center">
                            <Compass className="w-12 h-12 text-primary-400 mx-auto mb-6" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Our promise
                            </h2>
                            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                                "We believe understanding people leads to better strategies, programs,
                                and outcomes. Every engagement is driven by this principle—delivering
                                insights that don't just sit in reports, but actually change how you
                                operate."
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-xl mb-6">
                                <Users className="w-7 h-7 text-primary-600" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                Our team
                            </h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto mb-8 text-lg">
                                Our team combines diverse expertise to deliver comprehensive audience
                                intelligence solutions
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {expertiseAreas.map((area) => (
                                    <span
                                        key={area}
                                        className="px-5 py-2 bg-white border border-neutral-200 rounded-full text-neutral-700 text-sm font-medium"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                                See our work in action
                            </h2>
                            <p className="text-neutral-600 max-w-xl mx-auto mb-10 text-lg">
                                Discover how Mandat has helped organizations understand their audiences
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/services"
                                    className="btn-primary flex items-center"
                                >
                                    Explore our services
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <button
                                    onClick={openModal}
                                    className="btn-secondary"
                                >
                                    Book a demo
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default About
