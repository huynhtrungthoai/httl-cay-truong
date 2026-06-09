export interface VideoItem {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  category: "Documentary" | "Interview" | "Anniversary";
}

export const videos: VideoItem[] = [
  {
    id: 1,
    title: "Hành Trình 50 Năm Ân Điển",
    description:
      "Bộ phim tài liệu ghi lại chặng đường nửa thế kỷ hình thành và phát triển của Chi Hội Cây Trường.",
    youtubeId: "ScMzIvxBSi4",
    category: "Documentary",
  },
  {
    id: 2,
    title: "Lời Chứng Của Những Tín Hữu Đầu Tiên",
    description:
      "Cuộc trò chuyện với các bậc trưởng lão đã đồng hành cùng Hội Thánh từ những ngày đầu thành lập.",
    youtubeId: "aqz-KE-bpKQ",
    category: "Interview",
  },
  {
    id: 3,
    title: "Đêm Tôn Vinh",
    description:
      "Những khoảnh khắc đáng nhớ trong đêm tôn vinh đặc biệt mừng 50 năm thành lập Hội Thánh.",
    youtubeId: "L_jWHffIx5E",
    category: "Anniversary",
  },
];
