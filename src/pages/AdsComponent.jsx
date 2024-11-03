import React, { useState, useEffect } from "react";

const AdsComponent = () => {
  // Define the list of ads
  const ads = [
    {
      title: "Government Housing Scheme",
      description: "Apply for affordable housing under the government's latest scheme.",
      link: "www.housingscheme.gov",
      image: "https://i0.wp.com/protechgroup.in/newsletter/wp-content/uploads/2021/03/government-housing-scheme-banner-image.jpg?fit=1920%2C1080&ssl=1",
    },
    {
      title: "Skill Development Program",
      description: "Enroll in free skill development programs sponsored by the government.",
      link: "www.skilldev.gov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmaUFeYu4Y72DWRsJvV3kNgGAqF1vv2co4w&s",
    },
    {
      title: "Agricultural Subsidy",
      description: "Get subsidies for farm equipment and seeds under the latest scheme.",
      link: "www.agriculture.gov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjIZvmgcNMNfaa0uvfCoH7y_9DYMTzsJCzg&s",
    },
    {
      title: "Health Insurance Scheme",
      description: "Affordable health insurance plans for low-income families.",
      link: "www.healthscheme.gov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFWZStVNQOirg9vrtQjghFO0DbaKlWlKqsg&s",
    },
    {
      title: "Education Scholarship",
      description: "Apply for scholarships available to students pursuing higher education.",
      link: "www.educationscholar.gov",
      image: "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    },
    {
      title: "Startup Business Grant",
      description: "Get government grants to start your new business with ease.",
      link: "www.startupgrant.gov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BYqci8dOqM36rVJEoPf5ATwfxFPmGVHDUQ&s",
    },
    {
      title: "Women Empowerment Scheme",
      description: "Programs designed to empower women through education and job training.",
      link: "www.womenscheme.gov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNo3-yCGyRBPusTlIGu6u_P4RYr-32NfQWQ&s",
    },
    {
      title: "Rural Development Fund",
      description: "Financial support for rural infrastructure and development projects.",
      link: "www.ruralfund.gov",
      image: "https://cfstatic.give.do/585005dd-6066-4997-810f-a432c3221714.jpg",
    },
    {
      title: "Youth Employment Program",
      description: "Gain access to job opportunities for youth under the employment scheme.",
      link: "www.youthemployment.gov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqe3hb0UhRigy4qlSXax5bgsCIFN6MJ-4ciw&s",
    },
    {
      title: "Solar Energy Subsidy",
      description: "Get subsidies for installing solar energy systems at your home or business.",
      link: "www.solarenergy.gov",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1OCa45BW7MyNiSO86jfsrmfhyvd8QhQRgg&s",
    },
  ];
  

  // State to track the current ad index
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // useEffect to change the ad every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // 5000ms = 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [ads.length]);

  // Get the current ad based on the index
  const currentAd = ads[currentAdIndex];

  return (
    <div className="border border-gray-200 p-4 w-full max-w-sm bg-white shadow-md relative rounded-md">
      <span className="absolute top-2 right-2 text-xs text-gray-500 border border-gray-400 px-2 py-1 rounded-sm uppercase">
        Ad
      </span>
      <div className="flex items-center">
        <img
          src={currentAd.image}
          alt="Ad"
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-800">{currentAd.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{currentAd.description}</p>
          <a
            href={`https://${currentAd.link}`}
            className="text-blue-600 text-xs mt-2 inline-block hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentAd.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdsComponent;

// real ads component

// import React, { useEffect } from "react";

// const AdsComponent = (props) => {
//   const { dataAdSlot } = props;

//   useEffect(() => {
//     try {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     } catch (e) {}
//   }, []);

//   return (
//     <>
//       <ins
//         className="adsbygoogle"
//         style={{ display: "block" }}
//         data-ad-client="ca-pub-114-541-3597"
//         data-ad-slot={dataAdSlot}
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       ></ins>
//     </>
//   );
// };

// export default AdsComponent;
