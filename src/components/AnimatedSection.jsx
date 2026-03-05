import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedSection({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedSection
