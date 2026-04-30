export default function InfoBar() {
    return (
        <div className="sticky top-0 z-[100] w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">

            <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

                {/* START */}
                <div className="md:border-r border-gray-300 pr-6">
                    <p className="text-xl tracking-widest text-gray-700 uppercase mb-1">
                        Starts On
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                        25 June 2026
                    </p>
                </div>

                {/* DURATION */}
                <div className="md:border-r border-gray-300 pr-6">
                    <p className="text-xl tracking-widest text-gray-700 uppercase mb-1">
                        Duration
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                        4 Weeks
                    </p>
                    <p className="text-base text-gray-500">
                        Online & Live
                    </p>
                </div>

                {/* FEE */}
                <div className="md:border-r border-gray-300 pr-6">
                    <p className="text-xl tracking-widest text-gray-700 uppercase mb-2">
                        Programme Fee
                    </p>

                    {/* NEW PRICE */}
                    <p className="text-3xl font-bold tracking-tight text-gray-900">
                        £380
                    </p>

                    <p className="text-sm bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full font-medium">
                        Early Access Offer
                    </p>
                </div>

                {/* ELIGIBILITY */}
                <div className="md:border-r border-gray-300 pr-6">
                    <p className="text-xl tracking-widest text-gray-700 uppercase mb-1">
                        Eligibility
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                        Min. 2 years experience
                    </p>
                </div>

                {/* CTA */}
                <div className="flex justify-end">
                    <a href="/brochure/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-800 text-white px-6 py-3 rounded-md text-sm font-semibold tracking-wide hover:bg-indigo-900 transition" >
                        DOWNLOAD BROCHURE
                    </a>
                </div>

            </div>
        </div>
    );
}