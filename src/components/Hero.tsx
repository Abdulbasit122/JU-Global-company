export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px] py-12">
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              Global Vision · China Resources · Efficient Connection
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner for China Sourcing & Trade
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Welcome to JU GLOBAL, your trusted sourcing and trade service partner in China.
              Based in Shanghai, we connect international buyers with verified Chinese factories
              through efficient, transparent, and reliable supply chain solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/4246209/pexels-photo-4246209.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="International Trade"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
