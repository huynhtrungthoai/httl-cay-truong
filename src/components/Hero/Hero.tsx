import { motion, useScroll, useTransform } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Images } from "../../assets";

const HERO_IMAGE = Images.Banner;

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax: background drifts slower than the scroll.
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.8, 0.95]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

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
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-dark/70 via-navy-dark/60 to-navy-dark/90"
      />
      {/* Center vignette so the copy stays legible over the bright photo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(8,42,85,0.7)_0%,rgba(8,42,85,0.35)_45%,transparent_75%)]" />

      <div className="container-narrow px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mb-4 w-fit rounded-full border border-coral/40 bg-navy-dark/75 px-5 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-coral backdrop-blur-sm"
        >
          1976 — 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-white [text-shadow:0_4px_20px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Kỷ Niệm <span className="text-accent">50 Năm</span>
          <br />
          Thành Lập Chi Hội Cây Trường
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-surface/15 bg-navy-dark/60 px-6 py-5 shadow-elegant backdrop-blur-md md:px-10 md:py-6"
        >
          <p className="font-serif text-xl font-medium italic leading-relaxed text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] md:text-2xl">
            “Hãy cảm tạ Đức Giê-hô-va, vì Ngài là thiện;
            <br className="hidden sm:block" /> sự nhân từ Ngài còn đến đời đời.”
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-widest text-coral [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
            — Thi Thiên 107:1
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button onClick={() => scrollTo("journey")} className="btn-primary">
            Khám Phá Hành Trình
          </button>
          <button
            onClick={() => scrollTo("celebration")}
            className="btn-outline"
          >
            Lễ Kỷ Niệm 50 Năm
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("journey")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface/80"
        aria-label="Cuộn xuống"
      >
        <FiChevronDown size={32} className="animate-float" />
      </motion.button>
    </section>
  );
}
