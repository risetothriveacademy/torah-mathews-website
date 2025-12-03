import Link from "next/link";

export function TVShowBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 border-y-4 border-amber-500">
      <div className="container mx-auto px-4 py-6">
        <Link
          href="https://www.legacymakerstv.com/torah-mathews"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="text-center space-y-4">
            {/* Featured On Label */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-amber-300"></div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                As Featured On
              </p>
              <div className="h-px w-12 bg-amber-300"></div>
            </div>

            {/* Main TV Show Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-amber-200 transition-colors">
              Legacy Makers TV
            </h3>

            {/* Legacy Makers Banner Image with Coming Soon Badge */}
            <div className="relative max-w-4xl mx-auto my-6">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/jigsaw-puzzle.png"
                  alt="Watch Torah Mathews in Legacy Makers"
                  className="w-full h-auto"
                />
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg transform rotate-3">
                  <p className="text-lg font-bold uppercase tracking-wider">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-amber-100 max-w-3xl mx-auto">
              Watch Torah's powerful testimony of faith, resilience, and transforming pain into purpose
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-8 py-3 bg-white text-amber-900 font-bold rounded-lg shadow-lg group-hover:bg-amber-50 group-hover:scale-105 transition-all">
                Watch Episode Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
