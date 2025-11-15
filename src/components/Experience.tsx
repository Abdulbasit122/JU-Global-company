import { CheckCircle } from 'lucide-react';

export default function Experience() {
  const cases = [
    {
      country: "Spain",
      industry: "Chemical & Textile",
      details: "Successfully facilitated two major deals worth 500k-800k USD each, connecting Spanish importers with certified chemical and textile manufacturers in Jiangsu province.",
      value: "$500k-800k"
    },
    {
      country: "Thailand",
      industry: "Cross-border E-commerce",
      details: "Managed comprehensive sourcing operations for Thai e-commerce platforms with total trade volume exceeding 1M USD across consumer electronics and home goods.",
      value: "$1M+"
    },
    {
      country: "Germany, Argentina, Italy & Colombia",
      industry: "Multi-sector",
      details: "Compiled and delivered verified factory lists across machinery, food processing, packaging, and consumer goods sectors for clients in four countries.",
      value: "100+ Factories"
    },
    {
      country: "International",
      industry: "Trade Exhibitions",
      details: "Provided professional services to 100+ international clients at Canton Fair, CIIE, and Digital Trade Expo including translation, logistics, and business matchmaking.",
      value: "100+ Clients"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PROVEN EXPERIENCE</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Track record of successful partnerships across multiple industries and countries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={28} />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{caseStudy.country}</h3>
                    <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {caseStudy.value}
                    </span>
                  </div>
                  <p className="text-blue-200 font-semibold mb-3">{caseStudy.industry}</p>
                  <p className="text-blue-50 leading-relaxed">{caseStudy.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
