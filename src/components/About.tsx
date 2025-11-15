import localImage from "../ju global logo blue_page-0001.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="glass rounded-3xl overflow-hidden">
              <img
                src={localImage}
                alt="JU Global Logo"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover animate-fade-in-up"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ABOUT JU GLOBAL</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              JU GLOBAL is a Shanghai-based international trade and sourcing service provider
              with an offshore branch in Hong Kong. We bridge global buyers and verified Chinese
              manufacturers through efficient communication, supplier verification, and full
              process trade support.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our team combines deep understanding of Chinese business culture with international
              trade expertise, providing seamless cross-border commerce solutions. From initial
              sourcing to final delivery, we ensure quality, transparency, and reliability at
              every step.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 glass rounded-xl shadow hover-pop btn-smooth">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600 mt-2">Trade Show Clients</div>
              </div>
              <div className="text-center p-4 glass rounded-xl shadow hover-pop btn-smooth">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600 mt-2">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
