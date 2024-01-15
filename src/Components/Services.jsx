import React from 'react';
import "../styles/Services.css";
//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const data = [
    {
        title: `Today's Horoscope`,
        icon: `https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-mini-logo.webp`,
        description:`Unsure about how your day will unfold? Get free Aries horoscope online prediction from top astrologer. Read your Aries Zodiac Sign Horoscope today!`,
    },
    {
        title: `Free Kundli`,
        icon: `https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-mini-logo.webp`,
        description:`Generate your free online kundli report from Astrotalk. Our Kundli software can help you predict the future for yourself by reading the birth chart.`,
    },
    {
        title: `Compatibility`,
        icon: `https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-mini-logo.webp`,
        description:`Confused by love? Remove the doubts & find the sparks! Check the compatibility with your partner using our tool and ignite a love that lasts forever.`,
    },
    {
        title: `Festival 2024`,
        icon: `https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-mini-logo.webp`,
        description:`Festivals are myriad celebrations, each a unique form of joy. Explore the diverse world of festivities – a realm of celebration.`,
    },
    {
        title: `Kundli Matching`,
        icon: `https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-mini-logo.webp`,
        description:`Check Love Compatibility and Marriage Prediction online at Astrotalk. Get the best Horoscope and kundli matching predictions today!`,
    },
    {
        title: `Chinese Horoscope`,
        icon: `https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-mini-logo.webp`,
        description:`Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Chinese astrology. Find out now!`,
    },
    {
        title: `Today Panchang`,
        icon: `https://astrotalk.s3.amazonaws.com/assets/images/astrotalk-mini-logo.webp`,
        description:`Panchang enlists a record of auspicious dates and times for any auspicious task such as marriage, celebration, puja, starting any business etc.`,
    },
]

const Services = () => {

    {/*let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };*/}

  return (

    <>
    
    <section className="services">
        <div className="container">
            <div className="row">
                <div className="col-md-12 section-headings">
                    <h2 className="heading">COMPLIMENTARY ASTROLOGY SERVICES</h2>
                </div>
            </div>

            <div className="w-3/4 m-auto">
                <div className="mt-3">
               {/* <Slider {...settings}> */}
                    {data.map((d) => (
                        <div className="bg-white h-[450px] text-black rounded-xl">
                            <div className="h-56 flex justify-center items-center">
                                <img src={d.icon} alt="img" className="h-44 w-44" />
                            </div>

                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-xl font-semibold">{d.title}</p>
                                <p>{d.description}</p>
                            </div>
                        </div>
                    ))}
                    { /*</Slider> */}
                </div>
            </div>

        </div>
    </section>


    <section className="score">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-4">
                    <div className="title_score">16,728+</div>
                    <div className="description_score">Total Astrologers</div>
                </div>

                <div className="col-md-4 col-4">
                    <div className="title_score"> 545 <span> Million Minutes </span></div>
                    <div className="description_score">Total Chat/Call Minutes</div>
                </div>

                <div className="col-md-4 col-4">
                    <div className="title_score"> 36.2 <span> Million </span></div>
                    <div className="description_score">Total Customers</div> 
                </div>

            </div>
        </div>
    </section>

    </>
  )
}

export default Services;