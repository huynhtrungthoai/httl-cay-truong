import { motion } from 'framer-motion'
import { GiSprout, GiCandleLight, GiOakLeaf, GiChurch } from 'react-icons/gi'
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
    era: 'Thời Kỳ Đầu',
    years: '1976 – 1978',
    description:
      'Các gia đình tín hữu đầu tiên theo chương trình kinh tế mới đến Cây Trường. Hội Thánh nhóm tại nhà TĐ Phan Quang Vũ, rồi cùng nhau dựng ngôi nhà nguyện vách đất, mái tranh — nghèo vật chất nhưng giàu tình yêu thương.',
    image:
      'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: GiCandleLight,
    era: 'Thời Kỳ Thầm Lặng',
    years: '1978 – 1988',
    description:
      'Gần mười năm gian nan, con cái Chúa tản lạc. Những người ở lại vẫn âm thầm học Kinh Thánh và cầu nguyện lúc 3–4 giờ khuya, giữ ngọn lửa đức tin không tắt.',
    image:
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: GiOakLeaf,
    era: 'Thời Kỳ Tái Lập',
    years: '1988 – 1993',
    description:
      'Tháng 12/1988, Hội Thánh được phép mở cửa lại, nhóm mỗi tháng một lần tại nhà Ông Bà Nguyễn Thành Tâm. Từ năm 1992, Hội Thánh được nhóm thờ phượng vào Chúa Nhật mỗi tuần.',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: GiChurch,
    era: 'Thời Kỳ Xây Dựng',
    years: '1993 – 2026',
    description:
      'Đặt viên đá đầu tiên năm 2004, cung hiến Đền Thờ năm 2008, được công nhận Chi Hội Tự Lập năm 2010. Hội Thánh mở mang các điểm nhóm Tân Hưng, Lai Uyên và phục vụ cộng đồng.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
  },
]

export default function HistoryOverview() {
  return (
    <section id="journey" className="section-padding bg-surface">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Nửa Thế Kỷ Ân Điển"
          title="Hành Trình 50 Năm"
          subtitle="Bốn thời kỳ của một câu chuyện đức tin không ngừng nghỉ"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {milestones.map((m) => {
            const Icon = m.icon
            return (
              <motion.article
                key={m.era}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-elegant transition-shadow duration-500 hover:shadow-blue"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.era}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue text-white shadow-blue">
                    <Icon size={28} />
                  </span>
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue">
                    {m.years}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                    {m.era}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
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
