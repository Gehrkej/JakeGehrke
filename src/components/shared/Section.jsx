import React from 'react'
import { motion } from 'framer-motion'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

/**
 * Standard section scaffold shared by every landing-page section:
 *
 *   <section id>
 *     <h5>{eyebrow}</h5>
 *     <h2>{title}</h2>
 *     <motion.div className="container {containerClassName}"> ...children </motion.div>
 *   </section>
 *
 * The container fades/slides in on scroll via useRevealOnScroll. Callers that
 * need a different entrance (e.g. slide up) pass `initial` + `animateTo`/`threshold`.
 */
const Section = ({
    id,
    eyebrow,
    title,
    containerClassName = '',
    initial = { opacity: 0 },
    animateTo,
    threshold,
    children,
}) => {
    const { ref, controls } = useRevealOnScroll({ animateTo, threshold })

    return (
        <section id={id}>
            <h5>{eyebrow}</h5>
            <h2>{title}</h2>

            <motion.div
                className={`container ${containerClassName}`.trim()}
                ref={ref}
                initial={initial}
                animate={controls}
            >
                {children}
            </motion.div>
        </section>
    )
}

export default Section
