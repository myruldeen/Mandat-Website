import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function ServiceCard({ icon: Icon, title, description, to, delay = 0 }) {
    return (
        <motion.div
            className="group relative glass-panel rounded-2xl p-8 border border-white/10 hover:border-primary-500/30 h-full overflow-hidden"
            whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.04)' }}
            transition={{ duration: 0.3 }}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <div className="mb-6 relative z-10">
                <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                    className="relative inline-flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-xl group-hover:border-primary-500/50 transition-colors duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                >
                    <Icon className="w-7 h-7 text-primary-400" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 font-display">
                    {title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed font-light">
                    {description}
                </p>
                {to && (
                    <Link
                        to={to}
                        className="inline-flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-300 font-display"
                    >
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                )}
            </div>
        </motion.div>
    )
}

export default ServiceCard
