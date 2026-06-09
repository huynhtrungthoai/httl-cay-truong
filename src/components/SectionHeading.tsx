import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.3em] ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
          light ? 'text-ivory' : 'text-brown'
        }`}
      >
        {title}
      </h2>
      <div className="gold-divider my-6" />
      {subtitle && (
        <p
          className={`font-serif text-lg italic md:text-xl ${
            light ? 'text-ivory/80' : 'text-brown-light'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
