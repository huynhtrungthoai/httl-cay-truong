import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'
import SectionHeading from '../SectionHeading'
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from '../../data/gallery'
import { viewportOnce } from '../../lib/motion'

type Filter = 'all' | GalleryCategory

const COLLAPSED_ROWS = 3

// Mirrors the grid's breakpoints: 1 column, sm:2, lg:3.
function useGridColumns() {
  const getColumns = () =>
    window.matchMedia('(min-width: 1024px)').matches
      ? 3
      : window.matchMedia('(min-width: 640px)').matches
        ? 2
        : 1
  const [columns, setColumns] = useState(getColumns)

  useEffect(() => {
    const update = () => setColumns(getColumns())
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return columns
}

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('Founding Years')
  const [index, setIndex] = useState(-1)
  const [expanded, setExpanded] = useState(false)
  const columns = useGridColumns()

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? gallery
        : gallery.filter((img) => img.category === filter),
    [filter],
  )

  const collapsedCount = columns * COLLAPSED_ROWS
  const visible = expanded ? filtered : filtered.slice(0, collapsedCount)

  // Lightbox browses the whole filtered set, not just the visible rows.
  const slides = filtered.map((img) => ({ src: img.src, alt: img.alt }))

  const changeFilter = (next: Filter) => {
    setFilter(next)
    setExpanded(false)
  }

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
            onClick={() => changeFilter('all')}
            label="Tất Cả"
          />
          {galleryCategories.map((cat) => (
            <FilterButton
              key={cat.key}
              active={filter === cat.key}
              onClick={() => changeFilter(cat.key)}
              label={cat.label}
            />
          ))}
        </div>

        {/* Uniform grid so the collapsed view is exactly COLLAPSED_ROWS rows */}
        <motion.div
          id="gallery-grid"
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visible.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4 }}
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl shadow-elegant focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > collapsedCount && (
          <div className="mt-12 text-center">
            <button
              type="button"
              className="btn-primary"
              aria-controls="gallery-grid"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
            >
              {expanded ? 'Thu gọn' : `Xem tất cả (${filtered.length} ảnh)`}
              {expanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
            </button>
          </div>
        )}

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={slides}
          plugins={[Counter]}
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
          ? 'bg-blue text-white shadow-blue'
          : 'border border-navy/20 text-muted hover:border-blue hover:text-blue'
      }`}
    >
      {label}
    </button>
  )
}
