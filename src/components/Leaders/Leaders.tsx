import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionHeading from "../SectionHeading";
import leaders from "../../data/pastors.json";

const PAGE_SIZE = 3;

export default function Leaders() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleLeaders = leaders.slice(0, visibleCount);

  return (
    <section id="leaders" className="section-padding bg-surface">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Những Tôi Tớ Trung Tín"
          title="Các Mục Sư & Người Hầu Việc Chúa"
          subtitle="Những tấm lòng đã tận hiến gây dựng Hội Thánh qua các thế hệ"
        />

        <div id="leader-list" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visibleLeaders.map((leader) => (
            <article
              key={leader.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-elegant"
            >
              <div className="relative h-72 overflow-hidden">
                {leader.portrait && leader.portrait !== "N/A" ? (
                  <img
                    src={leader.portrait}
                    alt={`Hình ảnh ${leader.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`Chưa có hình ${leader.name}`}
                    className="flex h-full w-full items-start justify-center bg-gradient-to-b from-navy/20 to-navy/40"
                  >
                    {/* Generic avatar silhouette for leaders without a portrait */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="mt-8 h-44 w-44 text-surface/70"
                    >
                      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-coral">
                    {leader.role}
                  </p>
                  <h3 className="font-display text-xl font-bold text-surface">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-surface/80">{leader.period}</p>
                </div>
              </div>

              <p className="p-5 text-sm leading-relaxed text-muted">
                {leader.bio}
              </p>
            </article>
          ))}
        </div>

        {visibleCount < leaders.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              className="btn-primary"
              aria-controls="leader-list"
              onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, leaders.length))}
            >
              Xem thêm
              <FiChevronDown aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
