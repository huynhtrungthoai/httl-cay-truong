import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import leaders from '../../data/pastors.json'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

export default function Leaders() {
  return (
    <section id="leaders" className="section-padding bg-ivory">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Những Tôi Tớ Trung Tín"
          title="Các Mục Sư & Người Hầu Việc Chúa"
          subtitle="Những tấm lòng đã tận hiến gây dựng Hội Thánh qua các thế hệ"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {leaders.map((leader) => (
            <motion.article
              key={leader.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-elegant"
            >
              <div className="relative h-72 overflow-hidden">
                {leader.portrait !== 'N/A' ? (
                <img
                  src={leader.portrait}
                  alt={`Chân dung ${leader.name}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-brown/10 text-brown-light">
                  Chưa có hình
                </div>
              )}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                    {leader.role}
                  </p>
                  <h3 className="font-display text-xl font-bold text-ivory">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-ivory/80">{leader.period}</p>
                </div>
              </div>

              {/* Bio slides up on hover (desktop); always visible spacing below on mobile */}
              <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 group-hover:max-h-60">
                <p className="p-5 text-sm leading-relaxed text-brown-light">
                  {leader.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
