import { AnimatePresence, motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { Images } from '../assets'
import { fadeUp, staggerContainer } from '../lib/motion'

interface ComingSoonProps {
  remainingMs: number
}

export default function ComingSoon({ remainingMs }: ComingSoonProps) {
  const total = Math.max(0, Math.ceil(remainingMs / 1000))
  const units = [
    { label: 'Ngày', value: Math.floor(total / 86400) },
    { label: 'Giờ', value: Math.floor((total % 86400) / 3600) },
    { label: 'Phút', value: Math.floor((total % 3600) / 60) },
    { label: 'Giây', value: total % 60 },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-navy-dark text-surface">
      <section className="relative isolate flex flex-1 flex-col overflow-hidden">
        {/* Background photo with a slow settle-in zoom */}
        <motion.img
          src={Images.Banner}
          alt=""
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
        />
        {/* Overlays keep the copy legible over the bright photo */}
        <div className="absolute inset-0 -z-10 bg-navy-dark/75 md:bg-transparent md:bg-gradient-to-r md:from-navy-dark/95 md:via-navy-dark/70 md:to-navy-dark/25" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-7 sm:px-10 md:px-16 md:py-10">
          <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img src={Images.Logo} alt="" className="h-11 w-auto drop-shadow-lg" />
              <span className="text-base font-semibold sm:text-lg">Chi Hội Cây Trường</span>
            </div>
            <span className="hidden rounded-full border border-coral/40 bg-navy-dark/60 px-4 py-1.5 text-sm font-semibold tracking-[0.3em] text-coral backdrop-blur-sm sm:block">
              1976 — 2026
            </span>
          </motion.header>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex max-w-3xl flex-1 flex-col justify-center py-12 [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]"
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-surface/90 sm:text-base sm:tracking-[0.3em]"
            >
              <span className="h-px w-8 shrink-0 bg-coral sm:w-10" />
              Đại lễ kỷ niệm thành lập
            </motion.p>

            <motion.div variants={fadeUp} className="mt-3 flex items-baseline gap-3">
              <span className="bg-gradient-to-b from-white to-blue-light bg-clip-text font-display text-[88px] font-bold leading-none text-transparent [text-shadow:none] sm:text-[112px] md:text-[136px]">
                50
              </span>
              <span className="font-serif text-4xl italic text-coral sm:text-5xl">năm</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              Hội Thánh Tin Lành Cây Trường
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 inline-flex w-fit items-center gap-2 text-base font-semibold text-coral sm:text-lg"
            >
              <FiCalendar aria-hidden="true" />
              17 tháng 11 năm 2026
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="mt-8 max-w-xl border-l-2 border-coral/70 pl-5"
            >
              <p className="font-serif text-xl italic leading-relaxed text-white sm:text-2xl">
                “Hãy cảm tạ Đức Giê-hô-va, vì Ngài là thiện; sự nhân từ Ngài còn đến đời đời.”
              </p>
              <footer className="mt-2 text-sm font-bold uppercase tracking-widest text-coral">
                — Thi Thiên 107:1
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-surface/80">
              Website chính thức mở sau
            </p>
            <div className="mt-4 grid max-w-xl grid-cols-4 gap-3 sm:gap-4">
              {units.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center rounded-2xl border border-surface/15 bg-navy-dark/55 px-1 py-4 shadow-elegant backdrop-blur-md sm:py-5"
                >
                  <span className="relative flex h-10 items-center justify-center overflow-hidden font-sans text-3xl font-semibold leading-none tabular-nums text-white sm:h-12 sm:text-4xl">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={unit.value}
                        initial={{ y: '-60%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '60%', opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      >
                        {String(unit.value).padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-widest text-surface/70 sm:text-sm">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-surface/60">
              00:00 · 16/11/2026 (giờ Việt Nam)
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="border-t border-surface/10 bg-navy-dark"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-10 md:flex-row md:items-center md:justify-between md:px-16">
          <address className="flex items-start gap-3 not-italic leading-relaxed text-surface/80">
            <FiMapPin className="mt-1 shrink-0 text-coral" size={18} aria-hidden="true" />
            <span>
              <span className="font-semibold text-surface">Hội Thánh Tin Lành Cây Trường</span>
              <br />
              Tổ 3, ấp Ông Chài, xã Trừ Văn Thố, TP. Hồ Chí Minh
            </span>
          </address>
          <a
            href="https://maps.app.goo.gl/kvsziDe91H6fXTVeA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-fit"
          >
            <FiMapPin size={18} aria-hidden="true" />
            Xem đường đi
          </a>
        </div>
      </motion.section>
    </main>
  )
}
