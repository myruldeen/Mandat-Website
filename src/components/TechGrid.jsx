import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

function TechGrid({ className = '', nodeCount = 12 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "50px" })

    const nodes = useMemo(() => {
        return Array.from({ length: nodeCount }, (_, i) => ({
            id: i,
            cx: 10 + Math.random() * 80,
            cy: 10 + Math.random() * 80,
            r: Math.random() * 2 + 1.5,
            delay: Math.random() * 1.5,
        }))
    }, [nodeCount])

    const edges = useMemo(() => {
        const result = []
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].cx - nodes[j].cx
                const dy = nodes[i].cy - nodes[j].cy
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 30) {
                    result.push({
                        id: `e-${i}-${j}`,
                        x1: nodes[i].cx,
                        y1: nodes[i].cy,
                        x2: nodes[j].cx,
                        y2: nodes[j].cy,
                        delay: Math.max(nodes[i].delay, nodes[j].delay) + 0.3,
                    })
                }
            }
        }
        return result
    }, [nodes])

    return (
        <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                {/* Edges (circuit lines) */}
                {isInView && edges.map((edge) => (
                    <motion.line
                        key={edge.id}
                        x1={edge.x1}
                        y1={edge.y1}
                        x2={edge.x2}
                        y2={edge.y2}
                        stroke="rgba(20, 184, 166, 0.08)"
                        strokeWidth="0.15"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: edge.delay, ease: "easeOut" }}
                    />
                ))}
                {/* Nodes */}
                {isInView && nodes.map((node) => (
                    <motion.circle
                        key={node.id}
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r}
                        fill="rgba(20, 184, 166, 0.12)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: node.delay, ease: "backOut" }}
                    />
                ))}
                {/* Subtle pulsing rings on some nodes */}
                {isInView && nodes.filter((_, i) => i % 3 === 0).map((node) => (
                    <motion.circle
                        key={`ring-${node.id}`}
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r * 3}
                        fill="none"
                        stroke="rgba(20, 184, 166, 0.06)"
                        strokeWidth="0.1"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{
                            duration: 4,
                            delay: node.delay + 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export default TechGrid
