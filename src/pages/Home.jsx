import { Link } from 'react-router-dom'
import {
    Users,
    Brain,
    MessageSquare,
    Lightbulb,
    Target,
    Zap,
    BarChart3,
    Globe,
    Cpu,
    TrendingUp,
    ArrowRight,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'

// Cartoon illustration component
function HeroIllustration() {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Background blob */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform rotate-3" />

            {/* Main card */}
            <div className="relative bg-neutral-900 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-4">Profiling audience group 1</h4>

                {/* Data visualization */}
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm text-neutral-400 mb-2">
                            <span>Gender split</span>
                        </div>
                        <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
                            <div className="bg-purple-500 flex-[53] flex items-center justify-center text-white text-xs font-medium">53%</div>
                            <div className="bg-purple-300 flex-[47] flex items-center justify-center text-neutral-900 text-xs font-medium">47%</div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm text-neutral-400 mb-2">
                            <span>Age distribution</span>
                        </div>
                        <div className="flex gap-1 h-8 rounded-lg overflow-hidden">
                            <div className="bg-amber-400 flex-[19] flex items-center justify-center text-neutral-900 text-xs font-medium">19%</div>
                            <div className="bg-amber-500 flex-[40] flex items-center justify-center text-white text-xs font-medium">40%</div>
                            <div className="bg-amber-300 flex-[25] flex items-center justify-center text-neutral-900 text-xs font-medium">25%</div>
                            <div className="bg-amber-200 flex-[16] flex items-center justify-center text-neutral-900 text-xs font-medium">16%</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-neutral-400 text-xs mb-1">Relationship Status</p>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: '67%' }} />
                                    <span className="text-white text-xs">67%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 bg-purple-400 rounded-full" style={{ width: '28%' }} />
                                    <span className="text-white text-xs">28%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-neutral-400 text-xs mb-1">Employment</p>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 bg-pink-500 rounded-full" style={{ width: '49%' }} />
                                    <span className="text-white text-xs">49%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 bg-pink-400 rounded-full" style={{ width: '35%' }} />
                                    <span className="text-white text-xs">35%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -left-6 top-1/4 w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Users className="w-8 h-8 text-primary-600" />
            </div>
            <div className="absolute -right-4 bottom-1/4 w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
                <Brain className="w-7 h-7 text-pink-600" />
            </div>
        </div>
    )
}

