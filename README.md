# Kỷ Niệm 50 Năm — Chi Hội Cây Trường

Website kỷ niệm 50 năm thành lập Chi Hội Cây Trường (1976–2026).
Xây dựng bằng **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion**.

> 📄 Đặc tả thiết kế gốc nằm trong [`README_Church_50th_Anniversary.md`](./README_Church_50th_Anniversary.md).

---

## Yêu cầu (Requirements)

- **Node.js** ≥ 18 (khuyến nghị 20+)
- **npm** ≥ 9 (đi kèm Node)

Kiểm tra phiên bản:

```bash
node --version
npm --version
```

---

## Cài đặt & Chạy (Getting Started)

```bash
# 1. Cài đặt thư viện
npm install

# 2. Chạy môi trường phát triển (dev server)
npm run dev
```

Mở trình duyệt tại địa chỉ hiển thị trong terminal, mặc định:
👉 **http://localhost:5173**

Dev server hỗ trợ **hot reload** — mọi thay đổi trong `src/` sẽ tự cập nhật.

---

## Các lệnh có sẵn (Scripts)

| Lệnh              | Mô tả                                                      |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Chạy dev server với hot reload                             |
| `npm run build`   | Build bản production (TypeScript check + Vite) vào `dist/` |
| `npm run preview` | Xem thử bản đã build trên máy local                       |
| `npm run lint`    | Kiểm tra mã nguồn bằng ESLint                              |

Build và xem thử bản production:

```bash
npm run build
npm run preview
```

---

## Cấu trúc dự án (Project Structure)

```text
src/
├── components/
│   ├── Navbar/            # Thanh điều hướng dính, menu mobile
│   ├── Hero/              # Màn hình mở đầu + parallax
│   ├── HistoryOverview/   # Hành trình 50 năm (3 cột mốc)
│   ├── Timeline/          # Dòng thời gian lịch sử
│   ├── Leaders/           # Các mục sư & người hầu việc Chúa
│   ├── Gallery/           # Thư viện ảnh + lightbox + lọc
│   ├── VideoArchive/      # Video (Swiper + YouTube embed)
│   ├── AnniversaryEvent/  # Đại lễ + đồng hồ đếm ngược
│   ├── Tribute/           # Lời tri ân
│   ├── Footer/            # Chân trang
│   └── SectionHeading.tsx # Tiêu đề mục dùng chung
├── data/                  # Dữ liệu: timeline, leaders, gallery, videos
├── lib/motion.ts          # Hiệu ứng Framer Motion dùng chung
├── pages/Home.tsx         # Trang chính, ghép các section
├── App.tsx
├── main.tsx
└── index.css              # Tailwind + design system
```

---

## Tuỳ chỉnh nội dung (Customization)

| Muốn thay đổi…          | Sửa file                                                   |
| ----------------------- | --------------------------------------------------------- |
| Dòng thời gian lịch sử  | `src/data/timeline.ts`                                    |
| Thông tin mục sư        | `src/data/leaders.ts`                                     |
| Ảnh thư viện            | `src/data/gallery.ts`                                     |
| Video YouTube           | `src/data/videos.ts`                                      |
| Ảnh Hero / banner       | Hằng số `HERO_IMAGE` trong `Hero.tsx`, banner trong `AnniversaryEvent.tsx` |
| Ngày đại lễ (đếm ngược) | Hằng số `EVENT_DATE` trong `AnniversaryEvent.tsx`         |
| Màu sắc / phông chữ     | `tailwind.config.js`                                      |

> 🖼️ Ảnh hiện dùng link mẫu từ Unsplash. Thay bằng ảnh thật của Hội Thánh
> bằng cách cập nhật các đường dẫn trong `src/data/*.ts`.

---

## Triển khai (Deployment)

Sau khi `npm run build`, thư mục `dist/` chứa toàn bộ web tĩnh, có thể đưa lên
**Vercel**, **Netlify**, **GitHub Pages** hoặc bất kỳ hosting tĩnh nào.

```bash
npm run build      # tạo thư mục dist/
# rồi upload nội dung dist/ lên hosting
```

---

_Soli Deo Gloria — Mọi vinh hiển thuộc về một mình Đức Chúa Trời._
