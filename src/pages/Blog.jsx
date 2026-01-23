import { useState } from 'react'
import {
    Clock,
    User,
    TrendingUp,
    Brain,
    Globe,
    Users,
    CheckCircle,
    ArrowRight,
    Send,
    BookOpen,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

function Blog({ openModal }) {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        setIsSubscribed(true)
        setEmail('')
        setTimeout(() => setIsSubscribed(false), 3000)
    }

    const relatedPosts = [
        'OCEAN Personality Profiling: A Practical Guide',
        'From Data to Decisions: Best Practices in Audience Analytics',
        'Case Study: Transforming Youth Engagement Through Psychographic Insights',
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto">
                            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
                                Blog
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                                Insights & Intelligence
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                Thoughts on audience analytics, data-driven strategy, and
                                organizational intelligence
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-16 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Article Content */}
                        <div className="lg:col-span-2">
                            <AnimatedSection>
                                <article className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-soft">
                                    {/* Article Header */}
                                    <div className="p-8 pb-6 border-b border-neutral-100">
                                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-500">
                                            <span className="flex items-center">
                                                <User className="w-4 h-4 mr-2" />
                                                Mandat Research Team
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="w-4 h-4 mr-2" />
                                                12 min read
                                            </span>
                                            <span>January 21, 2026</span>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                                            The Market Opportunity for Audience Analytics in Malaysia: A
                                            2026 Analysis
                                        </h2>
                                        <p className="text-lg text-neutral-600 leading-relaxed">
                                            Malaysia's data analytics market is experiencing unprecedented
                                            growth, driven by digital transformation initiatives and increasing
                                            recognition that understanding audiences is the key to program success.
                                        </p>
                                    </div>

                                    {/* Article Body */}
                                    <div className="p-8">
                                        {/* Section 1 */}
                                        <div className="mb-10">
                                            <div className="flex items-center mb-4">
                                                <TrendingUp className="w-6 h-6 text-primary-600 mr-3" />
                                                <h3 className="text-xl font-bold text-neutral-900">
                                                    1. The market is growing—fast
                                                </h3>
                                            </div>
                                            <p className="text-neutral-600 leading-relaxed mb-4">
                                                The global audience analytics market is reaching $5.89 billion
                                                in 2026, growing at an impressive 11.7% annually. Malaysia's
                                                digital transformation market alone is valued at $12.67 billion.
                                            </p>
                                            <div className="grid grid-cols-2 gap-4 my-6">
                                                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-center">
                                                    <div className="text-2xl font-bold text-primary-600">
                                                        RM 163.6B
                                                    </div>
                                                    <div className="text-sm text-neutral-500">
                                                        Digital Blueprint Allocation
                                                    </div>
                                                </div>
                                                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-center">
                                                    <div className="text-2xl font-bold text-primary-600">
                                                        RM 500M
                                                    </div>
                                                    <div className="text-sm text-neutral-500">
                                                        National AI Office Funding
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Section 2 */}
                                        <div className="mb-10">
                                            <div className="flex items-center mb-4">
                                                <Brain className="w-6 h-6 text-purple-600 mr-3" />
                                                <h3 className="text-xl font-bold text-neutral-900">
                                                    2. Why psychographic profiling matters
                                                </h3>
                                            </div>
                                            <p className="text-neutral-600 leading-relaxed mb-4">
                                                Research shows psychographic targeting increases effectiveness
                                                by <span className="text-purple-600 font-bold">670%</span>{' '}
                                                compared to demographic targeting alone.
                                            </p>
                                            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-6">
                                                <h4 className="text-neutral-900 font-semibold mb-3">
                                                    The OCEAN Difference
                                                </h4>
                                                <ul className="space-y-2 text-neutral-700">
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            <strong>Demographic</strong> profiling tells you WHO your audience is
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            <strong>Psychographic</strong> profiling reveals WHY they behave the way they do
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                                        <span>
                                                            <strong>OCEAN</strong> is the most scientifically validated personality framework
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Section 3 */}
                                        <div className="mb-10">
                                            <div className="flex items-center mb-4">
                                                <Globe className="w-6 h-6 text-primary-600 mr-3" />
                                                <h3 className="text-xl font-bold text-neutral-900">
                                                    3. The Malaysian opportunity
                                                </h3>
                                            </div>
                                            <ul className="space-y-3 text-neutral-600">
                                                <li className="flex items-start">
                                                    <ArrowRight className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                    Limited specialized local competitors in psychographic profiling
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                    Government emphasis on evidence-based programs
                                                </li>
                                                <li className="flex items-start">
                                                    <ArrowRight className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                    Budget 2026 allocations for youth programs and digital initiatives
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Section 4 */}
                                        <div className="mb-10">
                                            <div className="flex items-center mb-4">
                                                <Users className="w-6 h-6 text-pink-600 mr-3" />
                                                <h3 className="text-xl font-bold text-neutral-900">
                                                    4. Success in action—The YADIM Case
                                                </h3>
                                            </div>
                                            <p className="text-neutral-600 leading-relaxed mb-4">
                                                Our partnership with Yayasan Dakwah Islam Malaysia (YADIM) for
                                                their Konvensyen MADANI Rakan Siswa program demonstrates the
                                                power of integrated audience analytics.
                                            </p>
                                            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                                                <ul className="space-y-3 text-neutral-700">
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                        Demographic + psychographic + sentiment profiling revealed critical messaging mismatches
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                        Data-driven insights enabled refined communication strategies
                                                    </li>
                                                    <li className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                                                        Result: Better-aligned recruitment and program design
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Conclusion */}
                                        <div className="border-t border-neutral-100 pt-8">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-4">Conclusion</h3>
                                            <p className="text-neutral-600 leading-relaxed mb-6">
                                                The organizations that thrive in the next decade will be those
                                                that truly understand the people they serve. Audience analytics
                                                isn't a luxury—it's becoming table stakes for effective program
                                                design and communication strategy.
                                            </p>
                                            <button
                                                onClick={openModal}
                                                className="btn-primary flex items-center"
                                            >
                                                Book a demo to learn more
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Newsletter */}
                            <AnimatedSection delay={100}>
                                <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft">
                                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                        Get insights delivered
                                    </h3>
                                    <p className="text-neutral-600 text-sm mb-6">
                                        Monthly updates on audience analytics and data-driven strategy
                                    </p>
                                    {isSubscribed ? (
                                        <div className="flex items-center text-primary-600">
                                            <CheckCircle className="w-5 h-5 mr-2" />
                                            <span>Thanks for subscribing!</span>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubscribe} className="space-y-3">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full btn-primary flex items-center justify-center"
                                            >
                                                <Send className="w-4 h-4 mr-2" />
                                                Subscribe
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </AnimatedSection>

                            {/* Related Posts */}
                            <AnimatedSection delay={200}>
                                <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft">
                                    <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                                        <BookOpen className="w-5 h-5 text-neutral-500 mr-2" />
                                        Related posts
                                    </h3>
                                    <ul className="space-y-4">
                                        {relatedPosts.map((post, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    className="block text-neutral-600 hover:text-primary-600 transition-colors leading-snug"
                                                >
                                                    {post}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* CTA Card */}
                            <AnimatedSection delay={300}>
                                <div className="bg-neutral-900 rounded-2xl p-6 text-center">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        Ready to transform your audience understanding?
                                    </h3>
                                    <p className="text-neutral-400 text-sm mb-6">
                                        Schedule a consultation with our team
                                    </p>
                                    <button onClick={openModal} className="w-full bg-primary-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:bg-primary-400">
                                        Let's chat
                                    </button>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
