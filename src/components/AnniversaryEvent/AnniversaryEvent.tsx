import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { celebration } from "../../data/event";

const EVENT_DATE = new Date(celebration.startsAt);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / 86_400_000),
    hours: Math.floor((clamped / 3_600_000) % 24),
    minutes: Math.floor((clamped / 60_000) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function AnniversaryEvent() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds },
  ];

  return (
    <section
      id="celebration"
      className="relative overflow-hidden section-padding text-surface"
    >
      {/* Banner background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=2000&q=80"
          alt="Lễ kỷ niệm"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-navy-dark/85" />

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
            className="flex items-center gap-4 rounded-2xl border border-blue-light/30 bg-navy-dark/50 p-6 backdrop-blur-sm"
          >
            <FiCalendar className="shrink-0 text-blue-light" size={32} />
            <div>
              <p className="text-xs uppercase tracking-widest text-cream">
                Thời Gian
              </p>
              <p className="font-display text-lg font-semibold">
                {celebration.timeLabel}
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 rounded-2xl border border-blue-light/30 bg-navy-dark/50 p-6 backdrop-blur-sm"
          >
            <FiMapPin className="shrink-0 text-blue-light" size={32} />
            <div>
              <p className="text-xs uppercase tracking-widest text-cream">
                Địa Điểm
              </p>
              <p className="font-display text-lg font-semibold">
                {celebration.name}
              </p>
              <p className="mt-1 text-sm text-surface/80">
                {celebration.address}
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
          className="mx-auto grid max-w-2xl grid-cols-4 gap-3 sm:gap-6"
        >
          {units.map((u) => (
            <div
              key={u.label}
              className="rounded-2xl border border-blue-light/30 bg-gradient-to-b from-navy-dark/70 to-navy/40 py-6 text-center backdrop-blur-sm"
            >
              <span className="block font-display text-3xl font-bold text-accent sm:text-5xl">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-widest text-surface/70 sm:text-sm">
                {u.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
