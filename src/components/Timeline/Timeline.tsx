import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { timeline } from '../../data/timeline'
import { viewportOnce } from '../../lib/motion'

export default function Timeline() {
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
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-light/0 via-blue-light to-blue-light/0 md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-12">
            {timeline.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <li key={event.year} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`relative ml-12 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    {/* Node */}
                    <span
                      className={`absolute -left-[2.35rem] top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-light bg-navy-dark md:left-auto ${
                        isLeft
                          ? 'md:-right-[3.05rem]'
                          : 'md:-left-[3.05rem]'
                      }`}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-cream" />
                    </span>

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
      </div>
    </section>
  )
}
