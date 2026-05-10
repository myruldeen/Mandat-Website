import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCounter from '../components/AnimatedCounter'

export default function Home({ openModal }) {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    const stats = [
        { value: 60, suffix: '%', label: 'More effective targeting' },
        { value: 15, suffix: '+', label: 'Organizations served' },
        { value: 82, suffix: '%', label: 'Precision match rate' },
        { value: 3, suffix: 'x', label: 'Faster insights' },
    ]

    const whatsappImages = [
        "/Resource/WhatsApp Image 2026-03-05 at 5.03.31 AM.jpeg",
        "/Resource/WhatsApp Image 2026-03-05 at 5.03.32 AM (1).jpeg",
        "/Resource/WhatsApp Image 2026-03-05 at 5.03.36 AM.jpeg",
        "/Resource/WhatsApp Image 2026-03-05 at 5.03.37 AM (1).jpeg",
        "/Resource/WhatsApp Image 2026-03-05 at 5.04.42 AM.jpeg",
        "/Resource/WhatsApp Image 2026-03-05 at 5.06.08 AM.jpeg",
        "/Resource/WhatsApp Image 2026-03-05 at 5.09.11 AM.jpeg"
    ];

    return (
        <div className="overflow-hidden bg-slate-950">
            {/* ═════════ HERO SECTION ═════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Resource/mandat_background_video.mp4"
                />
                <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                    <div className="p-10 md:p-16 max-w-4xl rounded-3xl">
                        <AnimatedSection>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-[2px] bg-accent-turquoise"></div>
                                <p className="text-primary-300 text-sm md:text-base uppercase tracking-[0.3em] font-medium font-display shadow-sm">
                                    Audience Intelligence
                                </p>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight font-display drop-shadow-md">
                                Know your <span className="text-gradient">audience.</span><br />
                                Influence with precision.
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl drop-shadow">
                                Mandat delivers laser-focused audience profiling. Move beyond guesswork—drive strategic success with granular, actionable intelligence frameworks.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    onClick={openModal}
                                    className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-display font-medium tracking-wide rounded-xl shadow-lg border border-primary-500/50"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book Consultation
                                </motion.button>
                                <motion.a
                                    href="#approach"
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-display font-medium tracking-wide glass-panel rounded-xl shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore Approach
                                </motion.a>
                            </div>
                        </AnimatedSection>
                    </div>
                </motion.div>
            </section>

            {/* ═════════ THE SCIENCE OF AUDIENCE ═════════ */}
            <section id="approach" className="relative min-h-[80vh] flex items-center bg-cover bg-left md:bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_1.jpeg')" }}>
                {/* Minimized opacity overlay for brightness */}
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-l from-slate-950/40 via-transparent to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex justify-start">
                    <div className="max-w-2xl text-left py-24">
                        <AnimatedSection>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 font-display tracking-tighter drop-shadow-sm">
                                The Science of <br /><span className="text-gradient">Audience</span>
                            </h2>
                            <div className="h-[2px] w-32 bg-primary-500 mr-auto mb-8"></div>
                            <p className="text-xl text-white/90 font-light leading-relaxed mb-12 drop-shadow-md">
                                We align raw data with fundamental human behavior. By deeply investigating the demographics and psychographics, we bring unparalleled precision to your targeted messaging.
                            </p>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <AnimatedSection delay={100}>
                                <div className="glass-panel p-8 text-left border border-white/20 rounded-3xl bg-slate-950/30 backdrop-blur-md transition-colors hover:bg-slate-900/40 h-full shadow-xl">
                                    <h3 className="text-2xl font-bold font-display text-white mb-3">Targeting</h3>
                                    <p className="text-white/80 font-light text-sm leading-relaxed">Actionable demographic segments modeled to respond directly to strategic goals.</p>
                                </div>
                            </AnimatedSection>
                            <AnimatedSection delay={200}>
                                <div className="glass-panel p-8 text-left border border-white/20 rounded-3xl bg-slate-950/30 backdrop-blur-md transition-colors hover:bg-slate-900/40 h-full shadow-xl">
                                    <h3 className="text-2xl font-bold font-display text-white mb-3">Profiling</h3>
                                    <p className="text-white/80 font-light text-sm leading-relaxed">Deep psychographic modeling utilizing the internationally validated OCEAN framework.</p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═════════ STATS ═════════ */}
            <section className="relative py-24 bg-gradient-to-b from-transparent to-slate-950">
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-xl z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center glass-panel p-8 rounded-3xl relative overflow-hidden group shadow-lg border-white/10 bg-slate-950/20 backdrop-blur-md">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/10 to-accent-turquoise/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="text-5xl md:text-6xl font-bold font-display text-white mb-3 relative z-10 flex items-center justify-center drop-shadow-md">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-white/80 text-xs font-semibold uppercase tracking-[0.15em] relative z-10">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═════════ CORE COMPETENCIES ═════════ */}
            <section className="relative min-h-[80vh] flex items-center bg-cover bg-center bg-fixed py-24" style={{ backgroundImage: "url('/Resource/background_image_3.jpeg')" }}>
                {/* Minimized opacity for brightness */}
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/40" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <AnimatedSection>
                        <div className="mb-16">
                            <span className="text-primary-400 text-xs uppercase tracking-[0.3em] font-medium mb-4 block drop-shadow-sm">Solutions</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
                                Core<br />Competencies
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-transparent"></div>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                        {['Demographic Profiling', 'Psychographic Profiling', 'Sentiment Analysis'].map((title, idx) => (
                            <AnimatedSection delay={idx * 150} key={title} className="h-full">
                                <div className="glass-panel text-left p-10 h-full flex flex-col justify-end min-h-[300px] border border-white/20 rounded-3xl relative group overflow-hidden bg-slate-950/30 backdrop-blur-md hover:bg-slate-900/50 transition-all duration-300 shadow-2xl">
                                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/40 transition-all duration-700"></div>
                                    <h3 className="text-3xl font-bold font-display text-white mb-6 leading-tight relative z-10 drop-shadow-md">{title}</h3>
                                    <div className="h-[2px] w-12 bg-white/40 group-hover:w-full transition-all duration-500 relative z-10"></div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═════════ THE MANDAT ADVANTAGE ═════════ */}
            <section className="relative py-32 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_4.jpeg')" }}>
                {/* Minimized opacity for brightness */}
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <AnimatedSection>
                            <div className="sticky top-32 lg:pr-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[2px] bg-primary-400"></div>
                                    <p className="text-primary-400 tracking-[0.2em] text-sm font-semibold uppercase shadow-sm">Why Choose Us</p>
                                </div>
                                <h2 className="text-5xl sm:text-6xl font-bold font-display text-white leading-[1.05] mb-8 drop-shadow-lg">
                                    The Mandat<br /><span className="text-gradient">Advantage</span>
                                </h2>
                                <p className="text-xl text-white/90 font-light max-w-md leading-relaxed drop-shadow-md">
                                    Deep local context combined with highly automated, scalable profiling technology. We offer research-backed mechanisms applied directly to strategic executions.
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-6">
                            {[
                                { t: 'Research-Backed', d: 'Methodologies proven in academic research and applied to real-world strategy construction.' },
                                { t: 'Local Context', d: 'Deep understanding of local cultural nuances and socio-economic dynamics across markets.' },
                                { t: 'Automated & Scalable', d: 'Technology-driven approach that grows seamlessly with your organizational needs over time.' },
                                { t: 'Outcome-Focused', d: 'Every insight ties directly to an actionable strategy and tangible, measurable outcome.' }
                            ].map((item, idx) => (
                                <AnimatedSection delay={idx * 100} key={item.t}>
                                    <div className="glass-panel p-8 md:p-10 relative border border-white/20 rounded-3xl bg-slate-950/30 backdrop-blur-md hover:bg-slate-900/40 transition-colors shadow-lg">
                                        <h4 className="text-2xl font-bold font-display text-white mb-3 drop-shadow-md">{item.t}</h4>
                                        <p className="text-white/80 font-light leading-relaxed">{item.d}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═════════ MANDAT WORK SHOWCASE ═════════ */}
            <section className="relative py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tighter drop-shadow-lg">
                                Mandat in <span className="text-gradient">Action</span>
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto font-light text-lg">
                                Witness our strategic processes, boardroom consulting, and targeted collaborations unfolding in real environments.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Standard masonry rounded grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 auto-rows-[250px]">
                        {whatsappImages.map((src, idx) => {
                            const isLarge = idx === 0 || idx === 3;
                            return (
                                <AnimatedSection delay={idx * 50} className={`relative group ${isLarge ? 'md:col-span-2 row-span-2' : ''}`} key={idx}>
                                    <div className="w-full h-full rounded-3xl overflow-hidden glass-panel relative shadow-xl border border-white/10">
                                        <img
                                            src={src}
                                            alt={`Mandat Field Work ${idx + 1}`}
                                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═════════ FINAL CTA ═════════ */}
            <section className="py-32 relative bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="rounded-3xl p-12 md:p-16 bg-slate-950 border border-white/10 shadow-2xl glass-panel relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-turquoise/10" />
                            <div className="relative z-10">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display">
                                    Ready to master your data?
                                </h2>
                                <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                                    Schedule a direct consultation to discover how Mandat's audience intelligence
                                    can transform your decisions instantly.
                                </p>
                                <button
                                    onClick={openModal}
                                    className="px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-display font-medium tracking-wide text-lg rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Discuss Your Project
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
