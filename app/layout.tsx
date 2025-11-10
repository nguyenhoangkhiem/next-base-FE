// app/layout.tsx
import type { Metadata } from "next";

import '@styles/globals.css';
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
        <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-30">
            <div className="container mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 h-14 flex items-center gap-3">
                <a href="/" className="font-bold tracking-tight">KQXS</a>
                <nav className="hidden md:flex items-center gap-2 text-sm">
                    <a href="/mien-bac" className="px-2 py-1 rounded hover:bg-neutral-100">Miền Bắc</a>
                    <a href="/mien-trung" className="px-2 py-1 rounded hover:bg-neutral-100">Miền Trung</a>
                    <a href="/mien-nam" className="px-2 py-1 rounded hover:bg-neutral-100">Miền Nam</a>
                    <a href="/thong-ke" className="px-2 py-1 rounded hover:bg-neutral-100">Thống kê</a>
                </nav>
                {/*<div className="ms-auto">*/}
                {/*    /!* Slot quảng cáo mỏng (desktop) *!/*/}
                {/*    <div className="hidden lg:block">*/}
                {/*        <AdSlot id="header-desktop" className="w-[728px] h-[90px]" />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="md:hidden border-t">
                <nav className="flex items-center justify-around text-sm">
                    <a href="/mien-bac" className="py-2.5 flex-1 text-center">MB</a>
                    <a href="/mien-trung" className="py-2.5 flex-1 text-center">MT</a>
                    <a href="/mien-nam" className="py-2.5 flex-1 text-center">MN</a>
                    <a href="/thong-ke" className="py-2.5 flex-1 text-center">TK</a>
                </nav>
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
