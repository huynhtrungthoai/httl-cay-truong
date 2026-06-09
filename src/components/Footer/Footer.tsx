import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FaFacebookF, FaYoutube } from 'react-icons/fa'

const quickLinks = [
  { id: 'journey', label: 'Hành Trình' },
  { id: 'timeline', label: 'Dòng Thời Gian' },
  { id: 'leaders', label: 'Mục Sư' },
  { id: 'gallery', label: 'Hình Ảnh' },
  { id: 'celebration', label: 'Lễ Kỷ Niệm' },
]

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-brown-dark text-ivory">
      <div className="container-narrow px-6 py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient font-display text-xl font-bold text-brown-dark">
                50
              </span>
              <div>
                <p className="font-display text-lg font-semibold">
                  Chi Hội Cây Trường
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  1976 — 2026
                </p>
              </div>
            </div>
            <p className="max-w-xs font-serif italic leading-relaxed text-ivory/70">
              “Hãy cảm tạ Đức Giê-hô-va, vì Ngài là thiện; sự nhân từ Ngài còn
              đến đời đời.”
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-gold-light">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-ivory/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-gold-light">
              Liên Hệ
            </h4>
            <ul className="space-y-3 text-ivory/70">
              <li className="flex items-center gap-3">
                <FiMapPin className="shrink-0 text-gold" />
                Cây Trường, Bình Dương
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-gold" />
                (+84) 000 000 000
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-gold" />
                lienhe@chihoicaytruong.vn
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-brown-dark"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-brown-dark"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/15 pt-6 text-center text-sm text-ivory/50">
          <p>
            © {new Date().getFullYear()} Chi Hội Cây Trường. Kỷ niệm 50 năm thành
            lập — Soli Deo Gloria.
          </p>
        </div>
      </div>
    </footer>
  )
}
