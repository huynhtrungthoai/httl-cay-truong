import { Images } from '../assets'
import { FiMapPin } from 'react-icons/fi'
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
    <main className="min-h-screen bg-ivory">
      <section className="relative isolate overflow-hidden bg-brown-dark text-ivory">
        <img
          src={Images.Banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-brown-dark/70 md:bg-gradient-to-r md:from-brown-dark/95 md:via-brown-dark/65 md:to-brown-dark/15" />
        <div className="relative mx-auto max-w-7xl px-6 py-7 sm:px-10 md:px-16 md:py-10">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={Images.Logo} alt="" className="h-11 w-auto" />
              <span className="text-base font-semibold sm:text-lg">Chi Hội Cây Trường</span>
            </div>
            <span className="hidden text-base text-gold-light sm:block">
              1976 — 2026
            </span>
          </header>

          <div className="mt-9 max-w-3xl pb-2 sm:mt-11 md:mt-12 md:pb-5">
            <p className="text-base font-semibold text-gold-light sm:text-lg">
              Đại lễ kỷ niệm thành lập
            </p>
            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-display text-[76px] leading-none text-gold-light sm:text-[92px] md:text-[112px]">
                50
              </span>
              <span className="font-serif text-3xl italic sm:text-4xl">năm</span>
            </div>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Hội Thánh Tin Lành Cây Trường
            </h1>
            <p className="mt-4 text-base font-semibold text-gold-light sm:text-lg">
              17 tháng 11 năm 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-t-4 border-gold bg-ivory text-brown">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:px-10 md:grid-cols-[1.2fr_0.8fr] lg:px-16">
          <div>
            <p className="text-lg font-semibold">Website chính thức mở sau</p>
            <div className="mt-4 grid max-w-xl grid-cols-4 divide-x divide-brown/20">
              {units.map((unit) => (
                <div key={unit.label} className="flex min-w-0 flex-col items-center px-1 text-center">
                  <span className="flex h-12 items-center justify-center font-sans text-3xl font-semibold leading-none tabular-nums sm:h-14 sm:text-4xl">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="mt-1 text-sm leading-5 text-brown-light">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-brown-light">
              00:00 · 16/11/2026 (giờ Việt Nam)
            </p>
          </div>

          <div className="border-t border-brown/20 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-lg font-semibold">Địa điểm</p>
            <address className="mt-3 not-italic leading-relaxed text-brown-light">
              Hội Thánh Tin Lành Cây Trường<br />
              Tổ 3, ấp Ông Chài, xã Trừ Văn Thố, TP. Hồ Chí Minh
            </address>
            <a
              href="https://maps.app.goo.gl/kvsziDe91H6fXTVeA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-brown underline decoration-gold underline-offset-4"
            >
              <FiMapPin size={18} />
              Xem đường đi
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
