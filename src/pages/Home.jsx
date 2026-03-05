import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
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
    ArrowRight,
    TrendingUp,
    Shield,
    Activity,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import AnimatedCounter from '../components/AnimatedCounter'
import TechGrid from '../components/TechGrid'
import ServiceCard from '../components/ServiceCard'

function Home({ openModal }) {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    const stats = [
        { value: 670, suffix: '%', label: 'More effective targeting' },
        { value: 50, suffix: '+', label: 'Organizations served' },
        { value: 94, suffix: '%', label: 'Precision match rate' },
        { value: 3, suffix: 'x', label: 'Faster audience insights' },
    ]

    const benefits = [
        {
            icon: Users,
            title: 'Deep Audience Insights',
            description: 'Uncover who your audiences really are through advanced demographic and psychographic profiling',
            size: 'large',
        },
        {
            icon: Lightbulb,
            title: 'Actionable Intelligence',
            description: 'Transform complex data into clear, strategic recommendations that drive decisions',
            size: 'small',
        },
        {
            icon: Zap,
            title: 'Dynamic Profiling',
            description: 'Live, evolving insights that update automatically to reflect real-world sentiment shifts',
            size: 'small',
        },
        {
            icon: Shield,
            title: 'Research-Backed Methods',
            description: 'Built on the OCEAN personality framework — the most scientifically validated model in psychology',
            size: 'medium',
        },
    ]

    const services = [
        {
            icon: Users,
            title: 'Demographic Profiling',
            description: 'Segment and understand your audience across age, location, education, occupation, and more',
            link: '/services#demographic',
        },
        {
            icon: Brain,
            title: 'Psychographic Profiling',
            description: 'Discover WHY people behave the way they do using advanced OCEAN personality analysis',
            link: '/services#psychographic',
        },
        {
            icon: MessageSquare,
            title: 'Sentiment Analysis',
            description: 'Measure how audiences respond to your messages and programs in real-time',
            link: '/services#sentiment',
        },
    ]

    const differentiators = [
        { icon: BarChart3, title: 'Research-Backed', description: 'Methodologies proven in academic research and applied to real-world strategy' },
        { icon: Globe, title: 'Local Context', description: 'Deep understanding of local cultural nuances and socio-economic dynamics' },
        { icon: Cpu, title: 'Automated & Scalable', description: 'Technology-driven approach that grows seamlessly with your organizational needs' },
        { icon: Target, title: 'Outcome-Focused', description: 'Every insight ties directly to an actionable strategy and tangible outcome' },
    ]

    return (
        <div className="overflow-hidden bg-slate-950">
            {/* ═══════════════════════════════════════
                 HERO SECTION
            ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Animated Background Layers */}
                <ParticleField density={40} color="primary" />
                <TechGrid nodeCount={15} className="opacity-40" />
                {/* Large gradient orbs */}
                <motion.div
                    className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-primary-900/30 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[-100px] left-[-150px] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <AnimatedSection>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8">
                                    <motion.span
                                        className="w-2 h-2 rounded-full bg-primary-400"
                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <p className="text-primary-300 text-xs uppercase tracking-[0.2em] font-medium font-display">
                                        Audience Intelligence Platform
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={100}>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.95] tracking-tight font-display">
                                    Know your{' '}
                                    <span className="text-gradient-cyan">audience.</span>
                                    <br />
                                    Shape your{' '}
                                    <span className="relative">
                                        future.
                                        <motion.span
                                            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-400 to-accent-blue rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                                        />
                                    </span>
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection delay={200}>
                                <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-light">
                                    Mandat delivers laser-focused audience profiling and data analytics.
                                    Move beyond guesswork — drive success with granular, actionable intelligence.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={300}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.button
                                        onClick={openModal}
                                        className="btn-primary text-base px-8 py-4 font-display"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Book a Consultation
                                    </motion.button>
                                    <motion.a
                                        href="#approach"
                                        className="btn-secondary text-base px-8 py-4 text-center font-display"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Explore Our Approach
                                    </motion.a>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Hero Visual — Parallax Image Stack */}
                        <AnimatedSection delay={200} className="relative">
                            <div className="relative w-full max-w-lg mx-auto aspect-square">
                                {/* Glowing background */}
                                <motion.div
                                    className="absolute inset-0 bg-primary-500/15 blur-[80px] rounded-full"
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                />

                                {/* Main Image — YADIM Boardroom */}
                                <motion.div
                                    className="absolute top-0 right-0 w-[82%] h-[75%] rounded-2xl overflow-hidden border border-white/10 z-10"
                                    initial={{ x: 60, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    whileHover={{ scale: 1.03, rotateY: -3 }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent z-10" />
                                    <img
                                        src="/Resource/WhatsApp Image 2026-03-05 at 5.03.37 AM (1).jpeg"
                                        alt="Corporate Strategy Session"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Secondary Image — Data Analysis */}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border border-white/10 z-20"
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    whileHover={{ scale: 1.05, rotateY: 3 }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className="absolute inset-0 bg-slate-950/30 z-10" />
                                    <img
                                        src="/Resource/WhatsApp Image 2026-03-05 at 5.03.37 AM.jpeg"
                                        alt="Data Analytics"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Floating stat badge */}
                                <motion.div
                                    className="absolute top-[60%] left-[-10%] z-30 glass-panel-strong py-3 px-5 rounded-xl"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
                                            <Target className="text-primary-400 w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-white text-xs font-medium font-display">Precision Match</p>
                                            <p className="text-primary-400 text-lg font-bold font-display">94%</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating trend badge */}
                                <motion.div
                                    className="absolute top-[5%] left-[-5%] z-30 glass-panel-strong py-2 px-4 rounded-lg"
                                    animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="text-green-400 w-4 h-4" />
                                        <span className="text-green-400 text-sm font-bold font-display">+670%</span>
                                    </div>
                                </motion.div>

                                {/* Animated ring */}
                                <motion.div
                                    className="absolute top-[40%] right-[-8%] w-16 h-16 rounded-full border-2 border-primary-500/20 z-0"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </motion.div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-20" />
            </section>

            {/* ═══════════════════════════════════════
                 ANIMATED STATS BAR
            ═══════════════════════════════════════ */}
            <section className="relative border-y border-white/5 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <AnimatedSection>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-4xl sm:text-5xl font-bold font-display text-white mb-2">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 BENTO GRID — VALUE PROPOSITION
            ═══════════════════════════════════════ */}
            <section id="approach" className="section-padding relative">
                <TechGrid nodeCount={10} className="opacity-20" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight">
                                The Science of{' '}
                                <span className="text-gradient-cyan">Audience</span>
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                                We align data with human behavior. By asking the right questions, we bring
                                unparalleled precision to your messaging and targeting strategies.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={benefit.title} delay={index * 120}>
                                <motion.div
                                    className={`group relative glass-panel rounded-3xl p-8 border border-white/10 overflow-hidden cursor-default
                                        ${benefit.size === 'large' ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
                                        ${benefit.size === 'medium' ? 'md:col-span-2 lg:col-span-2' : ''}
                                    `}
                                    whileHover={{ y: -4, borderColor: 'rgba(20, 184, 166, 0.3)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <motion.div
                                            className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-6 border border-primary-500/20"
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                        >
                                            <benefit.icon className="w-7 h-7 text-primary-400" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-white mb-4 font-display">{benefit.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-light">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 CASE STUDY / PROOF SECTION
            ═══════════════════════════════════════ */}
            <section className="section-padding bg-slate-900/50 relative border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <AnimatedSection>
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8">
                                    <Activity className="w-3 h-3 text-primary-400" />
                                    <span className="text-primary-400 text-xs uppercase tracking-[0.2em] font-medium font-display">
                                        Proven Impact
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-display tracking-tight">
                                    See your audience in{' '}
                                    <span className="italic font-light text-slate-300">high definition</span>
                                </h2>
                                <p className="text-slate-400 mb-8 leading-relaxed text-lg font-light">
                                    Building campaigns on assumptions wastes resources. Our granular profiling
                                    provides a nuanced view of your consumers—getting straight to the crux of
                                    who they are and how to win them over.
                                </p>
                                <ul className="space-y-5 mb-10">
                                    {[
                                        'Eliminate guesswork from strategic planning',
                                        'Optimize ad spend with precise targeting parameters',
                                        'Understand behavioral drivers, not just demographics',
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.15 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center border border-primary-500/30 flex-shrink-0">
                                                <div className="w-2 h-2 rounded-full bg-primary-400" />
                                            </div>
                                            <span className="text-slate-300 font-light">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors group font-display"
                                >
                                    Learn more about our methodology
                                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Parallax Image Grid */}
                        <AnimatedSection delay={200}>
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    className="rounded-2xl overflow-hidden border border-white/10"
                                    whileHover={{ scale: 1.03, rotateZ: -1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src="/Resource/WhatsApp Image 2026-03-05 at 5.03.36 AM.jpeg"
                                        alt="Client Presentation"
                                        className="object-cover h-64 w-full brightness-90 hover:brightness-110 transition-all duration-500"
                                    />
                                </motion.div>
                                <motion.div
                                    className="rounded-2xl overflow-hidden border border-white/10 mt-8"
                                    whileHover={{ scale: 1.03, rotateZ: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src="/Resource/WhatsApp Image 2026-03-05 at 5.03.31 AM.jpeg"
                                        alt="Strategy Meeting"
                                        className="object-cover h-64 w-full brightness-90 hover:brightness-110 transition-all duration-500"
                                    />
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 SERVICES OVERVIEW
            ═══════════════════════════════════════ */}
            <section className="section-padding relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div className="max-w-xl">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display tracking-tight">
                                    Core Competencies
                                </h2>
                                <p className="text-slate-400 text-lg font-light">
                                    Comprehensive analytics solutions designing to unlock deeper, actionable understanding of your audience.
                                </p>
                            </div>
                            <Link to="/services" className="btn-secondary whitespace-nowrap hidden md:inline-flex items-center font-display">
                                View all services <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.title} delay={index * 150}>
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    to={service.link}
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 THE MANDAT ADVANTAGE
            ═══════════════════════════════════════ */}
            <section className="pb-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
                        whileInView={{ borderColor: 'rgba(20, 184, 166, 0.15)' }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Subtle background gradient */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />

                        <AnimatedSection>
                            <div className="text-center mb-12 relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display tracking-tight">
                                    The Mandat Advantage
                                </h2>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
                            {differentiators.map((item, index) => (
                                <AnimatedSection key={item.title} delay={index * 100}>
                                    <motion.div
                                        className="text-center sm:text-left relative"
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {index < differentiators.length - 1 && (
                                            <div className="hidden lg:block absolute top-6 w-full left-14 h-px bg-gradient-to-r from-primary-500/20 to-transparent" />
                                        )}
                                        <motion.div
                                            className="inline-flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl mb-6 relative z-10"
                                            whileHover={{ rotate: 5, borderColor: 'rgba(20, 184, 166, 0.4)' }}
                                        >
                                            <item.icon className="w-5 h-5 text-primary-400" />
                                        </motion.div>
                                        <h3 className="text-lg font-bold text-white mb-3 font-display">{item.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed font-light">{item.description}</p>
                                    </motion.div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 CTA SECTION
            ═══════════════════════════════════════ */}
            <section className="py-32 relative overflow-hidden">
                <ParticleField density={25} color="blue" className="opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-slate-950 z-0" />
                <motion.div
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-500/15 rounded-full blur-[120px]"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-display leading-[0.95]">
                            Ready to master your{' '}
                            <br className="hidden sm:block" />
                            <span className="text-gradient-cyan">audience data?</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
                            Schedule a consultation to discover how Mandat's data intelligence
                            can transform your campaigns and strategic decisions.
                        </p>
                        <motion.button
                            onClick={openModal}
                            className="btn-primary text-lg px-12 py-5 w-full sm:w-auto font-display"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Discuss Your Project
                        </motion.button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default Home
