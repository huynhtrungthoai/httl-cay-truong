export type GalleryCategory =
  | "Founding Years"
  | "Growth Years"
  | "Church Building"
  | "Worship"
  | "Christmas"
  | "Youth Ministry"
  | "Missions"
  | "Fellowship";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryCategories: { key: GalleryCategory; label: string }[] = [
  { key: "Founding Years", label: "Những Năm Đầu" },
  { key: "Growth Years", label: "Thời Kỳ Gây Dựng" },
  { key: "Church Building", label: "Xây Dựng Đền Thờ" },
  { key: "Worship", label: "Thờ Phượng & Ca Đoàn" },
  { key: "Christmas", label: "Giáng Sinh" },
  { key: "Youth Ministry", label: "Thiếu Nhi & Thanh Niên" },
  { key: "Missions", label: "Truyền Giảng & Tương trợ" },
  { key: "Fellowship", label: "Thông Công" },
];

// Vite resolves every image in src/assets/gallery to its hashed build URL.
// Keys are NFC-normalized because macOS may store accented filenames as NFD.
const imageUrls = Object.fromEntries(
  Object.entries(
    import.meta.glob<string>("../assets/gallery/*.webp", {
      eager: true,
      import: "default",
    }),
  ).map(([path, url]) => [path.normalize("NFC"), url]),
);

const urlFor = (file: string) =>
  imageUrls[`../assets/gallery/${file}`.normalize("NFC")];

