export interface VideoItem {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  category: "SummerBible" | "Christmas";
}

export const videos: VideoItem[] = [
  {
    id: 1,
    title: "Thánh Kinh Hè 2023",
    description:
      "Những khoảnh khắc vui tươi và ý nghĩa trong chương trình Thánh Kinh Hè 2023 tại HTTL Cây Trường.",
    youtubeId: "N2mSDG7ahUc",
    category: "SummerBible",
  },
  {
    id: 2,
    title: "Thánh Kinh Hè 2025",
    description:
      "Chương trình Thánh Kinh Hè 2025 cùng các em thiếu nhi tại HTTL Cây Trường.",
    youtubeId: "6nIOCGCHwno",
    category: "SummerBible",
  },
  {
    id: 3,
    title: "Thánh Kinh Hè 2025 – Điểm Nhóm Bà Cang 5",
    description:
      "Thánh Kinh Hè 2025 tại điểm nhóm Bà Cang 5, nơi Lời Chúa được gieo vào lòng các em nhỏ.",
    youtubeId: "ixX6PPr0MhE",
    category: "SummerBible",
  },
  {
    id: 4,
    title: "Múa Bóng: Lí Do Ngài Đến",
    description:
      "Tiết mục múa bóng trong chương trình Truyền Giảng Giáng Sinh 2025 của Chi Hội Cây Trường.",
    youtubeId: "AuzVyRS-p-s",
    category: "Christmas",
  },
  {
    id: 5,
    title: "Kịch: Chúa Jesus Giáng Sinh",
    description:
      "Vở kịch tái hiện sự giáng sinh của Chúa Jesus trong chương trình Truyền Giảng Giáng Sinh 2025.",
    youtubeId: "X_v-I2AkSro",
    category: "Christmas",
  },
  {
    id: 6,
    title: "Kịch: Chúa Vào Đời",
    description:
      "Vở kịch của các em thiếu nhi trong chương trình Truyền Giảng Giáng Sinh Thiếu Nhi 2025.",
    youtubeId: "lvpumMt1DRE",
    category: "Christmas",
  },
  {
    id: 7,
    title: "Thánh Kinh Hè 2026 – Điểm Nhóm Bà Cang 5",
    description:
      "Thánh Kinh Hè 2026 tại điểm nhóm Bà Cang 5, tiếp nối hành trình gieo Lời Chúa cho các em nhỏ.",
    youtubeId: "xF10nadRSkw",
    category: "SummerBible",
  },
  {
    id: 8,
    title: "Thánh Kinh Hè 2026",
    description:
      "Chương trình Thánh Kinh Hè 2026 cùng các em thiếu nhi tại HTTL Cây Trường.",
    youtubeId: "6vMx1FUZ8aE",
    category: "SummerBible",
  },
];
