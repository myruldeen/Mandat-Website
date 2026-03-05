import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

function ParticleField({ className = '', density = 30, color = 'primary' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "100px" })

    const colorMap = {
        primary: 'rgba(20, 184, 166, VAR)',
        blue: 'rgba(59, 130, 246, VAR)',
        indigo: 'rgba(99, 102, 241, VAR)',
    }

    const particles = useMemo(() => {
        return Array.from({ length: density }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2.5 + 1,
            delay: Math.random() * 4,
            duration: Math.random() * 3 + 3,
            opacity: Math.random() * 0.5 + 0.1,
        }))
    }, [density])

    // Generate connecting lines between nearby particles
    const lines = useMemo(() => {
        const result = []
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x
                const dy = particles[i].y - particles[j].y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 20) {
                    result.push({
                        id: `${i}-${j}`,
                        x1: particles[i].x,
                        y1: particles[i].y,
                        x2: particles[j].x,
                        y2: particles[j].y,
                        opacity: Math.max(0.02, 0.08 - dist / 250),
                    })
                }
            }
        }
        return result
    }, [particles])

    const baseColor = colorMap[color] || colorMap.primary

    return (
        <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                {isInView && lines.map((line) => (
                    <motion.line
                        key={line.id}
                        x1={`${line.x1}%`}
                        y1={`${line.y1}%`}
                        x2={`${line.x2}%`}
                        y2={`${line.y2}%`}
                        stroke={baseColor.replace('VAR', String(line.opacity))}
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: Math.random() * 2 }}
                    />
                ))}
                {/* Particles */}
                {isInView && particles.map((p) => (
                    <motion.circle
                        key={p.id}
                        cx={`${p.x}%`}
                        cy={`${p.y}%`}
                        r={p.size}
                        fill={baseColor.replace('VAR', String(p.opacity))}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export default ParticleField
