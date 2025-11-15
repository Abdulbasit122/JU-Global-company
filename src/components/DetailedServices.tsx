export default function DetailedServices() {
  const services = [
    {
      title: "International Trade (Buying Agent Service)",
      image: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Complete sourcing and procurement services connecting you with verified Chinese manufacturers. We handle product sourcing, supplier negotiation, sample coordination, order management, quality inspection, and export logistics.",
      imageRight: false
    },
    {
      title: "Factory Sourcing & Consulting",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Access our extensive network of pre-vetted factories across China. We conduct thorough verification including business licenses, production capacity assessment, quality control systems, and compliance checks to ensure you work with reliable manufacturers.",
      imageRight: true
    },
    {
      title: "B2B Business Matching & Exhibition Services",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Professional support for major trade shows including Canton Fair, CIIE (China International Import Expo), and Digital Trade Expo. Services include pre-show planning, on-site translation, booth management, business matchmaking, and post-show follow-up.",
      imageRight: false
    },
    {
      title: "Translation, Visa & Local Support",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Multilingual team providing translation services, visa assistance, local transportation, accommodation arrangements, and cultural guidance to ensure smooth business operations in China.",
      imageRight: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">OUR SERVICES</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive end-to-end solutions for international buyers seeking reliable
            Chinese manufacturing partners
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                service.imageRight ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={service.imageRight ? 'md:col-start-2' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>

              <div className={`space-y-4 ${service.imageRight ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
