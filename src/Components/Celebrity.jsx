import React from 'react';
import "../styles/Celebrity.css";

const data = [
    {
        title: "Secret of Mandira Bedi's success 🤫",
        image: "https://i3.ytimg.com/vi/i1KL9-vcB7w/maxresdefault.jpg",
    },
    {
        title: "Shweta Tiwari has a message for you. Tap to watch 👆",
        image: "https://i3.ytimg.com/vi/wSmmPNmnVMM/maxresdefault.jpg",
    },
    {
        title: "Bharti Singh never thought to come on television 🤔",
        image: "https://i3.ytimg.com/vi/4Wyr0AAW2Sk/maxresdefault.jpg",
    },
    {
        title: "Ranbir Kapoor talks about astrology",
        image: "https://i3.ytimg.com/vi/HHYIZQ_giXM/maxresdefault.jpg",
    },

]    

const Celebrity = () => {
  return (
    <section className="celebrity">
        <div className="container">
            <h2>OUR CELEBRITY CUSTOMERS</h2>
        </div>

        <div className="w-3/4 m-auto">
                <div className="mt-3">
                    {data.map((d) => (
                        <div className="bg-white h-[450px] text-black rounded-xl">
                            <div className="h-56 flex justify-center items-center">
                                <img src={d.image} alt="img" className="h-44 w-44" />
                            </div>

                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p>{d.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </section>
  )
}

export default Celebrity