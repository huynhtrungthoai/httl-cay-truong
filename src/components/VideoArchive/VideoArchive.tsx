import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SectionHeading from '../SectionHeading'
import { videos } from '../../data/videos'

const categoryLabel: Record<string, string> = {
  Documentary: 'Phim Tài Liệu',
  Interview: 'Phỏng Vấn',
  Anniversary: 'Lễ Kỷ Niệm',
}

export default function VideoArchive() {
  return (
    <section id="videos" className="section-padding bg-brown-dark text-ivory">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Kho Lưu Trữ"
          title="Video & Tư Liệu"
          subtitle="Những thước phim ghi lại hành trình đức tin qua năm tháng"
          light
        />

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={28}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="h-auto">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gold/15 bg-brown/40 shadow-elegant">
                <div className="relative aspect-video w-full overflow-hidden">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-block w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-light">
                    {categoryLabel[video.category]}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ivory">
                    {video.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                    {video.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
