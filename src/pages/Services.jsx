import {
    Users,
    Brain,
    MessageSquare,
    Layers,
    RefreshCw,
    Target,
    FileBarChart,
    Building2,
    GraduationCap,
    Heart,
    Vote,
    ArrowRight,
    CheckCircle,
    Zap,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

function Services({ openModal }) {
    const services = [
        {
            id: 'demographic',
            icon: Users,
            title: 'Demographic Profiling',
            description: `Establish a comprehensive baseline understanding of who your audience is. We profile audiences across age, location, education, occupation, socioeconomic status, and other key demographic variables to create accurate segmentation.

Our demographic profiling integrates seamlessly with psychographic and sentiment analysis, creating a foundation for deeper insights. Unlike static demographic reports, our profiles update automatically as new data flows in.`,
            useCases: [
                'Audience segmentation for programs and campaigns',
                'Recruitment targeting',
                'Resource allocation planning',
                'Baseline measurement for initiatives',
            ],
            color: 'primary',
        },
        {
            id: 'psychographic',
            icon: Brain,
            title: 'Psychographic Profiling',
            description: `Discover WHY your audience thinks, feels, and acts the way they do. Using the OCEAN personality framework—the most scientifically validated model in psychology—we measure five key personality dimensions.

This isn't guesswork—psychographic profiling has been proven to increase targeting effectiveness by up to 670% compared to demographic targeting alone.`,
            useCases: [
                'Message and narrative alignment',
                'Personality-informed recruitment',
                'Communication strategy development',
                'Program design optimization',
            ],
            highlight: '670% more effective than demographic targeting alone',
            color: 'purple',
        },
        {
            id: 'sentiment',
            icon: MessageSquare,
            title: 'Sentiment Analysis',
            description: `Measure how your audience truly responds to your messages, programs, and initiatives. Our sentiment analysis goes beyond positive/negative classification to uncover emotional intensity and topic associations.

We track sentiment across multiple touchpoints—surveys, social media, feedback channels—to give you a real-time pulse on audience perception.`,
            useCases: [
                'Campaign effectiveness measurement',
                'Brand perception tracking',
                'Program satisfaction monitoring',
                'Crisis detection and response',
            ],
            color: 'pink',
        },
    ]

    const platformFeatures = [
        {
            icon: RefreshCw,
            title: 'Dynamic Profiling',
            description: 'Insights that update automatically as new data arrives',
        },
        {
            icon: Layers,
            title: 'Multi-dimensional View',
            description: 'Demographic + Psychographic + Sentiment in one place',
        },
        {
            icon: Target,
            title: 'Actionable Outputs',
            description: 'Clear recommendations, not just data dumps',
        },
        {
            icon: Zap,
            title: 'Scalable Infrastructure',
            description: 'From pilot projects to organization-wide deployment',
        },
    ]

    const audiences = [
        { icon: Building2, label: 'Government agencies and statutory bodies' },
        { icon: Heart, label: 'Non-profit organizations and foundations' },
        { icon: GraduationCap, label: 'Universities and educational institutions' },
        { icon: Building2, label: 'Corporate CSR programs' },
        { icon: Vote, label: 'Political and social campaigns' },
    ]

    const getColorClasses = (color) => {
        const colors = {
            primary: { bg: 'bg-primary-50', icon: 'text-primary-600', border: 'border-primary-200' },
            purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
            pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200' },
        }
        return colors[color] || colors.primary
    }

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto">
                            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                Our Services
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                                Services built around understanding people
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                Our solutions help you profile audiences, uncover behavioral drivers,
                                and design strategies that resonate
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-16 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {services.map((service, index) => {
                            const colorClasses = getColorClasses(service.color)
                            return (
                                <AnimatedSection key={service.id}>
                                    <div
                                        id={service.id}
                                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? '' : ''
                                            }`}
                                    >
                                        {/* Content */}
                                        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                            <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} rounded-2xl mb-6`}>
                                                <service.icon className={`w-8 h-8 ${colorClasses.icon}`} />
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                                {service.title}
                                            </h2>
                                            {service.highlight && (
                                                <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
                                                    <span className="text-purple-700 text-sm font-medium">
                                                        {service.highlight}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="prose prose-lg">
                                                {service.description.split('\n\n').map((para, i) => (
                                                    <p key={i} className="text-neutral-600 leading-relaxed mb-4">
                                                        {para}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Use Cases */}
                                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-soft">
                                                <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                                                    <FileBarChart className="w-5 h-5 text-neutral-500 mr-3" />
                                                    Use cases
                                                </h3>
                                                <ul className="space-y-4">
                                                    {service.useCases.map((useCase, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                                                            <span className="text-neutral-700">{useCase}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Integrated Platform */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                One platform. Complete understanding.
                            </h2>
                            <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
                                Mandat enables organizations to profile audiences across multiple
                                programs and campaigns using one consistent, automated platform.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platformFeatures.map((feature, index) => (
                            <AnimatedSection key={feature.title} delay={index * 100}>
                                <div className="bg-neutral-50 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                                        <feature.icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm">{feature.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                Who we serve
                            </h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                                We partner with organizations committed to understanding their audiences
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={100}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {audiences.map((audience, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-4 bg-white border border-neutral-200 rounded-xl"
                                >
                                    <audience.icon className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                                    <span className="text-neutral-700 text-sm">{audience.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Let's build your audience intelligence strategy
                            </h2>
                            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
                                Schedule a consultation to discuss your objectives and discover how
                                Mandat can transform your understanding of your audiences
                            </p>
                            <button onClick={openModal} className="bg-primary-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:bg-primary-400 hover:shadow-lg text-lg">
                                Let's chat
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default Services
