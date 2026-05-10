import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
        <div className="pt-24 pb-20 bg-slate-950 min-h-screen relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Resource/background_image_6.jpeg')" }}>
            <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/60 to-transparent z-0" />

            <ParticleField density={15} color="primary" className="opacity-40 z-0" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection>
                    <div className="mb-10">
                        <Link
                            to="/blog"
                            className="inline-flex items-center text-white/50 hover:text-white transition-colors duration-300 font-medium text-sm font-display tracking-widest uppercase group"
                        >
                            <span className="mr-3 transform group-hover:-translate-x-2 transition-transform">←</span>
                            Back to Insights
                        </Link>
                    </div>

                    <div className="glass-panel rounded-3xl p-8 md:p-14 border border-white/20 bg-slate-950/60 backdrop-blur-xl relative overflow-hidden min-h-[60vh] flex flex-col shadow-2xl">
                        {isLoading ? (
                            <div className="flex-grow flex flex-col items-center justify-center text-center">
                                <div className="text-primary-500 font-display tracking-widest mb-6 animate-pulse uppercase">Loading...</div>
                            </div>
                        ) : article ? (
                            <article className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="bg-primary-500/10 text-primary-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg font-display border border-primary-500/30">
                                        {article.tag}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 font-display tracking-tight leading-tight drop-shadow-md">
                                    {article.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-8 mb-12 pb-8 border-b border-white/20">
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-display mb-1">Author</span>
                                        <span className="text-white/90 text-sm font-medium">{article.writer}</span>
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/20"></div>
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest font-display mb-1">Date</span>
                                        <span className="text-white/90 text-sm font-medium">{article.date}</span>
                                    </div>
                                </div>

                                {article.isPdf ? (
                                    <div className="w-full aspect-[1/1.4] rounded-2xl overflow-hidden border border-white/20 bg-slate-900/50 shadow-2xl backdrop-blur-md relative z-20">
                                        <iframe
                                            src={article.pdfUrl}
                                            className="w-full h-full border-none mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                            title={article.title}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className="prose prose-invert prose-primary max-w-none blog-content
                                                   prose-h1:text-white prose-h2:text-white prose-h2:font-display prose-h2:tracking-tight prose-h3:text-white
                                                   prose-p:text-white/80 prose-p:leading-relaxed prose-p:text-lg prose-p:font-light
                                                   prose-strong:text-white prose-a:text-primary-400
                                                   prose-img:rounded-2xl prose-img:border prose-img:border-white/20 prose-img:shadow-xl"
                                        dangerouslySetInnerHTML={{ __html: article.content }}
                                    />
                                )}
                            </article>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center py-20">
                                <h1 className="text-5xl font-bold text-white mb-6 font-display tracking-tight text-gradient">Not Found</h1>
                                <p className="text-white/70 mb-10 text-lg font-light">The article you're looking for doesn't exist or has been moved.</p>
                                <Link to="/blog" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-display font-medium tracking-wide border border-white/20 rounded-xl transition-all duration-300">Return to Blog</Link>
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}

export default BlogArticle