function Home({ openModal }) {
    const benefits = [
        {
            icon: Users,
            title: 'Deep Audience Insights',
            description:
                'Uncover who your audiences really are through advanced demographic and psychographic profiling',
        },
        {
            icon: Lightbulb,
            title: 'Actionable Intelligence',
            description:
                'Transform complex data into clear, strategic recommendations that drive decisions',
        },
        {
            icon: Zap,
            title: 'Dynamic Profiling',
            description:
                'Live, evolving insights that update automatically—not static reports',
        },
    ]

    const services = [
        {
            icon: Users,
            title: 'Demographic Profiling',
            description:
                'Establish baseline understanding of your audience segments',
            link: '/services#demographic',
        },
        {
            icon: Brain,
            title: 'Psychographic Profiling',
            description:
                'Discover WHY people behave the way they do using OCEAN-based personality analysis',
            link: '/services#psychographic',
        },
        {
            icon: MessageSquare,
            title: 'Sentiment Analysis',
            description:
                'Measure how audiences respond to your messages and programs in real-time',
            link: '/services#sentiment',
        },
    ]

    const differentiators = [
        {
            icon: BarChart3,
            title: 'Research-Backed Methodology',
            description: 'OCEAN personality framework proven in academic research',
        },
        {
            icon: Globe,
            title: 'Malaysian Expertise',
            description: 'Deep understanding of local cultural and social context',
        },
        {
            icon: Cpu,
            title: 'Automated & Scalable',
            description: 'Technology-driven approach that grows with you',
        },
        {
            icon: Target,
            title: 'Outcome-Focused',
            description: 'Every insight tied to actionable strategy',
        },
    ]

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div>
                            <AnimatedSection>
                                <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                    Audience Profiling
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={100}>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                                    Deep audience understanding
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection delay={200}>
                                <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl">
                                    Need to understand your audience on a deeper level? Mandat's audience profiling gives you a laser-focused view of your target consumers. Our granular insights will help you make better data-backed decisions and gain a competitive edge.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={300}>
                                <button onClick={openModal} className="btn-primary text-base px-8 py-4">
                                    Let's chat
                                </button>
                            </AnimatedSection>
                        </div>

                        {/* Illustration */}
                        <AnimatedSection delay={200}>
                            <HeroIllustration />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="section-padding bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                Our approach to audience profiling
                            </h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                                We'll identify your audience and ask them the right questions, bringing precision to your messaging, product development, and targeting.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={benefit.title} delay={index * 100}>
                                <div className="text-center group">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                                        <benefit.icon className="w-8 h-8 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                                    <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                Our expertise
                            </h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                                Comprehensive analytics solutions designed to unlock deeper understanding of your audience
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.title} delay={index * 100}>
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    to="/services"
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="section-padding bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <AnimatedSection>
                            <div>
                                <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                    Case Study
                                </p>
                                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                                    See your audience in high definition
                                </h2>
                                <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                                    Building campaigns based on assumptions and incomplete data means wasted ad spend and poor customer engagement. Luckily, there's a better way.
                                </p>
                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    Audience profiling gives you a nuanced view of your target consumers so you can get straight to the crux of who they are, what they think, and - critically - how you can get them on side.
                                </p>
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                                >
                                    Read our case study
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Illustration */}
                        <AnimatedSection delay={100}>
                            <div className="relative">
                                {/* Background decoration */}
                                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl" />

                                {/* Cartoon illustration */}
                                <div className="relative bg-white rounded-2xl p-8 shadow-card">
                                    <div className="flex items-center justify-center">
                                        <svg viewBox="0 0 300 200" className="w-full max-w-sm">
                                            {/* Desk */}
                                            <rect x="50" y="150" width="200" height="10" fill="#f5f5f5" rx="2" />
                                            <rect x="60" y="160" width="10" height="30" fill="#d4d4d4" />
                                            <rect x="230" y="160" width="10" height="30" fill="#d4d4d4" />

                                            {/* Computer screen */}
                                            <rect x="100" y="80" width="100" height="70" fill="#171717" rx="4" />
                                            <rect x="105" y="85" width="90" height="55" fill="#262626" rx="2" />
                                            <rect x="140" y="150" width="20" height="10" fill="#404040" />

                                            {/* Chart on screen */}
                                            <rect x="115" y="95" width="20" height="35" fill="#ec4899" rx="2" />
                                            <rect x="140" y="105" width="20" height="25" fill="#a855f7" rx="2" />
                                            <rect x="165" y="90" width="20" height="40" fill="#06b6d4" rx="2" />

                                            {/* Person */}
                                            <circle cx="70" cy="110" r="20" fill="#fce7f3" stroke="#171717" strokeWidth="2" />
                                            <circle cx="65" cy="105" r="3" fill="#171717" />
                                            <circle cx="75" cy="105" r="3" fill="#171717" />
                                            <path d="M62 115 Q70 122 78 115" stroke="#171717" strokeWidth="2" fill="none" />

                                            {/* Body */}
                                            <rect x="55" y="130" width="30" height="25" fill="#ec4899" rx="4" />
                                            <rect x="40" y="135" width="15" height="5" fill="#fce7f3" rx="2" />

                                            {/* Chat bubbles */}
                                            <circle cx="250" cy="60" r="6" fill="#ec4899" />
                                            <circle cx="260" cy="60" r="6" fill="#ec4899" />
                                            <circle cx="270" cy="60" r="6" fill="#ec4899" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Mandat Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                                Why organizations choose Mandat
                            </h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                                Our unique approach combines scientific rigor with practical, actionable insights
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {differentiators.map((item, index) => (
                            <AnimatedSection key={item.title} delay={index * 100}>
                                <div className="bg-neutral-50 rounded-2xl p-6 hover:shadow-card transition-all duration-300 h-full">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-4">
                                        <item.icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to understand your audience?
                            </h2>
                            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
                                Let's discuss how Mandat can transform your programs, campaigns, and decisions with data-driven audience intelligence
                            </p>
                            <button
                                onClick={openModal}
                                className="bg-primary-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:bg-primary-400 hover:shadow-lg text-lg"
                            >
                                Let's chat
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default Home
