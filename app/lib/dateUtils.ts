export function getLunarDate(date = new Date()) {
    const days = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
    const d = days[date.getDay()];
    return { lunarDay: d, lunarYear: date.getFullYear() - 1983 + 60 }; // giả lập đơn giản
}
