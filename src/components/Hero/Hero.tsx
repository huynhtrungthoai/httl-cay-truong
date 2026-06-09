import { motion, useScroll, useTransform } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  const { scrollY } = useScroll()
  // Parallax: background drifts slower than the scroll.
  const y = useTransform(scrollY, [0, 600], [0, 160])
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.55, 0.85])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-20 scale-110 bg-cover bg-center"
      >
        <img
          src={HERO_IMAGE}
          alt="Thánh đường Chi Hội Cây Trường"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brown-dark/70 via-brown-dark/60 to-brown-dark/90"
      />

      <div className="container-narrow px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-gold"
        >
          Kỷ Niệm Vàng · 1976 — 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Kỷ Niệm <span className="text-shimmer">50 Năm</span>
          <br />
          Thành Lập Chi Hội Cây Trường
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mx-auto mt-8 max-w-2xl"
        >
          <p className="font-serif text-xl italic text-ivory/90 md:text-2xl">
            “Hãy cảm tạ Đức Giê-hô-va, vì Ngài là thiện;
            <br className="hidden sm:block" /> sự nhân từ Ngài còn đến đời đời.”
          </p>
          <p className="mt-2 text-sm uppercase tracking-widest text-gold">
            Thi Thiên 107:1
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button onClick={() => scrollTo('journey')} className="btn-gold">
            Khám Phá Hành Trình
          </button>
          <button onClick={() => scrollTo('celebration')} className="btn-outline">
            Lễ Kỷ Niệm 50 Năm
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('journey')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/80"
        aria-label="Cuộn xuống"
      >
        <FiChevronDown size={32} className="animate-float" />
      </motion.button>
    </section>
  )
}
