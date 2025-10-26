export function numberToVietnamese(num: number): string {
    if (isNaN(num)) return "Không hợp lệ";
    const units = ["", "nghìn", "triệu", "tỷ"];
    const digits = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

    function read3(n: number): string {
        const tr = Math.floor(n / 100);
        const ch = Math.floor((n % 100) / 10);
        const dv = n % 10;
        let str = "";
        if (tr > 0) {
            str += `${digits[tr]} trăm`;
            if (ch === 0 && dv > 0) str += " linh";
        }
        if (ch > 1) {
            str += ` ${digits[ch]} mươi`;
            if (dv === 1) str += " mốt";
            else if (dv === 5) str += " lăm";
            else if (dv > 0) str += ` ${digits[dv]}`;
        } else if (ch === 1) {
            str += " mười";
            if (dv > 0) str += ` ${digits[dv]}`;
        } else if (ch === 0 && tr === 0 && dv > 0) {
            str += ` ${digits[dv]}`;
        }
        return str.trim();
    }

    if (num === 0) return "Không đồng";
    let res = "";
    let i = 0;
    while (num > 0) {
        const n = num % 1000;
        if (n !== 0) res = `${read3(n)} ${units[i]} ${res}`;
        num = Math.floor(num / 1000);
        i++;
    }
    return res.trim().replace(/\s+/g, " ") + " đồng";
}
