export interface Leader {
  id: number
  name: string
  role: string
  period: string
  bio: string
  portrait: string
}

export const leaders: Leader[] = [
  {
    id: 1,
    name: 'Mục Sư Nguyễn Văn An',
    role: 'Mục Sư Sáng Lập',
    period: '1976 – 1990',
    bio: 'Người đặt nền móng đầu tiên cho Hội Thánh với lòng tận hiến và đức tin kiên định. Ông đã dẫn dắt cộng đồng qua những năm tháng khó khăn nhất với sự khiêm nhường và yêu thương.',
    portrait:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Mục Sư Trần Đức Bình',
    role: 'Mục Sư Quản Nhiệm',
    period: '1991 – 2010',
    bio: 'Dưới sự dẫn dắt của ông, Hội Thánh bước vào mùa tăng trưởng mạnh mẽ. Ông được biết đến với tấm lòng mục vụ và những bài giảng đầy ơn.',
    portrait:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Mục Sư Lê Thành Công',
    role: 'Mục Sư Quản Nhiệm',
    period: '2011 – nay',
    bio: 'Người mang đến tầm nhìn mới cho thế hệ trẻ. Ông tập trung phát triển chức vụ thanh thiếu niên và mở rộng công tác truyền giáo cộng đồng.',
    portrait:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Bà Mục Sư Phạm Thị Duyên',
    role: 'Phụ Trách Ban Phụ Nữ',
    period: '1985 – nay',
    bio: 'Người mẹ thuộc linh của bao thế hệ phụ nữ trong Hội Thánh. Bà đồng hành cùng các gia đình trong cầu nguyện, chăm sóc và gây dựng đời sống đức tin.',
    portrait:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
]
