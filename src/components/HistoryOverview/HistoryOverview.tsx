import { motion } from 'framer-motion'
import { GiSprout, GiOakLeaf, GiSun } from 'react-icons/gi'
import type { IconType } from 'react-icons'
import SectionHeading from '../SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

interface Milestone {
  icon: IconType
  era: string
  years: string
  description: string
  image: string
}

const milestones: Milestone[] = [
  {
    icon: GiSprout,
    era: 'Đặt Nền Móng',
    years: '1976 – 1990',
    description:
      'Hội Thánh được thành lập và những năm tháng chức vụ đầu tiên. Hạt giống đức tin được gieo trồng trong sự cầu nguyện và lòng trung tín.',
    image:
      'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: GiOakLeaf,
    era: 'Tăng Trưởng',
    years: '1991 – 2010',
    description:
      'Mùa mở rộng và vươn ra. Hội Thánh phát triển về số lượng lẫn chiều sâu thuộc linh, các ban ngành được hình thành vững mạnh.',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: GiSun,
    era: 'Hưng Thịnh',
    years: '2011 – 2026',
    description:
      'Tầm ảnh hưởng lan rộng và tầm nhìn cho tương lai. Một thế hệ mới tiếp nối ngọn lửa đức tin và sứ mạng truyền giáo.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
]

export default function HistoryOverview() {
  return (
    <section id="journey" className="section-padding bg-ivory">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Nửa Thế Kỷ Ân Điển"
          title="Hành Trình 50 Năm"
          subtitle="Ba mùa của một câu chuyện đức tin không ngừng nghỉ"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-3"
        >
          {milestones.map((m) => {
            const Icon = m.icon
            return (
              <motion.article
                key={m.era}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-elegant transition-shadow duration-500 hover:shadow-gold"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.era}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-brown-dark shadow-gold">
                    <Icon size={28} />
                  </span>
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                    {m.years}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-brown">
                    {m.era}
                  </h3>
                  <p className="mt-4 leading-relaxed text-brown-light">
                    {m.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
