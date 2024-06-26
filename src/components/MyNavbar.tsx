export default function MyNavbar() {
    return (
        <nav className="bg-black sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white">
                            SYN/ACK
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
