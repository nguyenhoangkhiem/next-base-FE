const BASE = process.env.NEXT_PUBLIC_API ?? "http://localhost:4000/api";
async function api<T>(path: string, next?: RequestInit["next"]): Promise<T> {
    const res = await fetch(`${BASE}${path}`, { cache: "force-cache", next });
    console.log(res);
    
    if (!res.ok) throw new Error(`API ${path} ${res.status}`);
    return res.json() as Promise<T>;
}
export async function fetchTodayAll() {
    return api("/v1/lottery/latest", { revalidate: 30 });
}
export async function fetchProvinceDate(tinh: string, date: string) {
    return api(`/v1/lottery/${tinh}?date=${date}`, { revalidate: 60 });
}
