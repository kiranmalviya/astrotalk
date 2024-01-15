import React from 'react';
import "../styles/News.css";


 const data = [
    {
        image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
        name: `inc 42`,
        date: `Nov 7, 2023`,
        description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
    },
    {
        image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
        name: `inc 42`,        date: `Nov 7, 2023`,
        description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
    },
    {
        image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
        name: `inc 42`,
     date: `Nov 7, 2023`,
         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,     },     {
        image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
        name: `inc 42`,
        date: `Nov 7, 2023`,
       description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
    },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
//     {
//         image: `https://inc42.com/wp-content/uploads/2023/11/Astrotalk-profile-ftr.png`,
//         name: `inc 42`,
//         date: `Nov 7, 2023`,
//         description:`Decoding Astrotalk’s Fortunes: How The Astrology Startup Hit 4X Profit Growth`,
//     },
 ]




const News = () => {


  return (
    <>
    <section className="astrotalk_news">
        <div className="container">
            <h2 className="astrotalk_news_heading">ASTROTALK IN NEWS</h2>
        </div>

        <div className="w-3/4 m-auto">
                <div className="mt-3">
                     {data?.map((item) => (
                        <div className="bg-white h-[450px] text-black rounded-xl">
                            <div className="h-56 flex justify-center items-center">
                                <img src={item?.image} alt="img" className="h-44 w-44" />
                            </div>

                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p>{item?.description}</p>
                                <p className="text-xl font-semibold">{item?.name}</p>
                                <p>{item?.date}</p>
                            </div>
                        </div>
                       
                    ))} 
                    </div>
                </div>
    </section>

    </>
  )
}

export default News;