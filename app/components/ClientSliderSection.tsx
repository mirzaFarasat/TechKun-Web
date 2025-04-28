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

const ClientSliderSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const allClients = [...clients, ...clients];

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center py-16 bg-gradient-to-r from-gray-50 to-blue-50 snap-start"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-24 text-gray-800">
          Trusted by Leading Clients
        </h2>
        <div
          className="relative overflow-hidden w-full h-24"
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
                className="flex items-center justify-center h-20 w-32 md:w-40 transition-all duration-300 orangescale hover:grayscale-0 hover:scale-110"
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