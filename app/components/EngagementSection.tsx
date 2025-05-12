import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    label: { text: 'For small projects', color: 'bg-orange-500' },
    title: 'IT staff augmentation',
    description: 'Depending on the project\'s needs, you can quickly scale your team up and down. The staff augmentation offers the possibility of supplementing your existing software project team with engineering talents from *Instinctools.',
    image: '/Images/Model/IT Staff.jpeg', // Replace with actual image path
  },
  {
    label: { text: 'Fit for products', color: 'bg-green-500' },
    title: 'Dedicated teams',
    description: 'We are responsible for effective onboarding and knowledge transfer, clear and precise documentation, consistent project execution, budget control, and risk management. Instinctools offers business analysis, UX and design, quality assurance, DevOps, and project management.',
    image: '/Images/Model/Team.jpeg', // Replace with actual image path
  },
  {
    label: { text: 'For enterprise', color: 'bg-blue-500' },
    title: 'Offshore development center',
    description: 'The offshore dedicated development center is a 100% personalized solution for our corporate customers, having large and complex software development projects often combined with special requirements in terms of security, availability, etc.',
    image: '/Images/Model/Center.jpeg', // Replace with actual image path
  },
];

const partners = [
  { name: 'Google Cloud Partner', logo: '/Images/Logo/Cloud.jpeg' },
  { name: 'OVHCloud', logo: '/Images/Logo/OVH.png' },
  { name: 'Microsoft Partner', logo: '/Images/Logo/MicroSoft.png' },
  { name: 'Bechtle', logo: '/Images/Logo/Bechtle AG_Logo_1.png' },
];

export default function EngagementSection() {
  return (
    <section className="py-20 px-4 bg-white">
      {/* Engagement Models Section */}
      <div className="container mx-auto max-w-7xl">
        <h2 
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Transparent and flexible engagement model
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover"
                />
                <span 
                  className={`absolute bottom-0 left-0 ${card.label.color} text-white text-xs font-medium px-3 py-1.5 rounded-tr-md`}
                >
                  {card.label.text}
                </span>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{card.description}</p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-xs"
                >
                  Learn more
                  <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Partnerships built on trust
          </h2>
          <p 
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            We collaborate with industry leaders to deliver exceptional solutions and drive innovation forward.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-12">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`w-40 h-20 relative grayscale hover:grayscale-0 transition-all flex items-center justify-center ${partner.name === 'OVHCloud' ? 'bg-gray-900 p-3 rounded-lg' : 'p-2'}`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-1"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
          
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}