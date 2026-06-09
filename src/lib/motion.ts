import type { Variants } from 'framer-motion'

/** Fade-up entrance — the default reveal used across the site. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
}

/** Container that staggers its children's entrance. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

/** Simple fade. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
}

/** Shared viewport config so sections animate once when scrolled into view. */
export const viewportOnce = { once: true, amount: 0.2 } as const
