import React from 'react';
import "../styles/Astrologers.css";


const data = [
    {
        title: "Vedic Astrology",
        image: "https://etstatic.tnn.in/photo/msid-104823554,updatedat-1698662570147,width-200,height-200,resizemode-75/104823554.jpg",
        name: "Vvinod",
    },
    {
        title: "Vedic Astrology",
        image: "https://etstatic.tnn.in/photo/msid-104823554,updatedat-1698662570147,width-200,height-200,resizemode-75/104823554.jpg",
        name: "Vvinod",
    },
    {
        title: "Vedic Astrology",
        image: "https://etstatic.tnn.in/photo/msid-104823554,updatedat-1698662570147,width-200,height-200,resizemode-75/104823554.jpg",
        name: "Vvinod",
    },
    {
        title: "Vedic Astrology",
        image: "https://etstatic.tnn.in/photo/msid-104823554,updatedat-1698662570147,width-200,height-200,resizemode-75/104823554.jpg",
        name: "Vvinod",
    },
    {
        title: "Vedic Astrology",
        image: "https://etstatic.tnn.in/photo/msid-104823554,updatedat-1698662570147,width-200,height-200,resizemode-75/104823554.jpg",
        name: "Vvinod",
    },

]    

const Astrologers = () => {
  return (
    <section className="astrologer">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sections-headings">
                        <div className="heading"><h2>OUR ASTROLOGERS</h2></div>
                        <h3>13000+ Best Astrologers from India for Online Consultation</h3>
                    </div>
                </div>
            </div>

            
            <div className="w-3/4 m-auto">
                <div className="mt-3">
                    {data.map((d) => (
                        <div className="bg-white h-[450px] text-black rounded-xl">
                            <div className="h-56 flex justify-center items-center">
                                <img src={d.image} alt="img" className="h-44 w-44" />
                            </div>

                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p>{d.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    </section>
  )
}

export default Astrologers