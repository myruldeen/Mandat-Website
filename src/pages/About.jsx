import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import TechGrid from '../components/TechGrid'
import AnimatedCounter from '../components/AnimatedCounter'

function About({ openModal }) {
    const values = [
        {
            title: 'Our Vision',
            description: 'To become a trusted data intelligence partner in Malaysia that enables organizations to truly understand their audiences and make confident, evidence-based decisions.',
            gradient: 'from-primary-500/10 to-blue-500/5',
        },
        {
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
            img: '/Resource/founder_afiq_1778417247635.png'
        },
        {
            name: 'Zaki Hamidi',
            role: 'Co-Founder & Managing Director',
            description: 'Strategic lead and business development expert. Brings extensive experience with government agencies and policy creation, grounded in a deep understanding of grassroots issues.',
            img: '/Resource/founder_zaki_1778417494519.png'
        },
    ]

    const milestones = [
        { number: 15, suffix: '+', label: 'Organizations' },
        { number: 10, suffix: '+', label: 'Industries' },
        { number: 5, suffix: '+', label: 'Years Experience' },
    ]

    return (
        <div className="pt-20 bg-slate-950 overflow-hidden">
            {/* ═══════════════════════════════════════
                 HERO SECTION
            ═══════════════════════════════════════ */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_5.jpeg')" }}>
                {/* Minimized dark overlay */}
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-0" />

                <ParticleField density={25} color="primary" className="opacity-40 z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center gap-16 mt-10">
                    <AnimatedSection className="w-full max-w-4xl text-center">
                        <div className="p-10 lg:p-14 rounded-3xl">
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 mb-8">
                                <span className="text-primary-300 text-xs uppercase tracking-[0.2em] font-medium font-display">
                                    About Mandat
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[0.95] tracking-tight font-display drop-shadow-md">
                                We turn data into{' '}
                                <span className="text-gradient">strategic advantage</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light drop-shadow mx-auto max-w-2xl">
                                Mandat is a boutique data consulting firm specializing in audience profiling,
                                psychographic analysis, and sentiment measurement for organizations across Malaysia.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 VISION & MISSION
            ═══════════════════════════════════════ */}
            <section className="py-24 relative bg-slate-950">
                <TechGrid nodeCount={8} className="opacity-20 flex" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((item, index) => (
                            <AnimatedSection key={item.title} delay={index * 150}>
                                <motion.div
                                    className="group glass-panel rounded-3xl p-10 md:p-14 border border-white/20 bg-slate-950/40 backdrop-blur-md h-full relative overflow-hidden"
                                    whileHover={{ y: -6, borderColor: 'rgba(20, 184, 166, 0.4)' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10">
                                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-display tracking-tight drop-shadow-md">
                                            {item.title}
                                        </h3>
                                        <div className="h-1 w-16 bg-primary-500 mb-8 rounded-full"></div>
                                        <p className="text-white/80 leading-relaxed text-lg font-light drop-shadow-sm">
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
                 STATS SHOWCASE
            ═══════════════════════════════════════ */}
            <section className="py-32 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_3.jpeg')" }}>
                {/* Minimized opacity on overlay */}
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Stats Row */}
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 glass-panel p-12 rounded-3xl border border-white/20 bg-slate-950/40 backdrop-blur-lg shadow-2xl">
                            {milestones.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-5xl sm:text-6xl font-bold font-display text-white mb-4 drop-shadow-lg text-gradient">
                                        <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-white/90 text-sm font-bold font-display uppercase tracking-[0.2em]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 TEAM SECTION
            ═══════════════════════════════════════ */}
            <section className="py-32 relative bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-24 max-w-3xl mx-auto glass-panel p-12 rounded-3xl border border-white/10 bg-slate-950/20 shadow-lg">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display tracking-tight drop-shadow-md">
                                Meet the <span className="text-gradient">founders</span>
                            </h2>
                            <p className="text-white/80 text-lg font-light drop-shadow-sm">
                                A team deeply passionate about leveraging data science to create measurable impact.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <AnimatedSection key={member.name} delay={index * 150} className="h-full">
                                <motion.div
                                    className="group glass-panel rounded-3xl p-10 md:p-14 border border-white/20 relative overflow-hidden h-full flex flex-col bg-slate-950/40 backdrop-blur-md shadow-2xl"
                                    whileHover={{ y: -6, borderColor: 'rgba(20, 184, 166, 0.5)' }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="relative z-10 flex-grow flex flex-col items-center text-center">
                                        <div className="w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                                            <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <h3 className="text-4xl font-bold text-white mb-3 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-200 transition-all duration-300 drop-shadow-md">
                                            {member.name}
                                        </h3>
                                        <p className="text-primary-400 font-bold text-sm mb-8 font-display tracking-[0.2em] uppercase">
                                            {member.role}
                                        </p>
                                        <div className="h-[2px] w-12 bg-white/30 mb-8 group-hover:w-full transition-all duration-500" />
                                        <p className="text-white/80 leading-relaxed font-light text-lg">
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
            <section className="py-32 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_4.jpeg')" }}>
                {/* Minimized darkness */}
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/50 z-0" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="glass-panel p-12 md:p-16 rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-white/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-display leading-[0.95] drop-shadow-lg">
                                Let's build something{' '}
                                <span className="text-gradient">extraordinary</span>
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light drop-shadow">
                                Whether you're exploring audience analytics for the first time or looking to
                                scale your existing capabilities, we're ready to partner with you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/services"
                                    className="px-8 py-5 border border-white/40 hover:border-white text-white font-display font-medium tracking-wide text-lg rounded-2xl transition-all duration-300"
                                >
                                    Explore Services
                                </Link>
                                <motion.button
                                    onClick={openModal}
                                    className="px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-display font-medium tracking-wide text-lg rounded-2xl shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-300 transform hover:-translate-y-1"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Book a demo
                                </motion.button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default About
