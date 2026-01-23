import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function ServiceCard({ icon: Icon, title, description, to, delay = 0 }) {
    return (
        <div
            className="group relative bg-white border border-neutral-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-primary-200"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Icon */}
            <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary-600" />
                </div>
            </div>

            {/* Content */}
            <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                    {description}
                </p>
                {to && (
                    <Link
                        to={to}
                        className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300"
                    >
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ServiceCard
