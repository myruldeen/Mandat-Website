import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, AlertCircle, Loader2 } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ParticleField from '../components/ParticleField'
import blogPosts from '../data/blog-posts.json'

function BlogArticle({ openModal }) {
    const { slug } = useParams()
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)

        const foundArticle = blogPosts.find(p => p.slug === slug)
        setArticle(foundArticle)
        setIsLoading(false)
    }, [slug])

    return (
        <div className="pt-24 pb-20 bg-slate-950 min-h-screen relative overflow-hidden">
            <ParticleField density={15} color="blue" className="opacity-30" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection>
                    <div className="mb-10">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-300 font-medium text-sm group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>
                    </div>

                    <div className="glass-panel-strong rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden min-h-[60vh] flex flex-col">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px]" />

                        {isLoading ? (
                            <div className="flex-grow flex flex-col items-center justify-center text-center">
                                <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-6" />
                                <h2 className="text-2xl font-bold text-white font-display tracking-tight">Loading content...</h2>
                            </div>
                        ) : article ? (
                            <article className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md font-display border border-primary-500/20">
                                        {article.tag}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 font-display tracking-tight leading-tight">
                                    {article.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-white/10">
                                    <div className="flex items-center text-slate-400 text-sm">
                                        <User className="w-4 h-4 mr-2 text-primary-400" />
                                        {article.writer}
                                    </div>
                                    <div className="flex items-center text-slate-400 text-sm">
                                        <Clock className="w-4 h-4 mr-2 text-primary-400" />
                                        {article.date}
                                    </div>
                                </div>

                                <div
                                    className="prose prose-invert prose-primary max-w-none blog-content
                                               prose-h1:text-white prose-h2:text-white prose-h3:text-white
                                               prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-lg
                                               prose-strong:text-white prose-a:text-primary-400
                                               prose-img:rounded-2xl prose-img:border prose-img:border-white/10"
                                    dangerouslySetInnerHTML={{ __html: article.content }}
                                />
                            </article>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center py-20">
                                <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center mb-8 border border-white/5 relative">
                                    <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl animate-pulse-glow" />
                                    <AlertCircle className="w-10 h-10 text-slate-400 relative z-10" />
                                </div>

                                <h1 className="text-4xl font-bold text-white mb-6 font-display">Article Not Found</h1>
                                <p className="text-slate-400 mb-10 text-lg">The article you're looking for doesn't exist or has been moved.</p>
                                <Link to="/blog" className="btn-primary px-8 py-3">Return to Blog</Link>
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default BlogArticle
