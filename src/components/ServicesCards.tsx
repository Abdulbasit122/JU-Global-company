import { ShoppingCart, Factory, Users } from 'lucide-react';

export default function ServicesCards() {
  const services = [
    {
      icon: ShoppingCart,
      title: "International Trade",
      subtitle: "Buying Agent Service",
      description: "Complete sourcing and procurement services connecting you with verified Chinese manufacturers. We handle negotiation, quality control, and logistics."
    },
    {
      icon: Factory,
      title: "Factory Sourcing",
      subtitle: "& Verification",
      description: "Access our network of pre-vetted factories across China. We conduct thorough verification including business licenses, production capacity, and quality standards."
    },
    {
      icon: Users,
      title: "B2B Business Matching",
      subtitle: "& Exhibition Assistance",
      description: "Professional support for trade shows including Canton Fair, CIIE, and Digital Trade Expo. We provide translation, logistics, and business matchmaking."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WHAT WE OFFER</h2>
          <p className="text-lg text-gray-600">Comprehensive sourcing and trade solutions tailored to your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-blue-600" size={32} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-blue-600 font-semibold mb-4">{service.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
