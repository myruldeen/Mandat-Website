import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import TechGrid from '../components/TechGrid'

export default function Services({ openModal }) {
    const [activeIndustry, setActiveIndustry] = useState('organization')

    const industries = [
        { id: 'organization', label: 'Organization' },
        { id: 'football', label: 'Football' },
    ]

    const organizationServices = [
        {
            id: 'module-01',
            title: 'Psychological Profiling — OCEAN Model',
            description: `Understand the fundamental behavior drivers of your audience using the five-trait psychological framework. By mapping Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism, we build a multi-dimensional view of how voters process information and make decisions.\n\nOur data sources integrate structured psychometric surveys with public social media signals (Facebook, X, TikTok interaction patterns) to create dynamic, real-time voter profiles.`,
            useCases: [
                'Openness: Receptive to new ideas and reform messaging',
                'Conscientiousness: Responds to structure and track-record',
                'Extraversion: Motivated by community events and social validation',
                'Agreeableness: Aligned with unity narratives and endorsements',
                'Neuroticism: Driven by security, stability, and fear-of-loss framing',
            ],
            highlight: 'Data Sources: Structured Survey & Social Media Signals',
            color: 'primary',
        },
        {
            id: 'module-02',
            title: 'Narrative Intelligence',
            description: `Move beyond data points to active campaign decisions. Our Narrative Intelligence system tracks every emerging narrative risk—from opposition moves to viral local issues—across social media, WhatsApp, and ground reports.\n\nEach narrative is assigned a Daily Risk Score, allowing for rapid attribution to geographic clusters and voter segments, ensuring your response is both fast and targeted.`,
            useCases: [
                'Detection: Track emerging risks across all digital and ground channels',
                'Scoring: Daily Narrative Risk Scores with automated high-risk alerts',
                'Attribution: Map narratives to geographic and OCEAN segments',
                'Response: Prescribe counter-narratives or amplification within 24 hours',
            ],
            highlight: 'Every score triggers a campaign decision',
            color: 'cyan',
        },
        {
            id: 'module-03',
            title: 'Persuasion Strategy',
            description: `Apply the science of influence directly to your audience segments. We utilize the Cialdini Framework—Reciprocity, Commitment, Social Proof, Authority, Liking, and Scarcity—to design campaign content that resonates with specific psychological profiles.\n\nThrough our continuous iteration loop, we ensure that campaign messaging remains effective by measuring engagement and revising weekly prescriptions based on scoring shifts.`,
            useCases: [
                'Voter profiles delivered → OCEAN segments mapped',
                'Active narratives scored → Cialdini lever assigned',
                'Campaign content prescribed per segment',
                'Content deployed → engagement measured',
                'Scores updated → prescriptions revised weekly',
            ],
            highlight: 'Continuous Iteration Loop',
            color: 'purple',
        },
    ]

    const footballServices = [
        {
            id: 'player-profiling',
            title: 'Player Profiling & Recruitment Model',
            description: `Our advanced player profiling system combines statistical performance data with predictive modelling to identify optimal recruitment targets. We build custom models that match your club's tactical philosophy with player characteristics.\n\nUsing multi-dimensional analysis across physical, technical, and tactical metrics, we provide a data-backed shortlist that reduces recruitment risk and maximizes ROI.`,
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
            title: 'Team Performance Analysis',
            description: `Comprehensive analysis of team performance metrics across tactical, physical, and technical dimensions. Our proprietary index system breaks down complex match data into actionable insights for coaching staff.\n\nWe provide pre-match tactical briefings, post-match analysis reports, and longitudinal performance tracking to drive continuous improvement.`,
            useCases: [
                'Tactical pattern recognition',
                'Opposition analysis and briefings',
                'In-season performance tracking',
                'Set-piece effectiveness analysis',
            ],
            highlight: 'Proprietary TAP Index System',
            color: 'cyan',
        },
        {
            id: 'coach-scouting',
            title: 'Coach Scouting',
            description: `Identify and evaluate coaching talent using data-driven methodologies. We profile coaches based on their tactical tendencies, squad development track record, results under pressure, and cultural fit with your organization.\n\nOur coaching analytics go beyond win/loss records to evaluate the deeper metrics that predict long-term success and alignment with your club's vision.`,
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
        { title: 'Dynamic Profiling', description: 'Insights that update automatically as new data arrives' },
        { title: 'Multi-dimensional View', description: 'Demographic + Psychographic + Performance in one place' },
        { title: 'Actionable Outputs', description: 'Clear recommendations, not just data dumps' },
        { title: 'Scalable Infrastructure', description: 'From pilot projects to organization-wide deployment' },
    ]

    const audiences = [
        { label: 'Government agencies and statutory bodies' },
        { label: 'Non-profit organizations and foundations' },
        { label: 'Universities and educational institutions' },
        { label: 'Football clubs and sporting organizations' },
        { label: 'Political and social campaigns' },
    ]

    const getColorClasses = (color) => {
        const colors = {
            primary: { border: 'border-primary-500/50', accent: 'bg-primary-500/20' },
            purple: { border: 'border-purple-500/50', accent: 'bg-purple-500/20' },
            cyan: { border: 'border-cyan-500/50', accent: 'bg-cyan-500/20' },
            amber: { border: 'border-amber-500/50', accent: 'bg-amber-500/20' },
        }
        return colors[color] || colors.primary
    }

    return (
        <div className="pt-20 bg-slate-950 overflow-hidden">
            {/* ═══════════════════════════════════════
                 HERO SECTION
            ═══════════════════════════════════════ */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_1.jpeg')" }}>
                {/* Minimized background dark overlay */}
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-0" />

                <TechGrid nodeCount={12} className="opacity-20 z-0" />
                <ParticleField density={20} color="primary" className="opacity-30 z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto p-12 rounded-3xl">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-display leading-[0.95] drop-shadow-md">
                                Audience Profiling{' '}
                                <span className="text-gradient">Redefined</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto mb-12 drop-shadow">
                                From boardrooms to football pitches — we profile audiences, players, and stakeholders
                                to deliver precision insights that drive results
                            </p>

                            {/* Industry Toggle */}
                            <div className="inline-flex items-center gap-2 p-1.5 bg-slate-950/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner">
                                {industries.map((ind) => (
                                    <motion.button
                                        key={ind.id}
                                        onClick={() => setActiveIndustry(ind.id)}
                                        className={`relative flex items-center gap-2.5 px-10 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 font-display ${activeIndustry === ind.id
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-slate-200'
                                            }`}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        {activeIndustry === ind.id && (
                                            <motion.div
                                                layoutId="industry-tab"
                                                className="absolute inset-0 bg-primary-500/30 border border-primary-500/40 rounded-xl"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
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
            <section
                className="py-24 border-y border-white/5 relative bg-cover bg-center bg-fixed transition-all duration-700"
                style={{
                    backgroundImage: activeIndustry === 'football'
                        ? "url('/Resource/background_image_5.jpeg')"
                        : "url('/Resource/background_image_6.jpeg')"
                }}
            >
                {/* Minimized dark overlay */}
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-transparent to-transparent z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndustry}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-20 max-w-4xl"
                        >
                            {services.map((service, index) => {
                                const colorClasses = getColorClasses(service.color)
                                return (
                                    <div
                                        key={service.id}
                                        id={service.id}
                                        className={`glass-panel p-10 md:p-14 rounded-3xl border ${colorClasses.border} bg-slate-950/40 backdrop-blur-md shadow-2xl relative overflow-hidden`}
                                    >
                                        <div className={`absolute top-0 right-0 w-64 h-64 ${colorClasses.accent} blur-3xl rounded-full opacity-30`}></div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight font-display drop-shadow-md">
                                                {service.title}
                                            </h2>
                                            {service.highlight && (
                                                <div className="inline-flex items-center px-6 py-2 bg-slate-950/50 border border-white/20 rounded-full mb-8">
                                                    <span className="text-white/90 text-xs font-semibold uppercase tracking-wider font-display">
                                                        {service.highlight}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="space-y-4 mb-10">
                                                {service.description.split('\n\n').map((para, i) => (
                                                    <p key={i} className="text-white/80 leading-relaxed text-lg font-light drop-shadow-sm">
                                                        {para}
                                                    </p>
                                                ))}
                                            </div>

                                            <div className="pt-8 border-t border-white/10">
                                                <h3 className="text-xl font-bold text-white mb-6 font-display">Core Outcomes</h3>
                                                <ul className="space-y-4">
                                                    {service.useCases.map((useCase, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <div className="mt-2 w-10 h-[1px] bg-white/40 mr-4 flex-shrink-0"></div>
                                                            <span className="text-white/90 font-light text-md">{useCase}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
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
            <section className="py-24 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_2.jpeg')" }}>
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="mb-20 max-w-2xl p-10 glass-panel rounded-3xl border border-white/20 bg-slate-950/30 backdrop-blur-lg">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display drop-shadow-lg">
                                One platform.<br />
                                <span className="text-gradient">Complete clarity.</span>
                            </h2>
                            <p className="text-white/90 text-lg font-light drop-shadow">
                                Whether you're profiling audiences for policy or players for performance,
                                Mandat provides one consistent, automated data platform.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {platformFeatures.map((feature, index) => (
                            <AnimatedSection key={feature.title} delay={index * 120} className="h-full">
                                <div className="glass-panel border-l-[3px] border-l-primary-500 rounded-2xl p-8 h-full bg-slate-950/40 backdrop-blur-md hover:bg-slate-900/60 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-display">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/80 font-light leading-relaxed">{feature.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 WHO WE SERVE
            ═══════════════════════════════════════ */}
            <section className="py-24 border-y border-white/5 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_3.jpeg')" }}>
                <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/40 z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 tracking-tight font-display drop-shadow-lg">
                            Who we serve
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                            {audiences.map((audience, index) => (
                                <div
                                    key={index}
                                    className="p-6 glass-panel border border-white/20 rounded-2xl bg-slate-950/30 backdrop-blur-md shadow-xl text-center"
                                >
                                    <span className="text-white font-medium tracking-wide leading-tight drop-shadow">{audience.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 CTA SECTION
            ═══════════════════════════════════════ */}
            <section className="py-32 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_4.jpeg')" }}>
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/40 z-0" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="glass-panel p-12 md:p-16 rounded-3xl bg-slate-950/80 backdrop-blur-xl border-white/20">
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight font-display leading-[0.95]">
                                Let's build your{' '}
                                <span className="text-gradient">intelligence edge</span>
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light">
                                Schedule a consultation to discuss how Mandat can transform
                                your understanding of audiences and performance.
                            </p>
                            <button
                                onClick={openModal}
                                className="px-12 py-5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-display font-medium tracking-wide text-lg rounded-2xl shadow-[0_0_30px_rgba(20,184,166,0.2)] hover:shadow-[0_0_40px_rgba(20,184,166,0.4)] transition-all duration-300 transform hover:-translate-y-1"
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
