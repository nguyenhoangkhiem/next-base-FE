"use client";
import Link from "next/link";
import { Input } from "@components/ui/input";
import { useState } from "react";

const tools = [
    { slug: "doi-so-thanh-chu", icon: "🔢", title: "Đổi số thành chữ", desc: "Chuyển số sang chữ VNĐ chính xác" },
    { slug: "random-so", icon: "🎲", title: "Random số / Quay thử", desc: "Sinh số ngẫu nhiên, bốc thăm online" },
    { slug: "so-may-man", icon: "🧧", title: "Số may mắn hôm nay", desc: "Xem số may mắn theo tên & ngày sinh" },
];

export default function HomePage() {
    const [query, setQuery] = useState("");
    const filtered = tools.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <main className="min-h-dvh bg-gradient-to-b from-white to-neutral-50 px-4 py-8">
            <section className="max-w-4xl mx-auto text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">🔧 Ketqua24 Tools</h1>
                <p className="text-neutral-600 mb-6">Bộ công cụ tra cứu, tính toán và tiện ích online miễn phí</p>
                <Input
                    placeholder="🔍 Tìm tool... (ví dụ: lãi suất, random, số may mắn)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="max-w-md mx-auto"
                />
            </section>

            <section className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map(t => (
                    <Link key={t.slug} href={`/${t.slug}`} className="group">
                        <div className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition p-5 h-full">
                            <div className="text-3xl mb-3">{t.icon}</div>
                            <h2 className="font-semibold text-lg mb-1 group-hover:text-brand-600">{t.title}</h2>
                            <p className="text-sm text-neutral-600">{t.desc}</p>
                        </div>
                    </Link>
                ))}
            </section>

            <section className="max-w-4xl mx-auto mt-12 border-t pt-6 text-center text-sm text-neutral-500">
                <p>
                    Một phần của hệ thống <a href="https://xoso.ketqua24.com" className="text-brand-600 hover:underline">Kết quả Xổ Số 24</a> |
                    <a href="https://lich.ketqua24.com" className="ml-1 text-brand-600 hover:underline">Lịch & Ngày Âm</a> |
                    <a href="https://blog.ketqua24.com" className="ml-1 text-brand-600 hover:underline">Blog</a>
                </p>
            </section>
        </main>
    );
}
