import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionHeading from '../SectionHeading'
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from '../../data/gallery'
import { viewportOnce } from '../../lib/motion'

type Filter = 'all' | GalleryCategory

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const [index, setIndex] = useState(-1)

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? gallery
        : gallery.filter((img) => img.category === filter),
    [filter],
  )

  const slides = filtered.map((img) => ({ src: img.src, alt: img.alt }))

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Bảo Tàng Ký Ức"
          title="Thư Viện Hình Ảnh"
          subtitle="Những khoảnh khắc thiêng liêng được lưu giữ qua năm tháng"
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <FilterButton
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            label="Tất Cả"
          />
          {galleryCategories.map((cat) => (
            <FilterButton
              key={cat.key}
              active={filter === cat.key}
              onClick={() => setFilter(cat.key)}
              label={cat.label}
            />
          ))}
        </div>

        {/* Masonry layout via CSS columns */}
        <motion.div
          layout
          className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4 }}
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl shadow-elegant focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brown-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-4 text-left text-sm font-medium text-ivory">
                    {img.alt}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  )
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? 'bg-gold-gradient text-brown-dark shadow-gold'
          : 'border border-brown/20 text-brown-light hover:border-gold hover:text-gold'
      }`}
    >
      {label}
    </button>
  )
}
