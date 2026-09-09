import { useEffect, useRef } from 'react'
import { useAnimation } from 'framer-motion'

/**
 * Fades/slides an element in the first time it scrolls into view.
 *
 * Encapsulates the IntersectionObserver + framer-motion pattern that was
 * previously copy-pasted across every section. Pair the returned `ref` and
 * `controls` with a `motion` element:
 *
 *   const { ref, controls } = useRevealOnScroll()
 *   <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls} />
 *
 * @param {object}       [options]
 * @param {object}       [options.animateTo] - target passed to controls.start()
 * @param {number|number[]} [options.threshold] - IntersectionObserver threshold
 */
const useRevealOnScroll = ({
    animateTo = { opacity: 1, transition: { duration: 1.5 } },
    threshold = 0.1,
} = {}) => {
    const controls = useAnimation()
    const ref = useRef(null)

    useEffect(() => {
        const node = ref.current

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start(animateTo)
                }
            },
            { threshold }
        )

        if (node) {
            observer.observe(node)
        }

        return () => {
            if (node) {
                observer.unobserve(node)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controls])

    return { ref, controls }
}

export default useRevealOnScroll
