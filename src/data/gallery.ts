export type GalleryCategory =
  | 'Founding Years'
  | 'Worship'
  | 'Community'
  | 'Youth Ministry'
  | 'Missions'
  | 'Anniversary Events'

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: GalleryCategory
}

export const galleryCategories: { key: GalleryCategory; label: string }[] = [
  { key: 'Founding Years', label: 'Những Năm Đầu' },
  { key: 'Worship', label: 'Thờ Phượng' },
  { key: 'Community', label: 'Cộng Đồng' },
  { key: 'Youth Ministry', label: 'Thanh Thiếu Niên' },
  { key: 'Missions', label: 'Truyền Giáo' },
  { key: 'Anniversary Events', label: 'Lễ Kỷ Niệm' },
]

export const gallery: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80',
    alt: 'Ngôi nhà nguyện đầu tiên',
    category: 'Founding Years',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=900&q=80',
    alt: 'Bên trong thánh đường',
    category: 'Worship',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80',
    alt: 'Cộng đồng tín hữu nhóm lại',
    category: 'Community',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80',
    alt: 'Ban thanh thiếu niên',
    category: 'Youth Ministry',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80',
    alt: 'Chuyến truyền giáo vùng xa',
    category: 'Missions',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    alt: 'Đêm kỷ niệm đặc biệt',
    category: 'Anniversary Events',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=900&q=80',
    alt: 'Ban hát ngợi khen',
    category: 'Worship',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    alt: 'Buổi nhóm cầu nguyện ban đầu',
    category: 'Founding Years',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80',
    alt: 'Bữa ăn thông công',
    category: 'Community',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=900&q=80',
    alt: 'Trại hè thanh niên',
    category: 'Youth Ministry',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
    alt: 'Phát quà từ thiện',
    category: 'Missions',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=900&q=80',
    alt: 'Lễ tạ ơn 50 năm',
    category: 'Anniversary Events',
  },
]
