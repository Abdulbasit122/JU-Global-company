import { Award, Globe, Shield, DollarSign, Network } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Network,
      title: "China Supply Chain Expertise",
      description: "Deep knowledge of Chinese manufacturing landscape with established relationships across key industrial regions."
    },
    {
      icon: Globe,
      title: "Multilingual Team",
      description: "Professional team fluent in English, Chinese, Spanish, and Thai ensuring smooth cross-cultural communication."
    },
    {
      icon: Shield,
      title: "End-to-End Sourcing Support",
      description: "Comprehensive service from initial sourcing to final delivery, including quality control and logistics coordination."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing structure with no hidden fees. You always know exactly what you're paying for."
    },
    {
      icon: Award,
      title: "Verified Factory Network",
      description: "Extensive database of pre-vetted manufacturers with verified credentials, certifications, and production capabilities."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE US</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your success in China sourcing depends on having the right partner.
            Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="text-blue-600" size={32} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
