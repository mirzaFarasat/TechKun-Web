import { useState } from 'react';
import Image from 'next/image';

// Client data
const clients = [
  { name: 'Seismic', logo: '/Images/Logo/Seismic_id8l_4d2M-_1.png' },
  { name: 'Akeneo', logo: '/Images/Logo/Akeneo_idwhtOJT_w_1.png' },
  { name: '1', logo: '/Images/Logo/idx_vBAoYh_1745577090705.jpeg' },
  { name: 'Innovaccer', logo: '/Images/Logo/Innovaccer_id6-tvzgdK_1.png' },
  { name: 'Prowly', logo: '/Images/Logo/Prowly_idQNl-mIbF_1.png' },
  { name: '2', logo: '/Images/Logo/Symbol.png' },
  { name: 'MobileAction', logo: '/Images/Logo/idObx92Zq7_1745577734176.jpeg' },
];

// B2B trust badges data
const trustBadges = [
  { 
    name: 'Clutch', 
    logo: '/api/placeholder/150/75', 
    url: 'https://clutch.co/profile/your-company'
  },
  { 
    name: 'GoodFirms', 
    logo: '/api/placeholder/150/75', 
    url: 'https://www.goodfirms.co/company/your-company'
  },
  { 
    name: 'DesignRush', 
    logo: '/api/placeholder/150/75', 
    url: 'https://www.designrush.com/agency/profile/your-company'
  },
  { 
    name: 'UpCity', 
    logo: '/api/placeholder/150/75', 
    url: 'https://upcity.com/profiles/your-company'
  },
];

const ClientSliderSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const allClients = [...clients, ...clients];

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center py-16 bg-gradient-to-r from-gray-50 to-blue-50 snap-start"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-24 text-gray-800">
          Trusted by Leading Clients
        </h2>
        
        {/* Client Logo Slider */}
        <div
          className="relative overflow-hidden w-full h-24 mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex space-x-20 absolute whitespace-nowrap ${
              isPaused ? 'animate-pause' : 'animate-scroll'
            }`}
            style={{
              animationDuration: '30s',
              animationIterationCount: 'infinite',
            }}
          >
            {allClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center h-20 w-32 md:w-40 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust Badges Section */}
        <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-medium text-center mb-6 text-gray-600">
              As Featured On
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {trustBadges.map((badge) => (
                <a 
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="h-12 w-24 md:h-14 md:w-32 relative transition-all duration-300 grayscale hover:grayscale-0">
                    <Image
                      src={badge.logo}
                      alt={`${badge.name} badge`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                    <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation-name: scroll;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientSliderSection;