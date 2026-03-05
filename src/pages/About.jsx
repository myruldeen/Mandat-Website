import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Eye,
    Target,
    Users,
    BarChart3,
    ArrowRight,
    Award,
    Sparkles,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import TechGrid from '../components/TechGrid'
import AnimatedCounter from '../components/AnimatedCounter'

function About({ openModal }) {
    const values = [
        {
            icon: Eye,
            title: 'Our Vision',
            description: 'To become a trusted data intelligence partner in Malaysia that enables organizations to truly understand their audiences and make confident, evidence-based decisions.',
            gradient: 'from-primary-500/10 to-blue-500/5',
        },
        {
            icon: Target,
            title: 'Our Mission',
            description: 'To democratize audience analytics — making advanced profiling tools accessible, automated, and actionable for organizations of every scale and sector.',
            gradient: 'from-blue-500/10 to-indigo-500/5',
        },
    ]

    const team = [
        {
            name: 'Afiq Akmal',
            role: 'Co-Founder & Lead Data Scientist',
            description: 'Highly technical founder specializing in data-driven strategies. Expert in predictive modelling for player performance analysis and advanced audience psychographic profiling.',
        },
        {
            name: 'Zaki Hamidi',
            role: 'Co-Founder & Managing Director',
            description: 'Strategic lead and business development expert. Brings extensive experience with government agencies and policy creation, grounded in a deep understanding of grassroots issues.',
        },
    ]

    const milestones = [
        { number: 50, suffix: '+', label: 'Organizations' },
        { number: 10, suffix: '+', label: 'Industries' },
        { number: 5, suffix: '+', label: 'Years Experience' },
    ]

    return (
        <div className="pt-20 bg-slate-950 overflow-hidden">
            {/* ═══════════════════════════════════════
                 HERO SECTION
            ═══════════════════════════════════════ */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <ParticleField density={25} color="blue" className="opacity-50" />
                <motion.div
                    className="absolute top-[-100px] left-1/4 w-[600px] h-[600px] bg-primary-900/25 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8">
                                <Sparkles className="w-3 h-3 text-primary-400" />
                                <span className="text-primary-300 text-xs uppercase tracking-[0.2em] font-medium font-display">
                                    About Mandat
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[0.95] tracking-tight font-display">
                                We turn data into{' '}
                                <span className="text-gradient-cyan">strategic advantage</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light max-w-xl">
                                Mandat is a boutique data consulting firm specializing in audience profiling,
                                psychographic analysis, and sentiment measurement for organizations across Malaysia.
                            </p>
                        </AnimatedSection>

                        {/* Hero Image — Conference Speaking */}
                        <AnimatedSection delay={200}>
                            <motion.div
                                className="relative rounded-3xl overflow-hidden border border-white/10"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />
                                <img
                                    src="/Resource/WhatsApp Image 2026-03-05 at 5.03.36 AM (1).jpeg"
                                    alt="Mandat presenting at conference"
                                    className="w-full h-80 lg:h-[400px] object-cover"
                                />
                                {/* Floating badge */}
                                <motion.div
                                    className="absolute bottom-6 left-6 z-20 glass-panel-strong py-3 px-5 rounded-xl"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <div className="flex items-center gap-3">
                                        <Award className="text-primary-400 w-5 h-5" />
                                        <span className="text-white text-sm font-medium font-display">Thought Leadership</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 VISION & MISSION
            ═══════════════════════════════════════ */}
            <section className="py-24 relative">
                <TechGrid nodeCount={8} className="opacity-20" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((item, index) => (
                            <AnimatedSection key={item.title} delay={index * 150}>
                                <motion.div
                                    className="group glass-panel rounded-3xl p-10 border border-white/10 h-full relative overflow-hidden"
                                    whileHover={{ y: -6, borderColor: 'rgba(20, 184, 166, 0.3)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="relative z-10">
                                        <motion.div
                                            className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-8 border border-primary-500/20"
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                        >
                                            <item.icon className="w-8 h-8 text-primary-400" />
                                        </motion.div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 font-display tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed text-lg font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 STATS + PHOTO SHOWCASE
            ═══════════════════════════════════════ */}
            <section className="py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Stats Row */}
                    <AnimatedSection>
                        <div className="grid grid-cols-3 gap-8 mb-20">
                            {milestones.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-2">
                                        <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Photo Showcase — 3 column masonry */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <AnimatedSection delay={0}>
                            <motion.div
                                className="rounded-2xl overflow-hidden border border-white/10 h-72"
                                whileHover={{ scale: 1.03, rotateZ: -1 }}
                            >
                                <img
                                    src="/Resource/WhatsApp Image 2026-03-05 at 5.03.32 AM (1).jpeg"
                                    alt="GIFA Event with VIP"
                                    className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-500"
                                />
                            </motion.div>
                        </AnimatedSection>
                        <AnimatedSection delay={150}>
                            <motion.div
                                className="rounded-2xl overflow-hidden border border-white/10 h-72 md:mt-8"
                                whileHover={{ scale: 1.03, rotateZ: 1 }}
                            >
                                <img
                                    src="/Resource/WhatsApp Image 2026-03-05 at 5.09.11 AM.jpeg"
                                    alt="VIP Office Meeting"
                                    className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-500"
                                />
                            </motion.div>
                        </AnimatedSection>
                        <AnimatedSection delay={300}>
                            <motion.div
                                className="rounded-2xl overflow-hidden border border-white/10 h-72"
                                whileHover={{ scale: 1.03, rotateZ: -1 }}
                            >
                                <img
                                    src="/Resource/WhatsApp Image 2026-03-05 at 5.04.42 AM.jpeg"
                                    alt="Boardroom Presentation"
                                    className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-500"
                                />
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 TEAM SECTION
            ═══════════════════════════════════════ */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display tracking-tight">
                                Meet the <span className="text-gradient-cyan">founders</span>
                            </h2>
                            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                                A team deeply passionate about leveraging data science to create measurable impact.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <AnimatedSection key={member.name} delay={index * 150}>
                                <motion.div
                                    className="group glass-panel rounded-3xl p-10 border border-white/10 relative overflow-hidden h-full flex flex-col"
                                    whileHover={{ y: -8, borderColor: 'rgba(20, 184, 166, 0.4)' }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Hover Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="relative z-10 flex-grow flex flex-col">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-primary-500/30 group-hover:scale-110 transition-transform duration-500">
                                                <Users className="w-8 h-8 text-primary-400" />
                                            </div>
                                            {/* Decorative element */}
                                            <div className="h-px w-12 bg-gradient-to-r from-primary-500/50 to-transparent" />
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-2 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-200 transition-all duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="text-primary-400 font-semibold text-sm mb-6 font-display tracking-widest uppercase">
                                            {member.role}
                                        </p>
                                        <div className="h-px w-full bg-white/5 mb-6" />
                                        <p className="text-slate-300 leading-relaxed font-light text-lg">
                                            {member.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
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

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight font-display">
                            Let's build something{' '}
                            <span className="text-gradient-cyan">extraordinary</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
                            Whether you're exploring audience analytics for the first time or looking to
                            scale your existing capabilities, we're ready to partner with you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/services"
                                className="btn-secondary text-lg px-10 py-4 inline-flex items-center justify-center font-display"
                            >
                                Explore Services
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <motion.button
                                onClick={openModal}
                                className="btn-primary text-lg px-10 py-4 font-display"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Book a demo
                            </motion.button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default About
