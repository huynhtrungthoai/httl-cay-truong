import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import SectionHeading from '../SectionHeading'
import { timeline } from '../../data/timeline'
import { viewportOnce } from '../../lib/motion'

export default function Timeline() {
  const [expanded, setExpanded] = useState(false)
  const visibleEvents = expanded ? timeline : timeline.slice(0, 3)

  return (
    <section id="timeline" className="section-padding bg-navy text-surface">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Dòng Chảy Thời Gian"
          title="Những Cột Mốc Lịch Sử"
          subtitle="Từng dấu chân ân điển trên hành trình nửa thế kỷ"
          light
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Center line (desktop) / left line (mobile) */}
          <div className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-light/0 via-blue-light to-blue-light/0 md:left-1/2" />

          <ul id="timeline-events" className="space-y-12">
            {visibleEvents.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <li key={event.year} className="relative">
                  <span className="absolute left-4 top-2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-light bg-navy-dark md:left-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`relative ml-12 md:w-1/2 ${
                      isLeft ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <div className="rounded-2xl border border-blue-light/30 bg-navy-dark/60 p-6 shadow-elegant backdrop-blur-sm transition-colors hover:border-blue-light/60">
                      <span className="font-display text-3xl font-bold text-accent">
                        {event.year}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-semibold text-surface">
                        {event.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-surface/75">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </li>
              )
            })}
          </ul>
        </div>

        {timeline.length > 3 && (
          <div className="mt-12 text-center">
            <button
              type="button"
              className="btn-outline"
              aria-controls="timeline-events"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
            >
              {expanded ? 'Thu gọn' : 'Xem thêm'}
              {expanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
