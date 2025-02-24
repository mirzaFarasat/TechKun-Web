'use client';
import Image, { StaticImageData } from 'next/image'
import imageMobileApp from '@/public/Images/landing-page-images/landing-page-image-1.jpg';
import imageMobileApp1 from '@/public/Images/landing-page-images/updated.jpg';
import imageMobileApp2 from '@/public/Images/landing-page-images/updated1.jpg';
import imageMobileApp3 from '@/public/Images/landing-page-images/food.jpg';
import imageMobileApp4 from '@/public/Images/landing-page-images/logistics.jpg';
import Link from 'next/link';



export default function Home() {

  const cardItems: {
    title: string,
    discription: string,
    image: StaticImageData,
    imageAltText: string
  }[] = [{
    title: "Health Tech",
    discription: "Empowering healthcare with advanced digital solutions. From telemedicine to patient management systems, we develop software that streamlines medical workflows.",
    image: imageMobileApp1,
    imageAltText: "kkr"
  }, {
    title: "Ed-Tech",
    discription: "Transforming education through technology. Our software solutions are designed to create engaging learning experiences, offering tools for online education and personalized learning paths."

    ,
    image: imageMobileApp2,
    imageAltText: "hi"
  }, {
    title: "Food Tech",
    discription: "Redefining the food industry with smart tech. We build solutions for food delivery, inventory management, and customer engagement, making it easier for businesses to serve and satisfy customers efficiently.",
    image: imageMobileApp3,
    imageAltText: "kadak"
  }, {
    title: "Logistics",
    discription: "Optimizing logistics with intelligent software. Our solutions improve supply chain management, automate processes, and enhance real-time tracking for streamlined operations and better delivery outcomes.",
    image: imageMobileApp4,
    imageAltText: "hhahahah"
  }]

  return (
    <div>
      <div className="case-responsive-container flex py-24 justify-center items-center text-center lg:text-left ">
        <div className="flex flex-col gap-7">
          <h1 className="text-5xl sm:text-5xl lg:text-6xl  font-semibold"><span className="text-primary-700"> AT TECHKUN </span> <br />WHEN YOU SAY TO DO IT, <br />IT'S ALREADY DONE!</h1>
          <p className="text-gray-500 text-base sm:text-lg">Give your business wings that can help you fly beyond the sky. <br />Trust is our principle and privacy is the motto, on the mission to Help revolutionize <br />the world to embrace technology and make the world a better place with Techkun. </p>
          <button className="bg-primary-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors w-full sm:w-60">
            Give Us A Try
          </button>
        </div>
      </div>
      <div className="bg-primary-50 md:">
        <div className="case-responsive-container flex flex-col justify-center items-center text-center py-16 gap-10 pb-24">
          <h2 className="text-3xl lg:text-5xl sm:text-4xl font-bold"><span className="text-primary-700"> We Are</span> TechKun</h2>
          <p className="text-gray-600 text-base  sm:text-lg">Techkun is a pioneerring technology consulting firm, that specializes in catalyzing the success of digital business trasformation for medium to large enterprise. Our goal has been to create simple solutions that can bring agility to any business. We bring digital innovation to business processes by collaborating with our customers (business and technology teams) that provides a competitive edge, scalability, and growth.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center text-lg sm:text-xl text-white font-semibold w-full sm:w-1/2 bg-primary-600 rounded-md">
            <div className="w-full sm:w-1/3 p-4 border-b sm:border-b-0 sm:border-r border-white">
              Authenticity
            </div>
            <div className="w-full sm:w-1/3 p-4 border-b sm:border-b-0 sm:border-r border-white">
              Adaptability
            </div>
            <div className="w-full sm:w-1/3 p-4">
              Independence
            </div>
          </div>
          <div>
            <Image className='max-h-[34rem] rounded-lg' src={imageMobileApp} alt={"kerk"} style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <div className='case-responsive-container flex flex-col justify-center items-center text-center py-24 gap-10'>
        <h3 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-700'>What We Can Do For You</h3>
        <p className='text-gray-700 pb-14'>We can provided you services which can help to grow your business. We are open to take new ideas and also worked in a wide range of domains which encompasses...</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cardItems.map((items, index) => (
            <div
              key={index}
              className="flex flex-col bg-primary-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-t-2xl"
            >
              <div className="flex justify-center items-center text-center p-5 bg-primary-700 rounded-t-2xl">
                <h2 className="text-lg font-semibold">{items.title}</h2>
              </div>
              <div className="flex flex-col justify-center items-center p-6 gap-4">
                <div className="w-full h-48 overflow-hidden rounded-lg">
                  <Image
                    className="w-full h-full object-cover"
                    src={items.image}
                    alt={items.imageAltText}
                  />
                </div>
                <p className="text-sm text-gray-100">{items.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
//   );
// }
