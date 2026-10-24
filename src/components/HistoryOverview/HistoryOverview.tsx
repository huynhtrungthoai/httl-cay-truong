import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  GiSprout,
  GiCandleLight,
  GiOakLeaf,
  GiChurch,
  GiVillage,
  GiDove,
} from "react-icons/gi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import SectionHeading from "../SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import foundingImage from "../../assets/gallery/[GĐ1] gio tho phuong 05.webp";
import silentImage from "../../assets/gallery/[GĐ1] gio tho phuong.webp";
import reopeningImage from "../../assets/gallery/TĐ. ĐTT 02.webp";
import buildingImage from "../../assets/gallery/2005 Adobe Scan 7 Aug 2026 (21).webp";
import growthImage from "../../assets/gallery/Adobe Scan 7 Aug 2026 (20).webp";
import continuingImage from "../../assets/gallery/1791261259883_1084442557143795285_1084442557143795285_d8892794a2f55af87195ecc4b4d63fdf.webp";

interface Milestone {
  icon: IconType;
  era: string;
  years: string;
  description: string;
  highlights: string[];
  image: string;
}

const milestones: Milestone[] = [
  {
    icon: GiSprout,
    era: "Thời Kỳ Đầu",
    years: "1976 – 1978",
    description:
      "Các gia đình tín hữu đầu tiên đến vùng kinh tế mới Cây Trường, cùng dựng nhà nguyện vách đất, mái tranh — nghèo vật chất nhưng giàu tình yêu thương.",
    highlights: [
      "12/1976: TĐ Phan Quang Vũ làm Chủ tọa Hội Thánh",
      "HTTL Sài Gòn hết lòng giúp đỡ",
    ],
    image: foundingImage,
  },
  {
    icon: GiCandleLight,
    era: "Thời Kỳ Thầm Lặng",
    years: "1978 – 1988",
    description:
      "Gần mười năm gian nan, con cái Chúa tản lạc. Những người ở lại vẫn âm thầm cầu nguyện, giữ ngọn lửa đức tin không tắt.",
    highlights: [
      "7/1978: Ms Nguyễn Hoàng Oanh chủ tọa",
      "4/1982: Nhóm học Kinh Thánh lúc 3–4 giờ khuya",
    ],
    image: silentImage,
  },
  {
    icon: GiOakLeaf,
    era: "Thời Kỳ Tái Lập",
    years: "1988 – 1993",
    description:
      "Hội Thánh được phép mở cửa lại, từ nhóm mỗi tháng một lần đến thờ phượng mỗi Chúa Nhật.",
    highlights: [
      "12/1988: Nhóm tại nhà Ông Bà Nguyễn Thành Tâm",
      "1989: TĐ Đỗ Trung Tín phụ trách linh vụ",
    ],
    image: reopeningImage,
  },
  {
    icon: GiChurch,
    era: "Thời Kỳ Xây Dựng",
    years: "1993 – 2008",
    description:
      "Dưới sự đặc trách của TĐ Nguyễn Ngọc Thanh, con cái Chúa đồng lòng dâng hiến đất và xây dựng Đền Thờ.",
    highlights: [
      "24/8/2004: Đặt viên đá đầu tiên",
      "4/2008: Cung hiến Đền Thờ",
    ],
    image: buildingImage,
  },
  {
    icon: GiVillage,
    era: "Thời Kỳ Mở Mang",
    years: "2008 – 2016",
    description:
      "Hội Thánh tự lập, mở các điểm nhóm Tân Hưng, Lai Uyên, đồng hành cùng anh em người Tà Mun tại Sóc 5 và bắt đầu khám chữa bệnh miễn phí cho cộng đồng.",
    highlights: [
      "7/2010: Được công nhận Chi Hội Tự Lập",
      "2010: Bắt đầu giúp đỡ anh em Tà Mun tại Sóc 5",
      "26/4/2012: TĐ Bùi Minh Quyền làm Quản nhiệm",
      "26/4/2016: Khánh thành Nhà Nguyện Lai Uyên",
    ],
    image: growthImage,
  },
  {
    icon: GiDove,
    era: "Thời Kỳ Tiếp Nối",
    years: "2016 – 2026",
    description:
      "Vượt qua mùa dịch Covid-19 bằng những giờ nhóm trực tuyến và tình tương trợ, Hội Thánh tiếp tục phục vụ cộng đồng qua khám mắt, tặng kính, Thánh Kinh Hè và truyền giảng Giáng Sinh, hướng về Đại Mạng Lệnh.",
    highlights: [
      "2017: Nhóm tại Bàu Bàng; Giáng Sinh hằng năm tại Sóc 5",
      "3/2021: Ms Bùi Minh Quyền nhận nhiệm sở HTTL Nhơn Phú",
      "7/2021: Nhóm trực tuyến, Ms Nguyễn Văn To tạm kiêm nhiệm",
      "18/5/2022: Ms Nguyễn Đức làm Quản nhiệm",
      "2026: Lễ Kỷ Niệm 50 Năm Thành Lập",
    ],
    image: continuingImage,
  },
];

export default function HistoryOverview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const step = card ? card.clientWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-blue/30 bg-white text-blue shadow-elegant transition-all hover:bg-blue hover:text-white disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="journey" className="section-padding bg-surface">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Nửa Thế Kỷ Ân Điển"
          title="Hành Trình 50 Năm"
          subtitle="Sáu chặng đường của một câu chuyện đức tin không ngừng nghỉ"
        />

        <div className="mb-6 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Xem thời kỳ trước"
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            className={arrowClass}
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Xem thời kỳ tiếp theo"
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            className={arrowClass}
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        <motion.div
          ref={trackRef}
          onScroll={updateArrows}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 pt-3 [scrollbar-width:thin] md:-mx-2 md:px-2"
        >
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.article
                key={m.era}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-elegant transition-shadow duration-500 hover:shadow-blue sm:w-[360px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.era}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue text-white shadow-blue">
                    <Icon size={28} />
                  </span>
                  <span className="absolute bottom-4 right-4 font-display text-4xl font-bold text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue">
                    {m.years}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                    {m.era}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {m.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-blue/10 pt-5">
                    {m.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-ink"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
