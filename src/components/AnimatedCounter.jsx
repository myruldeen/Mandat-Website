import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, className = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        let startTime = null
        const startValue = 0

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(startValue + (target - startValue) * eased)
            setCount(current)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isInView, target, duration])

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    )
}

export default AnimatedCounter
