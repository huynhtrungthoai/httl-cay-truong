import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import program from '../../data/anniversaryProgram.json'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionHeading from '../SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'

const EVENT_DATE = new Date(program.startsAt)

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
          className="mx-auto mb-10 grid max-w-4xl gap-6 sm:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-start gap-3"
          >
            <FiCalendar className="mt-1 shrink-0 text-gold-light" size={24} />
            <div>
              <p className="text-sm font-semibold text-gold-light">
                Thời Gian
              </p>
              <p className="mt-1 text-lg font-semibold">
                {EVENT_DATE.toLocaleString('vi-VN', {
                  timeZone: 'Asia/Ho_Chi_Minh',
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-start gap-3"
          >
            <FiMapPin className="mt-1 shrink-0 text-gold-light" size={24} />
            <div>
              <p className="text-sm font-semibold text-gold-light">
                Địa Điểm
              </p>
              <p className="mt-1 text-lg font-semibold">
                {program.location.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-ivory/80">
                {program.location.address}
              </p>
              <a
                href={program.location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-gold-light underline underline-offset-4"
              >
                Xem đường đi
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-14 grid max-w-xl grid-cols-4 gap-2 sm:gap-4"
        >
          {units.map((u) => (
            <div
              key={u.label}
              className="flex min-w-0 flex-col items-center text-center"
            >
              <span className="flex h-12 items-center justify-center font-sans text-3xl font-semibold leading-none tabular-nums text-ivory sm:h-14 sm:text-4xl">
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-sm leading-5 text-ivory/75">
                {u.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Schedule */}
        <div className="mx-auto max-w-4xl">
          <h3 className="text-center font-display text-2xl font-semibold text-gold-light">
            {program.title}
          </h3>
          <p className="mt-2 text-center text-ivory/80">
            Chủ đề: {program.theme} · Câu gốc: {program.verse}
          </p>
          <p className="mt-1 text-center text-sm text-ivory/70">
            HDCT: {program.host}
          </p>

          <div className="mt-8 space-y-8">
            {program.sections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-3 font-display text-2xl font-semibold text-gold-light">
                  {section.title}
                </h4>
                <ol className="space-y-1">
                  {section.items.map((item) => (
                    <li
                      key={item.number}
                      className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 gap-y-1 px-2 py-2 even:bg-ivory/5 sm:grid-cols-[2rem_minmax(0,1fr)_14rem]"
                    >
                      <span className="font-semibold tabular-nums text-gold-light">
                        {item.number}.
                      </span>
                      <span className="font-medium leading-snug">{item.title}</span>
                      {item.performer && (
                        <span className="col-start-2 text-sm leading-snug text-ivory/75 sm:col-start-3 sm:text-right">
                          {item.performer}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
