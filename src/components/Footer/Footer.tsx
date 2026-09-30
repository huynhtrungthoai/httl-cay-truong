import { FiMapPin, FiMail, FiCalendar } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { Images } from "../../assets";
import { celebration } from "../../data/event";

const quickLinks = [
  { id: "journey", label: "Hành Trình" },
  { id: "timeline", label: "Dòng Thời Gian" },
  { id: "leaders", label: "Mục Sư" },
  { id: "gallery", label: "Hình Ảnh" },
  { id: "celebration", label: "Lễ Kỷ Niệm" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-navy-dark text-surface">
      <div className="container-narrow px-6 py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={Images.Logo}
                alt=""
                loading="lazy"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 object-contain"
              />
              <div>
                <p className="font-display text-lg font-semibold">
                  Chi Hội Cây Trường
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-cream">
                  1976 — 2026
                </p>
              </div>
            </div>
            <p className="max-w-xs font-serif italic leading-relaxed text-surface/70">
              “Hãy cảm tạ Đức Giê-hô-va, vì Ngài là thiện; sự nhân từ Ngài còn
              đến đời đời.”
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-cream">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-surface/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-cream">
              Liên Hệ
            </h4>
            <ul className="space-y-3 text-surface/70">
              <li className="flex items-center gap-3">
                <FiMapPin className="shrink-0 text-blue-light" />
                {celebration.address}
              </li>
              <li className="flex items-center gap-3">
                <FiCalendar className="shrink-0 text-blue-light" />
                Lễ Cảm Tạ Chúa: {celebration.timeLabel}
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-blue-light" />
                httlcaytruong@gmail.com
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-light/40 text-blue-light transition-colors hover:bg-blue hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-light/40 text-blue-light transition-colors hover:bg-blue hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-light/20 pt-6 text-center text-sm text-surface/50">
          <p>
            © {new Date().getFullYear()} Chi Hội Cây Trường. Kỷ niệm 50 năm
            thành lập.
          </p>
        </div>
      </div>
    </footer>
  );
}
