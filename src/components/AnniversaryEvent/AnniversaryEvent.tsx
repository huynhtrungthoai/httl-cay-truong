import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiCalendar,
  FiMapPin,
  FiClock,
} from 'react-icons/fi'
import SectionHeading from '../SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

// The Golden Jubilee celebration date.
const EVENT_DATE = new Date('2026-10-18T08:00:00+07:00')

const schedule = [
  { time: '08:00', title: 'Khai Lễ Thờ Phượng', desc: 'Ngợi khen và tôn vinh Chúa' },
  { time: '09:30', title: 'Trình Bày Lịch Sử', desc: 'Hành trình 50 năm ân điển' },
  { time: '11:00', title: 'Lễ Tạ Ơn', desc: 'Dâng lời cảm tạ lên Đức Chúa Trời' },
  { time: '14:00', title: 'Thông Công', desc: 'Gặp gỡ và chia sẻ niềm vui' },
]

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now()
  const clamped = Math.max(diff, 0)
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    minutes: Math.floor((clamped / 60_000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  }
}

export default function AnniversaryEvent() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units: { label: string; value: number }[] = [
    { label: 'Ngày', value: timeLeft.days },
    { label: 'Giờ', value: timeLeft.hours },
    { label: 'Phút', value: timeLeft.minutes },
    { label: 'Giây', value: timeLeft.seconds },
  ]

  return (
    <section
      id="celebration"
      className="relative overflow-hidden section-padding text-ivory"
    >
      {/* Banner background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=2000&q=80"
          alt="Lễ kỷ niệm"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-brown-dark/85" />

      <div className="container-narrow">
        <SectionHeading
          eyebrow="Năm Hân Hỉ Vàng"
          title="Đại Lễ Kỷ Niệm 50 Năm"
          subtitle="Cùng nhau dâng lời tạ ơn và mừng nửa thế kỷ ân điển"
          light
        />

        {/* Event meta */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-12 grid max-w-3xl gap-6 sm:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 rounded-2xl border border-gold/20 bg-brown-dark/50 p-6 backdrop-blur-sm"
          >
            <FiCalendar className="shrink-0 text-gold" size={32} />
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-light">
                Thời Gian
              </p>
              <p className="font-display text-lg font-semibold">
                Chúa Nhật, 18/10/2026
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 rounded-2xl border border-gold/20 bg-brown-dark/50 p-6 backdrop-blur-sm"
          >
            <FiMapPin className="shrink-0 text-gold" size={32} />
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-light">
                Địa Điểm
              </p>
              <p className="font-display text-lg font-semibold">
                Chi Hội Cây Trường
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-16 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6"
        >
          {units.map((u) => (
            <div
              key={u.label}
              className="rounded-2xl border border-gold/30 bg-gradient-to-b from-brown-dark/70 to-brown/40 py-6 text-center backdrop-blur-sm"
            >
              <span className="block font-display text-3xl font-bold text-shimmer sm:text-5xl">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-widest text-ivory/70 sm:text-sm">
                {u.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Schedule */}
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold text-gold-light">
            Chương Trình Đại Lễ
          </h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {schedule.map((item) => (
              <motion.li
                key={item.time}
                variants={fadeUp}
                className="flex items-center gap-5 rounded-xl border border-gold/15 bg-brown-dark/50 p-5 backdrop-blur-sm transition-colors hover:border-gold/40"
              >
                <div className="flex w-20 shrink-0 items-center gap-2 font-display text-xl font-bold text-gold">
                  <FiClock size={18} />
                  {item.time}
                </div>
                <div className="h-10 w-px bg-gold/30" />
                <div>
                  <p className="font-semibold text-ivory">{item.title}</p>
                  <p className="text-sm text-ivory/70">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