const entries: [file: string, category: GalleryCategory, alt: string][] = [
  // Ảnh nổi bật đầu thư viện
  ['den-tho-cay-truong-2026.webp', 'Church Building', 'Đền thờ Chi Hội Tin Lành Cây Trường nhìn từ trên cao (2026)'],

  // Những năm đầu (1976 – 1993)
  [
    "[GĐ1] gio tho phuong 01.webp",
    "Founding Years",
    "Giờ thờ phượng trong nhà nguyện thuở ban đầu",
  ],
  [
    "[GĐ1] gio tho phuong 03.webp",
    "Founding Years",
    "Bục giảng nhà nguyện mái tranh – “Tôn Vinh Đức Chúa Trời”",
  ],
  [
    "[GĐ1] gio tho phuong 04.webp",
    "Founding Years",
    "Tín hữu nhóm thờ phượng những năm đầu",
  ],
  [
    "[GĐ1] gio tho phuong 05.webp",
    "Founding Years",
    "Con cái Chúa trong nhà nguyện vách đất",
  ],
  [
    "[GĐ1] gio tho phuong.webp",
    "Founding Years",
    "Buổi nhóm thờ phượng thuở ban đầu",
  ],
  [
    "[GĐ1] thanh nien.webp",
    "Founding Years",
    "Ban thanh niên Hội Thánh những năm đầu",
  ],
  [
    "[GĐ1] thieu nhi 01.webp",
    "Founding Years",
    "Lớp thiếu nhi học Lời Chúa dưới tán cây",
  ],
  [
    "[GĐ1] thieu nhi.webp",
    "Founding Years",
    "Các em thiếu nhi Hội Thánh thuở ban đầu",
  ],
  [
    "1970 Adobe Scan 24 Sep 2026 (10) (1).webp",
    "Founding Years",
    "Các gia đình tín hữu mừng Giáng Sinh những năm đầu",
  ],
  [
    "TĐ. Đỗ Trung Tín.webp",
    "Founding Years",
    "Truyền đạo Đỗ Trung Tín và phu nhân",
  ],
  [
    "TĐ. ĐTT 01.webp",
    "Founding Years",
    "Ca đoàn Hội Thánh thời Truyền đạo Đỗ Trung Tín",
  ],
  [
    "TĐ. ĐTT 02.webp",
    "Founding Years",
    "Ảnh tập thể Hội Thánh thời Truyền đạo Đỗ Trung Tín",
  ],

  // Thời kỳ gây dựng (1993 – 2004)
  ["[GĐ2] Nha nguyen.webp", "Growth Years", "Nhà nguyện Chi Hội Cây Trường"],
  [
    "[GĐ2] Nha nguyen 01.webp",
    "Growth Years",
    "Bên trong nhà nguyện với những hàng ghế gỗ",
  ],
  ["[GĐ2] Nha nguyen 02.webp", "Growth Years", "Bục giảng nhà nguyện"],
  [
    "[GĐ2] MS. NGUYEN NGOC THANH.webp",
    "Growth Years",
    "Mục sư Nguyễn Ngọc Thanh cùng con cái Chúa",
  ],
  [
    "[GĐ2] MS. NGUYEN NGOC THANH 04.webp",
    "Growth Years",
    "Mục sư Nguyễn Ngọc Thanh và các tín hữu",
  ],
  [
    "[GĐ2] MS. NGUYEN NGOC THANH 05.webp",
    "Growth Years",
    "Các em thiếu nhi dâng bài hát ngợi khen",
  ],
  [
    "[GĐ2] MS. NGUYEN NGOC THANH 07.webp",
    "Growth Years",
    "Ban hát “Tình Yêu Cho Muôn Dân”",
  ],
  [
    "[GĐ2] MS. NGUYEN NGOC THANH 08.webp",
    "Growth Years",
    "Ảnh lưu niệm cùng quý mục sư, truyền đạo",
  ],
  [
    "1995[GĐ2] MS. NGUYEN NGOC THANH - ĐN.LU.webp",
    "Growth Years",
    "Hội Thánh nhóm lại năm 1995",
  ],
  [
    "1995[GĐ2] MS. NGUYEN NGOC THANH 01.webp",
    "Growth Years",
    "Bữa ăn thông công năm 1995",
  ],
  [
    "1995[GĐ2] MS. NGUYEN NGOC THANH 02.webp",
    "Growth Years",
    "Đi thăm viếng tín hữu trên đường đất đỏ",
  ],
  [
    "1995[GĐ2] MS. NGUYEN NGOC THANH 03.webp",
    "Growth Years",
    "Thông công bên mái nhà tranh",
  ],
  [
    "1995[GĐ2] MS. NGUYEN NGOC THANH 06.webp",
    "Growth Years",
    "Thiếu nhi dâng bài hát “Tình Yêu Cho Muôn Dân”",
  ],
  [
    "1995[GĐ2] MS. NGUYEN NGOC THANH 09.webp",
    "Growth Years",
    "Quý ông bà cùng dùng bữa thông công",
  ],
  [
    "1995[GĐ2] MS. NGUYEN NGOC THANH 10.webp",
    "Growth Years",
    "Con cái Chúa cùng nhau nấu ăn cho ngày vui",
  ],
  ["1995[GĐ2] Thieu nhi.webp", "Growth Years", "Các em thiếu nhi năm 1995"],
  [
    "MS Thanh gio tho phuong.webp",
    "Growth Years",
    "Giờ thờ phượng thời Mục sư Nguyễn Ngọc Thanh",
  ],

  // Xây dựng & cung hiến đền thờ (2004 – 2008)
  [
    "2005 Adobe Scan 7 Aug 2026 (12).webp",
    "Church Building",
    "Hội Thánh bên công trình xây dựng – Xuân 2005",
  ],
  [
    "2005 Adobe Scan 7 Aug 2026 (49).webp",
    "Church Building",
    "Con cái Chúa thăm công trường xây dựng đền thờ",
  ],
  [
    "2005 Adobe Scan 7 Aug 2026 (21).webp",
    "Church Building",
    "Lễ Cảm Tạ Xây Dựng Đền Thờ – Hội Thánh Cây Trường & Chung IL",
  ],
  [
    "Adobe Scan 24 Sep 2026 (18).webp",
    "Church Building",
    "Cổng chào Lễ Cảm Tạ Xây Dựng Đền Thờ",
  ],
  [
    "Adobe Scan 7 Aug 2026 (56).webp",
    "Church Building",
    "Đền thờ trong quá trình xây dựng",
  ],
  [
    "Adobe Scan 7 Aug 2026 (57).webp",
    "Church Building",
    "Phái đoàn Hàn Quốc thăm công trình đền thờ",
  ],
  [
    "Adobe Scan 7 Aug 2026 (61).webp",
    "Church Building",
    "Đại diện HT Masan Chung IL (Hàn Quốc) trong buổi lễ",
  ],
  [
    "Adobe Scan 7 Aug 2026 (16).webp",
    "Church Building",
    "Tín hữu nhóm lại tại công trường",
  ],
  [
    "Adobe Scan 7 Aug 2026 (17).webp",
    "Church Building",
    "Biểu trưng Lễ Cung Hiến Đền Thờ 14/03/2008",
  ],
  [
    "Adobe Scan 7 Aug 2026 (53).webp",
    "Church Building",
    "Lễ Cảm Tạ & Cung Hiến Đền Thờ",
  ],
  [
    "Adobe Scan 7 Aug 2026 (60).webp",
    "Church Building",
    "Ca đoàn trong Lễ Khánh Thành – Cung Hiến Đền Thờ",
  ],

  // Thờ phượng & ca đoàn
  [
    "1005 Adobe Scan 7 Aug 2026 (1).webp",
    "Worship",
    "Giờ thờ phượng đông đủ tín hữu",
  ],
  ["Adobe Scan 7 Aug 2026.webp", "Worship", "Hội chúng trong giờ thờ phượng"],
  [
    "Adobe Scan 7 Aug 2026 (54).webp",
    "Worship",
    "Giờ thờ phượng trong đền thờ mới",
  ],
  [
    "Adobe Scan 7 Aug 2026 (20).webp",
    "Worship",
    "Ảnh tập thể Hội Thánh trong đền thờ",
  ],
  [
    "Adobe Scan 7 Aug 2026 (52).webp",
    "Worship",
    "Hội Thánh chụp ảnh lưu niệm trước bục giảng",
  ],
  ["Adobe Scan 7 Aug 2026 (62).webp", "Worship", "Lễ Báp-têm"],
  [
    "1791261670383_1084442557143795285_1084442557143795285_25cc59235122485cf00b80bb36599144.webp",
    "Worship",
    "Lễ Báp-têm cho các tân tín hữu",
  ],
  [
    "1791261598668_1084442557143795285_1084442557143795285_e49cd3249d7c5caff5544cc94e6b760c.webp",
    "Worship",
    "Giờ thờ phượng tại nhà thờ",
  ],
  [
    "1791292194088_1084442557143795285_1084442557143795285_e52cf650403f7f9f2ab05b389068232e.webp",
    "Worship",
    "Hội Thánh nhóm lại thờ phượng Chúa",
  ],
  [
    "1791293616473_1084442557143795285_1084442557143795285_c8f23ecc148fcbf87a33267b06a9ea3a.webp",
    "Worship",
    "Giờ cầu nguyện trong buổi nhóm",
  ],
  [
    "1791292941332_1084442557143795285_1084442557143795285_90f7c9e5cde5d715f0399ded3df29eac.webp",
    "Worship",
    "Lễ kỷ niệm Chúa chịu thương khó & Phục Sinh",
  ],
  ["Adobe Scan 24 Sep 2026 (1) (2).webp", "Worship", "Ca đoàn tôn vinh Chúa"],
  [
    "Adobe Scan 24 Sep 2026 (3) (2).webp",
    "Worship",
    "Ban hát các chị em trong tà áo dài",
  ],
  [
    "Adobe Scan 24 Sep 2026 (4) (3).webp",
    "Worship",
    "Hội Thánh nhóm lại trong ngày lễ đặc biệt",
  ],
  [
    "Adobe Scan 24 Sep 2026 (6) (2).webp",
    "Worship",
    "Hội Thánh chụp ảnh lưu niệm trong nhà nguyện",
  ],
  [
    "Adobe Scan 24 Sep 2026 (19).webp",
    "Worship",
    "Lễ cảm tạ “Tôn Vinh Ba Ngôi Đức Chúa Trời”",
  ],
  ["Adobe Scan 7 Aug 2026 (11).webp", "Worship", "Lễ Hiếu Kính Cha Mẹ"],
  ["Adobe Scan 7 Aug 2026 (31).webp", "Worship", "Ban chấp sự Hội Thánh"],
  [
    "Adobe Scan 7 Aug 2026 (32).webp",
    "Worship",
    "Ca đoàn dâng bài hát tôn vinh",
  ],
  [
    "Adobe Scan 7 Aug 2026 (36).webp",
    "Worship",
    "Ca đoàn tôn vinh Chúa ngoài trời",
  ],
  [
    "Adobe Scan 7 Aug 2026 (5) (1).webp",
    "Worship",
    "Ca đoàn – “Nhớ Về Gô-gô-tha”",
  ],
  ["Adobe Scan 7 Aug 2026 (5).webp", "Worship", "Ban hát “Đón Chúa Xuân”"],
  [
    "Adobe Scan 7 Aug 2026 (58).webp",
    "Worship",
    "Hội chúng cùng hát ngợi khen",
  ],
  ["Adobe Scan 7 Aug 2026 (7).webp", "Worship", "Ban hát các chị em"],
  ["Adobe Scan 7 Aug 2026 (8) (1).webp", "Worship", "Ảnh lưu niệm Hội Thánh"],

  // Giáng Sinh
  [
    "2000 Adobe Scan 7 Aug 2026 (6) (1).webp",
    "Christmas",
    "Ca đoàn Giáng Sinh – “Danh Chúa Giê-xu”",
  ],
  [
    "2005 Adobe Scan 7 Aug 2026 (1) (1).webp",
    "Christmas",
    "Thiếu nhi mừng Giáng Sinh – “Chúa Bình An”",
  ],
  [
    "2005 Adobe Scan 7 Aug 2026 (4) (1).webp",
    "Christmas",
    "Ca đoàn thiếu nhi mừng Chúa Giáng Sinh – Xuân 2005",
  ],
  [
    "Adobe Scan 24 Sep 2026 (1) (1).webp",
    "Christmas",
    "Lễ Giáng Sinh tại Hội Thánh",
  ],
  [
    "Adobe Scan 24 Sep 2026 (6).webp",
    "Christmas",
    "Ban chấp sự trong Lễ Giáng Sinh",
  ],
  ["Adobe Scan 7 Aug 2026 (10).webp", "Christmas", "Mừng Chúa Giáng Sinh"],
  [
    "Adobe Scan 7 Aug 2026 (2) (1).webp",
    "Christmas",
    "Kịch Giáng Sinh – thiên sứ báo tin mừng",
  ],
  [
    "Adobe Scan 7 Aug 2026 (26).webp",
    "Christmas",
    "Các em thiếu nhi trong vở kịch Giáng Sinh",
  ],
  ["Adobe Scan 7 Aug 2026 (30).webp", "Christmas", "Ca đoàn Giáng Sinh"],
  [
    "Adobe Scan 7 Aug 2026 (33).webp",
    "Christmas",
    "Ca đoàn – “Phước Cho Nhân Loại”",
  ],
  [
    "Adobe Scan 7 Aug 2026 (4).webp",
    "Christmas",
    "Ca đoàn thiếu nhi – “Danh Chúa Giê-xu”",
  ],
  [
    "Adobe Scan 7 Aug 2026 (51).webp",
    "Christmas",
    "Đại ca đoàn mừng Chúa Giáng Sinh",
  ],
  [
    "Adobe Scan 7 Aug 2026 (55).webp",
    "Christmas",
    "Ca đoàn thiếu nhi đêm Giáng Sinh",
  ],
  [
    "Adobe Scan 7 Aug 2026 (6).webp",
    "Christmas",
    "Thiếu nhi dâng bài hát Giáng Sinh",
  ],
  [
    "Adobe Scan 7 Aug 2026 (7) (1).webp",
    "Christmas",
    "Ban hát trong đêm Giáng Sinh",
  ],
  [
    "Adobe Scan 7 Aug 2026 (9).webp",
    "Christmas",
    "Mừng Chúa Giáng Sinh – “Đến Tìm Người Đã Mất”",
  ],
  [
    "1791292994447_1084442557143795285_1084442557143795285_9d0d8d4294b81b945ca687f754a2cca8.webp",
    "Christmas",
    "Lễ Giáng Sinh – “Chúa Tình Yêu”",
  ],
  [
    "1791291875680_1084442557143795285_1084442557143795285_1f602be9a949877e2eca87796c7b3ee9.webp",
    "Christmas",
    "Lễ kỷ niệm Chúa Giáng Sinh 2023",
  ],
  [
    "1791291894325_1084442557143795285_1084442557143795285_51a4b4241a11539df7449d81ab2ee66a.webp",
    "Christmas",
    "Tín hữu dự Lễ Giáng Sinh 2023",
  ],
  [
    "1791292719349_1084442557143795285_1084442557143795285_f40bf87fc828e7434cee4a404e372f5a.webp",
    "Christmas",
    "Lễ Giáng Sinh – “Bình An Dưới Đất”",
  ],
  [
    "1791261259883_1084442557143795285_1084442557143795285_d8892794a2f55af87195ecc4b4d63fdf.webp",
    "Christmas",
    "Thiếu nhi mừng Giáng Sinh 2024 – “Bình An Trên Đất”",
  ],
  [
    "1791296102926_1084442557143795285_1084442557143795285_34b6f70a9bb976cfca1dcfd83755cf35.webp",
    "Christmas",
    "Mừng Chúa Giáng Sinh tại điểm nhóm",
  ],

  // Thiếu nhi & thanh niên
  [
    "2002 Adobe Scan 7 Aug 2026 (50).webp",
    "Youth Ministry",
    "Các em thiếu nhi sinh hoạt ngoài trời",
  ],
  [
    "Adobe Scan 24 Sep 2026 (4) (1).webp",
    "Youth Ministry",
    "Ban thanh niên Hội Thánh",
  ],
  [
    "Adobe Scan 24 Sep 2026 (9).webp",
    "Youth Ministry",
    "Thanh niên nhóm lại thông công",
  ],
  [
    "Adobe Scan 7 Aug 2026 (25).webp",
    "Youth Ministry",
    "Các em thiếu nhi trước thềm nhà thờ",
  ],
  [
    "Adobe Scan 7 Aug 2026 (27).webp",
    "Youth Ministry",
    "Thiếu nhi và thanh niên dã ngoại",
  ],
  [
    "Adobe Scan 7 Aug 2026 (28).webp",
    "Youth Ministry",
    "Chuyến đi chơi của thiếu nhi và thanh niên",
  ],
  [
    "Adobe Scan 7 Aug 2026 (8).webp",
    "Youth Ministry",
    "Thiếu nhi dâng bài hát – “Trận Chiến Thuộc Linh”",
  ],
  [
    "1791262074730_1084442557143795285_1084442557143795285_25a3bb68d32ea98bcd9061b4369b2a82.webp",
    "Youth Ministry",
    "Thiếu nhi sinh hoạt Thánh Kinh Hè",
  ],

  // Truyền giảng & Tương trợ
  [
    "1791260763169_1084442557143795285_1084442557143795285_9e9f8ac0795d45d6b4456b7737beab0c.webp",
    "Missions",
    "Điểm nhóm Bà Cang 5",
  ],
  [
    "1791292476977_1084442557143795285_1084442557143795285_e897454bd9abb8282421d192d21814f1.webp",
    "Missions",
    "Ảnh lưu niệm tại điểm nhóm Bà Cang 5",
  ],
  [
    "1791292920009_1084442557143795285_1084442557143795285_0b389bc19c90b8d2d3c9858715859a98.webp",
    "Missions",
    "Lễ Công Bố Thành Lập Điểm Nhóm Tin Lành Bàu Bàng (17/3/2021)",
  ],
  [
    "1791293103086_1084442557143795285_1084442557143795285_f43ec10e81bae63026924b0be3b2586f.webp",
    "Missions",
    "Trao quyết định thành lập Điểm Nhóm Tin Lành Bàu Bàng",
  ],
  [
    "1791291928314_1084442557143795285_1084442557143795285_076aaa9192b4ddbac43eee69e2e58727.webp",
    "Missions",
    "Chương trình Đo Mắt – Tặng Kính Lão (16/12/2023)",
  ],
  [
    "1791292169252_1084442557143795285_1084442557143795285_67f48e756ec58dfcb6b9fbded33a5436.webp",
    "Missions",
    "Chương trình Đo Mắt – Tặng Kính Lão (28/4/2023)",
  ],
  [
    "1791292082984_1084442557143795285_1084442557143795285_907b813a8af441f6e0397ddcc9b83b4f.webp",
    "Missions",
    "Đo mắt, tặng kính lão cho bà con",
  ],
  [
    "1791291709467_1084442557143795285_1084442557143795285_75604f4d1cd58aad1bd8a9579a0a78d8.webp",
    "Missions",
    "Chuẩn bị quà tặng cho bà con",
  ],
  [
    "1791292297312_1084442557143795285_1084442557143795285_bc07891eb4d3f393d2fa2238d5ec24dc.webp",
    "Missions",
    "Trao quà cho bà con",
  ],
  [
    "1791292676214_1084442557143795285_1084442557143795285_df4538df8642fe8fe318265ba1a0a398.webp",
    "Missions",
    "Trao quà Tương trợ cho các gia đình",
  ],
  [
    "1791293301188_1084442557143795285_1084442557143795285_63ea0f0448e1961fd4fe03c3258af91b.webp",
    "Missions",
    "Trao quà cho bà con có hoàn cảnh khó khăn",
  ],
  [
    "1791293385352_1084442557143795285_1084442557143795285_a184f8d27d277c33ed266e9fc2ba4222.webp",
    "Missions",
    "Quà Tặng Giáng Sinh 2020",
  ],
  [
    "1791293402323_1084442557143795285_1084442557143795285_c87619ad98274293b1add9de31218a11.webp",
    "Missions",
    "Bà con nhận quà Giáng Sinh 2020",
  ],

  // Thông công
  [
    "2005 Adobe Scan 27 Jul 2026.webp",
    "Fellowship",
    "Ảnh tập thể Hội Thánh – Xuân Ất Dậu 2005",
  ],
  [
    "1791260821196_1084442557143795285_1084442557143795285_0d99b4e48516d4b30cc69316a860dfdd.webp",
    "Fellowship",
    "Tín hữu chụp ảnh lưu niệm trong nhà thờ",
  ],
  [
    "1791260835394_1084442557143795285_1084442557143795285_87ad1069bf9300aefa8a0a7442e13b64.webp",
    "Fellowship",
    "Thăm viếng gia đình tín hữu",
  ],
  [
    "1791260902080_1084442557143795285_1084442557143795285_e1ead930af894a5d7a02d34c57c22d52.webp",
    "Fellowship",
    "Thăm viếng và thông công cùng tín hữu",
  ],
  [
    "1791292318474_1084442557143795285_1084442557143795285_b342abd7865e2926e2720738c404c180.webp",
    "Fellowship",
    "Ảnh tập thể tín hữu",
  ],
  [
    "1791292422238_1084442557143795285_1084442557143795285_a47aabbc82ab37c484da6c99fdf97a98.webp",
    "Fellowship",
    "Bữa ăn thông công",
  ],
  [
    "1791293282283_1084442557143795285_1084442557143795285_2e22ec6053f45528b7c36f364b727534.webp",
    "Fellowship",
    "Ảnh lưu niệm cùng các gia đình tín hữu",
  ],
  [
    "1791293575209_1084442557143795285_1084442557143795285_8a4a19e36e696456ca26ff6b24fba793.webp",
    "Fellowship",
    "Nhóm học Kinh Thánh tại tư gia",
  ],
  [
    "1791293935418_1084442557143795285_1084442557143795285_622f957c8c6c106a5d985507b4208c56.webp",
    "Fellowship",
    "Tín hữu nhóm lại dưới rạp",
  ],
  [
    "1791296498658_1084442557143795285_1084442557143795285_1eabfa63bf1d40767fb46e58f11720dc.webp",
    "Fellowship",
    "Sinh hoạt tại nhà thờ",
  ],
  [
    "1791422077508_1084442557143795285_1084442557143795285_18356f59310eb44340a958a37b207fdb.webp",
    "Fellowship",
    "Thông công cùng quý tín hữu",
  ],
  [
    "1791422151365_1084442557143795285_1084442557143795285_084303036a581326263d296c6eeb8de8.webp",
    "Fellowship",
    "Thăm viếng thông công",
  ],
  [
    "1791422161063_1084442557143795285_1084442557143795285_73bf90fabfdbce5e225aa1b529a5b6cd.webp",
    "Fellowship",
    "Cùng nhau trò chuyện, thông công",
  ],
  ["Adobe Scan 24 Sep 2026 (1).webp", "Fellowship", "Ảnh lưu niệm tại tư gia"],
  [
    "Adobe Scan 24 Sep 2026 (10) (2).webp",
    "Fellowship",
    "Trao quà trong buổi nhóm",
  ],
  ["Adobe Scan 24 Sep 2026 (10).webp", "Fellowship", "Ảnh chân dung lưu niệm"],
  [
    "Adobe Scan 24 Sep 2026 (3) (1).webp",
    "Fellowship",
    "Cùng nhau chuẩn bị bữa ăn",
  ],
  [
    "Adobe Scan 24 Sep 2026 (3) (3).webp",
    "Fellowship",
    "Bữa ăn thông công ngoài trời",
  ],
  [
    "Adobe Scan 24 Sep 2026 (4).webp",
    "Fellowship",
    "Ảnh lưu niệm trong ngày vui",
  ],
  [
    "Adobe Scan 24 Sep 2026 (5) (1).webp",
    "Fellowship",
    "Các tín hữu trong ngày vui của Hội Thánh",
  ],
  [
    "Adobe Scan 24 Sep 2026 (5) (3).webp",
    "Fellowship",
    "Các chị em trong ngày hội ngộ",
  ],
  [
    "Adobe Scan 24 Sep 2026 (5).webp",
    "Fellowship",
    "Chuyến du ngoạn của Hội Thánh",
  ],
  ["Adobe Scan 24 Sep 2026 (6) (1).webp", "Fellowship", "Các gia đình tín hữu"],
  [
    "Adobe Scan 24 Sep 2026 (7).webp",
    "Fellowship",
    "Ảnh lưu niệm sau buổi nhóm",
  ],
  ["Adobe Scan 24 Sep 2026.webp", "Fellowship", "Mừng Xuân cùng Hội Thánh"],
  [
    "Adobe Scan 7 Aug 2026 (37).webp",
    "Fellowship",
    "Tín hữu trước cổng đền thờ",
  ],
  [
    "Adobe Scan 7 Aug 2026 (59).webp",
    "Fellowship",
    "Bữa ăn thông công đông vui",
  ],
];

export const gallery: GalleryImage[] = entries
  .filter(([file]) => urlFor(file))
  .map(([file, category, alt], i) => ({
    id: i + 1,
    src: urlFor(file),
    alt,
    category,
  }));
