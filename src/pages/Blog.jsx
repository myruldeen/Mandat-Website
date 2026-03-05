import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Clock,
    User,
    ArrowRight,
    Send,
    BookOpen,
    Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import TechGrid from '../components/TechGrid'
import blogPosts from '../data/blog-posts.json'

function Blog({ openModal }) {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        setIsSubscribed(true)
        setEmail('')
        setTimeout(() => setIsSubscribed(false), 3000)
    }

    return (
        <div className="pt-20 bg-slate-950 overflow-hidden">
            {/* ═══════════════════════════════════════
                 HERO SECTION
            ═══════════════════════════════════════ */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <TechGrid nodeCount={12} className="opacity-20" />
                <motion.div
                    className="absolute top-[-100px] right-1/4 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[150px]"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8">
                                <Sparkles className="w-3 h-3 text-primary-400" />
                                <span className="text-primary-300 text-xs uppercase tracking-[0.2em] font-medium font-display">
                                    Blog & Insights
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-display leading-[0.95]">
                                Intelligence <span className="text-gradient-cyan">Hub</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
                                Thoughts on audience analytics, data-driven strategy, and
                                organizational intelligence for Malaysia's future.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 ARTICLES GRID
            ═══════════════════════════════════════ */}
            <section className="py-16 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((article, index) => (
                            <AnimatedSection key={article.slug} delay={index * 100}>
                                <Link to={`/blog/${article.slug}`} className="block h-full">
                                    <motion.article
                                        className="h-full group glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col transition-all duration-300 p-8 relative"
                                        whileHover={{ y: -6, borderColor: 'rgba(20, 184, 166, 0.4)' }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10 flex-grow flex flex-col">
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md font-display border border-primary-500/20">
                                                    {article.tag}
                                                </span>
                                                <div className="flex items-center text-xs text-slate-400 font-light">
                                                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                                                    {article.date}
                                                </div>
                                            </div>

                                            <h2 className="text-2xl font-bold text-white mb-8 group-hover:text-primary-400 transition-colors duration-300 font-display leading-snug">
                                                {article.title}
                                            </h2>

                                            <div className="mt-auto flex items-center text-primary-400 text-sm font-medium font-display group-hover:text-primary-300 transition-colors pt-6 border-t border-white/5">
                                                Read Article
                                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 NEWSLETTER SECTION
            ═══════════════════════════════════════ */}
            <section className="py-24 relative">
                <ParticleField density={15} color="blue" className="opacity-30" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="glass-panel-strong rounded-3xl p-10 md:p-16 text-center border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-2xl border border-primary-500/30 mb-8">
                                    <Send className="w-8 h-8 text-primary-400 transform -translate-x-0.5 translate-y-0.5" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                                    Get insights delivered
                                </h2>
                                <p className="text-slate-400 mb-10 max-w-lg mx-auto font-light">
                                    Join leading organizations receiving our monthly intelligence briefing on
                                    audience analytics and strategy.
                                </p>

                                {isSubscribed ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-4 inline-flex items-center"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary-400 mr-3 animate-pulse" />
                                        <span className="text-primary-400 font-medium">You're on the list! Thank you for subscribing.</span>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="Enter your work email"
                                            className="flex-grow px-5 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="btn-primary py-4 px-8 whitespace-nowrap font-display"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default Blog
