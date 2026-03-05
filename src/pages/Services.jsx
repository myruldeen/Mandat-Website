import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    Zap,
    Sparkles,
    Trophy,
    Activity,
    Search,
    LineChart,
    UserCheck,
    Shield,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import TechGrid from '../components/TechGrid'

function Services({ openModal }) {
    const [activeIndustry, setActiveIndustry] = useState('organization')

    const industries = [
        { id: 'organization', label: 'Organization', icon: Building2 },
        { id: 'football', label: 'Football', icon: Trophy },
    ]

    const organizationServices = [
        {
            id: 'demographic',
            icon: Users,
            title: 'Demographic Profiling',
            description: `Establish a comprehensive baseline understanding of who your audience is. We profile audiences across age, location, education, occupation, socioeconomic status, and other key demographic variables to create accurate segmentation.

Our demographic profiling integrates seamlessly with psychographic and sentiment analysis, creating a foundation for deeper insights.`,
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

    const footballServices = [
        {
            id: 'player-profiling',
            icon: UserCheck,
            title: 'Player Profiling & Recruitment Model',
            description: `Our advanced player profiling system combines statistical performance data with predictive modelling to identify optimal recruitment targets. We build custom models that match your club's tactical philosophy with player characteristics.

Using multi-dimensional analysis across physical, technical, and tactical metrics, we provide a data-backed shortlist that reduces recruitment risk and maximizes ROI.`,
            useCases: [
                'Data-driven player scouting and shortlisting',
                'Transfer market valuation modelling',
                'Positional fit analysis',
                'Youth talent identification',
            ],
            color: 'primary',
        },
        {
            id: 'team-performance',
            icon: LineChart,
            title: 'Team Performance Analysis',
            description: `Comprehensive analysis of team performance metrics across tactical, physical, and technical dimensions. Our proprietary index system breaks down complex match data into actionable insights for coaching staff.

We provide pre-match tactical briefings, post-match analysis reports, and longitudinal performance tracking to drive continuous improvement.`,
            useCases: [
                'Tactical pattern recognition',
                'Opposition analysis and briefings',
                'In-season performance tracking',
                'Set-piece effectiveness analysis',
            ],
            highlight: 'Proprietary TAP Index System',
            color: 'blue',
        },
        {
            id: 'coach-scouting',
            icon: Search,
            title: 'Coach Scouting',
            description: `Identify and evaluate coaching talent using data-driven methodologies. We profile coaches based on their tactical tendencies, squad development track record, results under pressure, and cultural fit with your organization.

Our coaching analytics go beyond win/loss records to evaluate the deeper metrics that predict long-term success and alignment with your club's vision.`,
            useCases: [
                'Coaching style and philosophy profiling',
                'Performance under constraint analysis',
                'Squad development and youth integration metrics',
                'Cultural and organizational fit assessment',
            ],
            color: 'amber',
        },
    ]

    const services = activeIndustry === 'organization' ? organizationServices : footballServices

    const platformFeatures = [
        { icon: RefreshCw, title: 'Dynamic Profiling', description: 'Insights that update automatically as new data arrives' },
        { icon: Layers, title: 'Multi-dimensional View', description: 'Demographic + Psychographic + Performance in one place' },
        { icon: Target, title: 'Actionable Outputs', description: 'Clear recommendations, not just data dumps' },
        { icon: Zap, title: 'Scalable Infrastructure', description: 'From pilot projects to organization-wide deployment' },
    ]

    const audiences = [
        { icon: Building2, label: 'Government agencies and statutory bodies' },
        { icon: Heart, label: 'Non-profit organizations and foundations' },
        { icon: GraduationCap, label: 'Universities and educational institutions' },
        { icon: Trophy, label: 'Football clubs and sporting organizations' },
        { icon: Vote, label: 'Political and social campaigns' },
    ]

    const getColorClasses = (color) => {
        const colors = {
            primary: { bg: 'bg-primary-500/10', icon: 'text-primary-400', border: 'border-primary-500/20', glow: 'from-primary-500/5' },
            purple: { bg: 'bg-purple-500/10', icon: 'text-purple-400', border: 'border-purple-500/20', glow: 'from-purple-500/5' },
            pink: { bg: 'bg-pink-500/10', icon: 'text-pink-400', border: 'border-pink-500/20', glow: 'from-pink-500/5' },
            blue: { bg: 'bg-blue-500/10', icon: 'text-blue-400', border: 'border-blue-500/20', glow: 'from-blue-500/5' },
            amber: { bg: 'bg-amber-500/10', icon: 'text-amber-400', border: 'border-amber-500/20', glow: 'from-amber-500/5' },
        }
        return colors[color] || colors.primary
    }

    return (
        <div className="pt-20 bg-slate-950 overflow-hidden">
            {/* ═══════════════════════════════════════
                 HERO SECTION
            ═══════════════════════════════════════ */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <TechGrid nodeCount={18} className="opacity-30" />
                <ParticleField density={20} color="primary" className="opacity-40" />
                <motion.div
                    className="absolute top-[-150px] left-1/4 w-[700px] h-[700px] bg-primary-900/25 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8">
                                <Sparkles className="w-3 h-3 text-primary-400" />
                                <span className="text-primary-300 text-xs uppercase tracking-[0.2em] font-medium font-display">
                                    Our Services
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight font-display leading-[0.95]">
                                Audience Profiling{' '}
                                <span className="text-gradient-cyan">Redefined</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto mb-12">
                                From boardrooms to football pitches — we profile audiences, players, and stakeholders
                                to deliver precision insights that drive results
                            </p>

                            {/* Industry Toggle */}
                            <div className="inline-flex items-center gap-2 p-1.5 glass-panel-strong rounded-2xl">
                                {industries.map((ind) => (
                                    <motion.button
                                        key={ind.id}
                                        onClick={() => setActiveIndustry(ind.id)}
                                        className={`relative flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 font-display ${activeIndustry === ind.id
                                                ? 'text-white'
                                                : 'text-slate-400 hover:text-slate-200'
                                            }`}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {activeIndustry === ind.id && (
                                            <motion.div
                                                layoutId="industry-tab"
                                                className="absolute inset-0 bg-primary-500/20 border border-primary-500/30 rounded-xl"
                                                style={{ boxShadow: '0 0 20px rgba(20, 184, 166, 0.15)' }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <ind.icon className="w-4 h-4 relative z-10" />
                                        <span className="relative z-10">{ind.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 SERVICES DETAIL
            ═══════════════════════════════════════ */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndustry}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-28"
                        >
                            {services.map((service, index) => {
                                const colorClasses = getColorClasses(service.color)
                                return (
                                    <div
                                        key={service.id}
                                        id={service.id}
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
                                    >
                                        {/* Content */}
                                        <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                            <motion.div
                                                className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} border ${colorClasses.border} rounded-2xl mb-8`}
                                                whileHover={{ rotate: 10, scale: 1.1 }}
                                            >
                                                <service.icon className={`w-8 h-8 ${colorClasses.icon}`} />
                                            </motion.div>
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight font-display">
                                                {service.title}
                                            </h2>
                                            {service.highlight && (
                                                <motion.div
                                                    className={`inline-flex items-center px-5 py-2.5 ${colorClasses.bg} border ${colorClasses.border} rounded-full mb-8`}
                                                    animate={{ borderColor: ['rgba(168,85,247,0.2)', 'rgba(168,85,247,0.5)', 'rgba(168,85,247,0.2)'] }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                >
                                                    <span className={`${colorClasses.icon} text-sm font-semibold tracking-wide font-display`}>
                                                        {service.highlight}
                                                    </span>
                                                </motion.div>
                                            )}
                                            <div className="space-y-5">
                                                {service.description.split('\n\n').map((para, i) => (
                                                    <p key={i} className="text-slate-400 leading-relaxed text-lg font-light">
                                                        {para}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Use Cases Card */}
                                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                            <motion.div
                                                className="glass-panel rounded-3xl p-8 lg:p-10 border border-white/10 relative overflow-hidden group"
                                                whileHover={{ y: -4, borderColor: 'rgba(20, 184, 166, 0.3)' }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                                <div className="relative z-10">
                                                    <h3 className="text-xl font-bold text-white mb-8 flex items-center font-display">
                                                        <FileBarChart className="w-6 h-6 text-primary-400 mr-4" />
                                                        Use cases
                                                    </h3>
                                                    <ul className="space-y-6">
                                                        {service.useCases.map((useCase, i) => (
                                                            <motion.li
                                                                key={i}
                                                                className="flex items-start"
                                                                initial={{ opacity: 0, x: -15 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: i * 0.1 }}
                                                                viewport={{ once: true }}
                                                            >
                                                                <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary-500/20 border border-primary-500/30 mr-4 flex-shrink-0">
                                                                    <div className="w-2.5 h-2.5 rounded-full bg-primary-400" />
                                                                </div>
                                                                <span className="text-slate-300 leading-relaxed font-light text-lg">{useCase}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 INTEGRATED PLATFORM
            ═══════════════════════════════════════ */}
            <section className="py-24 relative">
                <TechGrid nodeCount={8} className="opacity-15" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
                                One platform.{' '}
                                <span className="text-gradient-cyan">Complete understanding.</span>
                            </h2>
                            <p className="text-slate-400 max-w-3xl mx-auto text-lg font-light">
                                Whether you're profiling audiences for policy or players for performance,
                                Mandat provides one consistent, automated platform.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {platformFeatures.map((feature, index) => (
                            <AnimatedSection key={feature.title} delay={index * 120}>
                                <motion.div
                                    className="group glass-panel border border-white/10 rounded-3xl p-8 text-center h-full relative overflow-hidden"
                                    whileHover={{ y: -6, borderColor: 'rgba(20, 184, 166, 0.3)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <motion.div
                                            className="inline-flex items-center justify-center w-14 h-14 bg-primary-500/10 border border-primary-500/20 rounded-2xl mb-6"
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                        >
                                            <feature.icon className="w-7 h-7 text-primary-400" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-display">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400 font-light leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 WHO WE SERVE
            ═══════════════════════════════════════ */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight font-display">
                                Who we serve
                            </h2>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                            {audiences.map((audience, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center p-6 glass-panel border border-white/10 rounded-2xl group"
                                    whileHover={{ y: -3, borderColor: 'rgba(20, 184, 166, 0.3)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                >
                                    <audience.icon className="w-6 h-6 text-primary-400 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-slate-200 text-sm font-medium tracking-wide leading-tight">{audience.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 CTA SECTION
            ═══════════════════════════════════════ */}
            <section className="py-32 relative overflow-hidden">
                <ParticleField density={20} color="primary" className="opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-slate-950" />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/15 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="text-center">
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-display leading-[0.95]">
                                Let's build your{' '}
                                <span className="text-gradient-cyan">intelligence edge</span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
                                Schedule a consultation to discuss how Mandat can transform
                                your understanding of audiences and performance.
                            </p>
                            <motion.button
                                onClick={openModal}
                                className="btn-primary text-lg px-12 py-5 font-display"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Let's chat
                            </motion.button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default Services
