export function NavBar() {
    return (
        <nav className="sticky top-0 bg-white/80 backdrop-blur border-b mb-4">
            <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between text-sm">
                <a href="/" className="font-semibold">🔧 Ketqua24 Tools</a>
                <div className="flex gap-3">
                    <a href="/doi-so-thanh-chu" className="hover:text-brand-600">Đổi số</a>
                    <a href="/random-so" className="hover:text-brand-600">Random</a>
                    <a href="/so-may-man" className="hover:text-brand-600">Số may mắn</a>
                </div>
            </div>
        </nav>
    );
}
