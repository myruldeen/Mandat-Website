import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import TechGrid from '../components/TechGrid'
import blogPosts from '../data/blog-posts.json'

function Blog({ openModal }) {
    const [state, handleSubmit] = useForm('xaqakqby')
    const [email, setEmail] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [sortBy, setSortBy] = useState('newest')

    const categories = ['All', ...new Set(blogPosts.map((post) => post.tag))]

    const filteredPosts = blogPosts
        .filter((post) => activeCategory === 'All' || post.tag === activeCategory)
        .sort((a, b) => {
            if (sortBy === 'newest') return b.timestamp - a.timestamp
            return a.timestamp - b.timestamp
        })

    return (
        <div className="pt-20 bg-slate-950 overflow-hidden">
            {/* ═══════════════════════════════════════
                 HERO SECTION
            ═══════════════════════════════════════ */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_1.jpeg')" }}>
                <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-0" />

                <TechGrid nodeCount={12} className="opacity-20 z-0" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto glass-panel p-12 rounded-3xl backdrop-blur-xl border-white/20 bg-slate-950/30 shadow-2xl">
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-slate-950/50 mb-8">
                                <span className="text-primary-300 text-xs uppercase tracking-[0.2em] font-medium font-display">
                                    Blog & Insights
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-display leading-[0.95] drop-shadow-md">
                                Intelligence <span className="text-gradient">Hub</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-sm">
                                Thoughts on audience analytics, data-driven strategy, and
                                organizational intelligence for Malaysia's future.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 FILTERS & SEARCH
            ═══════════════════════════════════════ */}
            <section className="py-8 relative bg-slate-950 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        {/* Categories */}
                        <div className="flex flex-wrap items-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20 glass-panel border border-primary-500/50 rounded-xl'
                                        : 'bg-white/5 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white rounded-xl'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-4">
                            <span className="text-slate-400 text-sm font-light font-display tracking-widest uppercase">
                                Sort:
                            </span>
                            <div className="flex bg-white/5 border border-white/10 p-1 rounded-xl">
                                <button
                                    onClick={() => setSortBy('newest')}
                                    className={`px-5 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider font-display ${sortBy === 'newest'
                                        ? 'bg-primary-500/20 text-primary-400'
                                        : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    Newest
                                </button>
                                <button
                                    onClick={() => setSortBy('oldest')}
                                    className={`px-5 py-2 rounded-lg text-xs font-bold transition-all uppercase tracking-wider font-display ${sortBy === 'oldest'
                                        ? 'bg-primary-500/20 text-primary-400'
                                        : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    Oldest
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 ARTICLES GRID
            ═══════════════════════════════════════ */}
            <section className="py-24 relative bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((article, index) => (
                                <motion.div
                                    key={article.slug}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Link to={`/blog/${article.slug}`} className="block h-full">
                                        <motion.article
                                            className="h-full group glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col transition-all duration-300 p-10 relative bg-slate-950/40 hover:bg-slate-900/60 shadow-xl"
                                            whileHover={{ y: -6, borderColor: 'rgba(20, 184, 166, 0.4)' }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="relative z-10 flex-grow flex flex-col">
                                                <div className="flex items-center justify-between mb-8">
                                                    <span className="bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg font-display border border-primary-500/20">
                                                        {article.tag}
                                                    </span>
                                                    <div className="flex items-center text-xs text-slate-400 font-light tracking-wide">
                                                        {article.date}
                                                    </div>
                                                </div>

                                                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 group-hover:text-primary-400 transition-colors duration-300 font-display leading-snug">
                                                    {article.title}
                                                </h2>

                                                <div className="mt-auto flex items-center justify-between text-primary-400 text-sm font-bold font-display group-hover:text-primary-300 transition-colors pt-6 border-t border-white/5 uppercase tracking-widest">
                                                    Read Article
                                                    <span className="text-xl transform group-hover:translate-x-2 transition-transform hidden sm:inline-block">→</span>
                                                </div>
                                            </div>
                                        </motion.article>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 NEWSLETTER SECTION
            ═══════════════════════════════════════ */}
            <section className="py-32 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_6.jpeg')" }}>
                <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/80 z-0" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection>
                        <div className="glass-panel rounded-3xl p-12 md:p-16 text-center border border-white/20 relative overflow-hidden bg-slate-950/60 backdrop-blur-2xl shadow-2xl">
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display drop-shadow-md">
                                    Get insights <span className="text-gradient">delivered</span>
                                </h2>
                                <p className="text-white/80 mb-12 max-w-lg mx-auto font-light text-lg">
                                    Join leading organizations receiving our monthly intelligence briefing on
                                    audience analytics and strategy.
                                </p>

                                {state.succeeded ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-primary-500/10 border border-primary-500/30 rounded-2xl p-6 shadow-inner"
                                    >
                                        <span className="text-primary-300 text-lg font-medium font-display">Welcome to the inner circle. Thank you for subscribing.</span>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            placeholder="Enter your work email"
                                            className="flex-grow px-6 py-5 bg-slate-900/60 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none font-light"
                                        />
                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-display font-medium tracking-wide text-lg rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
                                        >
                                            {state.submitting ? 'Subscribing...' : 'Subscribe'}
                                        </button>
                                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-3 text-left w-full" />
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
