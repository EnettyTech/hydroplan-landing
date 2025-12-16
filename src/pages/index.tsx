import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-water-gradient relative min-h-screen">
      {/* Decorative water elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-200/15 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="p-4 md:p-6 relative z-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-water-gradient-button rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  <Image
                    src="/logo.png"
                    alt="Hydroplan"
                    width={38}
                    height={38}
                    className="object-contain rounded-xl"
                  />
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-water-gradient-text">
                Hydroplan
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-water-gradient-text leading-tight">
                Hydroplan
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-600">
                Stay Hydrated, Stay Healthy
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-lg">
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                Your Personal Hydration Companion
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Hydroplan helps you track your daily water intake effortlessly.
                Set goals, get reminders, and visualize your progress to
                maintain optimal hydration throughout the day.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">
                  Simple, intuitive, and effective
                </span>
                : Everything you need to build healthy hydration habits, all in
                one beautiful app.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="button-water-gradient text-white px-8 py-4 rounded-xl font-semibold text-base md:text-lg hover:shadow-lg transition-shadow">
                Download Now
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-gray-800 transition-colors">
                Follow us on <img src="/x.svg" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual/App Preview Placeholder */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Placeholder for app screenshot/mockup */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-water-gradient-button rounded-full flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="Hydroplan"
                        width={128}
                        height={128}
                        className="object-contain rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-gray-800">
                      Track Your Water
                    </p>
                    <p className="text-gray-600">
                      Simple and intuitive hydration tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Hydroplan?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to maintain healthy hydration habits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Daily Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Easily log your water intake throughout the day. Set daily goals
              and track your progress in real-time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Smart Reminders
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get personalized notifications to remind you to drink water at
              optimal intervals throughout your day.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Progress Visualization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              View your hydration progress with beautiful charts and statistics
              to stay motivated and on track.
            </p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Ready to Stay Hydrated?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Download Hydroplan today and start your hydration journey
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#"
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/appstore.png"
                alt="Download on App Store"
                className="h-12 md:h-14"
              />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/googleplay.png"
                alt="Get it on Google Play"
                className="h-12 md:h-14"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 border-t border-gray-200/50 mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 text-sm md:text-base text-gray-600">
            <span>Copyright © 2025 Hydroplan. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link
              href="/contact-us"
              className="text-water-gradient-text hover:underline font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
