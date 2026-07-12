import { FaGooglePlay, FaApple } from "react-icons/fa";

// Section that encourages users to download the mobile app.
// Shows a phone mockup image and store buttons.
function DownloadApp() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: text and store buttons */}
        <div>
          <h2 className="text-2xl font-bold text-text sm:text-3xl">
            Get the Foodie app
          </h2>
          <p className="mt-3 max-w-md text-gray-500">
            Order food in seconds, track your delivery live, and get exclusive
            app-only offers. Download now and taste the difference.
          </p>

          {/* Store buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Play Store */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-text px-5 py-3 text-white transition-all duration-300 hover:bg-primary active:scale-95"
            >
              <FaGooglePlay className="text-2xl" />
              <div className="text-left">
                <p className="text-xs text-gray-300">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-text px-5 py-3 text-white transition-all duration-300 hover:bg-primary active:scale-95"
            >
              <FaApple className="text-2xl" />
              <div className="text-left">
                <p className="text-xs text-gray-300">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right: phone mockup image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&q=80"
            alt="Foodie app on phone"
            className="max-h-96 rounded-2xl object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
