const mapCode = "8HVJ+MM8";
// Place ID used by the church's listing in the HTTLVN directory.
const mapPlaceId = "ChIJtdPGnAqzdDERBXMx903tv8k";
const mapDestination = "Nhà Thờ Tin Lành Cây Trường, 8HVJ+MM8, Ấp Ông Chài, Trừ Văn Thố, Hồ Chí Minh, Việt Nam";

export const celebration = {
  startsAt: "2026-11-17T09:00:00+07:00",
  timeLabel: "09:00, Thứ Ba 17/11/2026",
  dateLabel: "17 tháng 11 năm 2026",
  name: "Hội Thánh Tin Lành Cây Trường",
  address: "Tổ 3, ấp Cây Trường, xã Trừ Văn Thố, TP. Hồ Chí Minh",
  mapCode,
  location: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapDestination)}&destination_place_id=${mapPlaceId}`,
  phone: "0973 493 746",
  phoneHref: "tel:+84973493746",
};
