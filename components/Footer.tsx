export default function Footer() {
    return (
        <footer className="mt-20 py-10 border-t border-neutral-900">
            <div className="max-w-6xl mx-auto px-6 text-center md:text-left text-neutral-500 text-sm">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} Tilak Raj Rawat. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {/* You can add real links here later */}
                        <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
                        <span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span>
                        <span className="hover:text-white transition-colors cursor-pointer">GitHub</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}