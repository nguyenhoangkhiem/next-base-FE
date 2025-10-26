export function luckyNumber(name: string, date: string) {
    const base = name + date;
    let sum = 0;
    for (let i = 0; i < base.length; i++) sum += base.charCodeAt(i);
    return (sum % 100).toString().padStart(2, "0");
}
