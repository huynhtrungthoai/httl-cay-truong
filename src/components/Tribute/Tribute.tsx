import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from '../SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

interface Tribute {
  to: string
  message: string
  from: string
}

const tributes: Tribute[] = [
  {
    to: 'Dâng Lên Đức Chúa Trời',
    message:
      'Tạ ơn Chúa vì sự thành tín của Ngài suốt năm mươi năm qua. Mọi vinh hiển và ngợi khen đều thuộc về Đấng đã dẫn dắt chúng con từ buổi ban đầu cho đến hôm nay.',
    from: 'Toàn Thể Hội Thánh',
  },
  {
    to: 'Tri Ân Các Mục Sư Tiền Nhiệm',
    message:
      'Cảm ơn những tôi tớ trung tín đã hy sinh và tận hiến gây dựng Hội Thánh. Di sản đức tin của quý vị vẫn tiếp tục đơm hoa kết trái qua các thế hệ.',
    from: 'Ban Chấp Sự',
  },
  {
    to: 'Cảm Ơn Tín Hữu',
    message:
      'Cảm ơn mỗi tấm lòng đã cùng nhau cầu nguyện, dâng hiến và phục vụ. Chính sự đồng công của anh chị em đã viết nên câu chuyện ân điển này.',
    from: 'Ban Mục Vụ',
  },
  {
    to: 'Gửi Đến Cộng Đồng & Đối Tác',
    message:
      'Cảm ơn các Hội Thánh bạn, các đối tác và cộng đồng đã đồng hành, nâng đỡ và chia sẻ trong suốt hành trình phục vụ Chúa và con người.',
    from: 'Chi Hội Cây Trường',
  },
]

export default function Tribute() {
  return (
    <section id="gratitude" className="section-padding bg-ivory">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Tấm Lòng Biết Ơn"
          title="Lời Tri Ân"
          subtitle="“Tôi cảm tạ Đức Chúa Trời tôi mỗi khi nhớ đến anh em” — Phi-líp 1:3"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2"
        >
          {tributes.map((t) => (
            <motion.blockquote
              key={t.to}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-gold/20 bg-white p-8 shadow-elegant transition-shadow hover:shadow-gold"
            >
              <FaQuoteLeft className="mb-4 text-gold/40" size={36} />
              <h3 className="mb-3 font-display text-xl font-bold text-brown">
                {t.to}
              </h3>
              <p className="font-serif text-lg italic leading-relaxed text-brown-light">
                {t.message}
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold">
                — {t.from}
              </footer>
              <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10" />
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
