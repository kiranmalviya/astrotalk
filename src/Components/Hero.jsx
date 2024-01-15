import React from 'react';
import Link from 'next/link';
import "../styles/Hero.css"; 
import { IoLogoWechat } from "react-icons/io5";
//import Image from 'next/image';

const Hero = () => {
  return (
    <>
    
    <section className="pt-28 bg-contain bg-black pb-1">
        <div className="w-full pr-3 pl-3 ml-auto mr-auto">
            <div className="bg-yellow-300 pt-5 pr-12 pb-0 pl-14 rounded-xl  justify-evenly flex items-center">
                <div className=" order-1 font-semibold text-gray-900 mb-2 text-left text-4xl">
                    <p className="text-3xl font-semibold text-black mb-3 text-left">Archana Puran Singh <span className="font-normal"> recommends </span> Astrotalk </p>
                    <h1 className="text-4xl font-normal mb-5 text-left">Chat With Astrologer</h1>
                    <Link href="/" className="bg-gray-900 rounded-3xl shadow-2xl inline-flex text-white transition-all no-underline text-lg py-3 px-11">Chat Now</Link>
                </div>

                <div className="object-cover object-top h-full">
                    <img src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/320x410/assets/images/banner/archana-puran-c.webp" alt="" height={410} width={320} />
                   {/* <img  
                    src="/images/astrologer.jpg"   
                    alt="" height={410} width={320} 
                   >

                   </img> */}
                </div>
            </div>
        </div>
    </section>

    <section className="banner">
       <div className='container'>
            <div className="row">
                <div className="col-3">
                    <Link href={""} className="item">
                        <div className="icon"><Link href={""} className="icon_image"><IoLogoWechat /></Link></div>
                        <div className="text"><span>Chat With astrologer</span></div>
                    </Link>
                </div>

                <div className="col-3">
                    <Link href={""} className="item">
                        <div className="icon"><Link href={""} className="icon_image"><IoLogoWechat /></Link></div>
                        <div className="text"><span>Chat With astrologer</span></div>
                    </Link>
                </div>

                <div className="col-3">
                    <Link href={""} className="item">
                        <div className="icon"><Link href={""} className="icon_image"><IoLogoWechat /></Link></div>
                        <div className="text"><span>Chat With astrologer</span></div>
                    </Link>
                </div>

                <div className="col-3">
                    <Link href={""} className="item">
                        <div className="icon"><Link href={""} className="icon_image"><IoLogoWechat /></Link></div>
                        <div className="text"><span>Chat With astrologer</span></div>
                    </Link>
                </div>

            </div>
       
       </div>
    </section>
    </>
  )
}

export default Hero