import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Images } from "../../assets";

const navLinks = [
  { id: "hero", label: "Trang Chủ" },
  { id: "journey", label: "Hành Trình" },
  { id: "timeline", label: "Dòng Thời Gian" },
  { id: "leaders", label: "Mục Sư" },
  { id: "gallery", label: "Hình Ảnh" },
  { id: "videos", label: "Video" },
  { id: "celebration", label: "Lễ Kỷ Niệm" },
  { id: "gratitude", label: "Tri Ân" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/95 shadow-elegant backdrop-blur-md"
          : "bg-navy-dark/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between px-6 py-4 lg:px-12">
        <button
          onClick={() => handleClick("hero")}
          className="flex items-center gap-3 text-left"
          aria-label="Về đầu trang"
        >
          <img
            src={Images.Logo}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 object-contain"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-semibold text-surface">
              Chi Hội Cây Trường
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-coral">
              1976 — 2026
            </span>
          </span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-surface/90 transition-colors hover:text-coral"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-surface lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-navy-dark/98 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className="w-full rounded-lg px-4 py-3 text-left text-base font-medium text-surface/90 transition-colors hover:bg-surface/10 hover:text-coral"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
