// app/layout.tsx
import type { Metadata } from "next";

import '@styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import './fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'

export const metadata: {
    title: string;
    description: string;
    alternates: { canonical: string };
    openGraph: { title: string; type: string }
} = {
    title: "KQ Xổ Số Nhanh | Chuẩn",
    description: "Cập nhật kết quả xổ số 3 miền nhanh, chính xác, dễ tra cứu.",
    alternates: { canonical: "https://example.com" },
    openGraph: { title: "KQ Xổ Số Nhanh", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className="bg-neutral-50 text-neutral-900 antialiased">
                <div className="min-h-dvh flex flex-col">
                    <Header />

                    <main className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 flex-1 py-4">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

function Header() {
    return (
        <header className="border-b sticky top-0 z-30">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 h-14 flex items-center gap-3 bg-red-500 font-bold text-white ">
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faHouse} className="text-white text-2xl" />
                </Link>
                <nav className="hidden md:flex items-center gap-2 text-sm">
                    <Link href="/mien-bac" className="px-2 py-1 rounded hover:bg-red-600">Miền Bắc</Link>
                    <Link href="/mien-trung" className="px-2 py-1 rounded hover:bg-red-600">Miền Trung</Link>
                    <Link href="/mien-nam" className="px-2 py-1 rounded hover:bg-red-600">Miền Nam</Link>
                    <Link href="/thong-ke" className="px-2 py-1 rounded hover:bg-red-600">Thống kê</Link>
                </nav>
            </div>
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 h-14 flex items-center gap-3 text-blue-600 font-bold">
                <div className="hidden md:flex items-center gap-2 text-sm">
                    <Link className="px-2 py-1 rounded hover:text-blue-700" href="/">Miền Bắc</Link>
                    <Link className="px-2 py-1 rounded hover:text-blue-700" href="/">Thứ 2</Link>
                    <Link className="px-2 py-1 rounded hover:text-blue-700" href="/">Thứ 2</Link>
                    <Link className="px-2 py-1 rounded hover:text-blue-700" href="/">Thứ 2</Link>
                    <Link className="px-2 py-1 rounded hover:text-blue-700" href="/">Thứ 2</Link>
                    <Link className="px-2 py-1 rounded hover:text-blue-700" href="/">Thứ 2</Link>
                    <Link className="px-2 py-1 rounded hover:text-blue-700" href="/">Thứ 2</Link>
                </div>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 py-6 text-sm text-neutral-600">
                <p>© {new Date().getFullYear()} KQXS — Dữ liệu tham khảo.</p>
            </div>
        </footer>
    );
}

function AdSlot({ id, className }: { id: string; className?: string }) {
    return (
        <div id={id} className={`bg-neutral-200/70 rounded-md ${className ?? "w-full h-[60px]"} flex items-center justify-center`}>
            <span className="text-xs text-neutral-600">Quảng cáo</span>
        </div>
    );
}
