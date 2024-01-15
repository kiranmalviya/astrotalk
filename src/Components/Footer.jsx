import React from 'react';
import "../styles/Footer.css";
import Link from 'next/link';
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";


const Footer = () => {
  return (
    <>
    <div className="footer-top">
      <div className="container">
        <h2>About Astrotalk</h2>
        <p className="about_footer">Astrotalk is the best astrology website for online Astrology predictions. Talk to Astrologer on call and get answers to all your worries by seeing the future life through Astrology Kundli Predictions from the best Astrologers from India. Get best future predictions related to Marriage, love life, Career or Health over call, chat, query or report.</p>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6 footer-links">
            <h2>Horoscope</h2>
            <Link href="" className="link">Horoscope 2024</Link>
            <Link href="" className="link">Today's Horoscope</Link>
            <Link href="" className="link">Today's Love Horoscope</Link>
            <Link href="" className="link">Yesterday's Horoscope</Link>
            <Link href="" className="link">Tomorrow's Horoscope</Link>
            <Link href="" className="link">Weekly Horoscope</Link>
            <Link href="" className="link">Monthly Horoscope</Link>
            <Link href="" className="link">Yearly Horoscope</Link>

            <h2>Shubh Muhurat 2024</h2>
            <Link href="" className="link">Annanprashan Muhurat 2024</Link>
            <Link href="" className="link">Naamkaran Muhurat 2024</Link>
            <Link href="" className="link">Car/Bike Muhurat 2024</Link>
            <Link href="" className="link">Marriage Muhurat 2024</Link>
            <Link href="" className="link">Gold Buying Muhurat 2024</Link>
            <Link href="" className="link">Bhoomi Pujan Muhurat 2024</Link>
            <Link href="" className="link">Griha Pravesh Muhurat 2024</Link>
            <Link href="" className="link">Mundan Muhurat 2024</Link>
          </div>

          <div className="col-lg-3 col-md-4 col-6 footer-links">
            <h2>Important Links</h2>
            <Link href="" className="link">Astromall</Link>
            <Link href="" className="link">Today Panchang</Link>
            <Link href="" className="link">Live Astrologers</Link>
            <Link href="" className="link">How to read kundali</Link>
            <Link href="" className="link">Free Kundli</Link>
            <Link href="" className="link">Kundli Matching</Link>
            <Link href="" className="link">Chat with Astrologer</Link>
            <Link href="" className="link">Talk to Astrologer</Link>
            <Link href="" className="link">Astrotalk Reviews</Link>
            <Link href="" className="link">Astrology Yoga</Link>
            <Link href="" className="link">Kaalsarp Doshas</Link>
            <Link href="" className="link">Child Astrology</Link>
            <Link href="" className="link">Ascendant Sign Gemstone</Link>
            <Link href="" className="link">Nakshatras Constellations</Link>
            <Link href="" className="link">Numerology</Link>
            <Link href="" className="link">Mantras</Link>
            <Link href="" className="link">Astrological remedies for job</Link>
            <Link href="" className="link">promotion</Link>
          </div>

          <div className="col-lg-3 col-md-4 col-6 footer-links">
            <h2>Important Links</h2>
            <Link href="" className="link">Blog</Link>
            <Link href="" className="link">Planetary Transit 2024</Link>
            <Link href="" className="link">Collaboration</Link>
            <Link href="" className="link">Tarot</Link>
            <Link href="" className="link">Zodiac Signs</Link>
            <Link href="" className="link">Vastu Shastra</Link>
            <Link href="" className="link">Solar Eclipse 2024</Link>
            <Link href="" className="link">Lunar Eclipse 2024</Link>
            <Link href="" className="link">Festival Calendar 2024</Link>
            <Link href="" className="link">Vrat Calendar 2024</Link>
            <Link href="" className="link">Mole Astrology</Link>
            <Link href="" className="link">Love Calculator</Link>
            <Link href="" className="link">Astrotalk Sitemap</Link>

            <h2>Astrologer</h2>
            <Link href="" className="link">Astrologer Login</Link>
            <Link href="" className="link">Astrologer Registration</Link>
            <h2>Corporate Info</h2>
            <Link href="" className="link">Refund & Cancellation Policy</Link>
          </div>

          <div className="col-lg-3 col-md-12 col-6 padding_left_side">
            <div className="row">
              <div className="col-lg-12 col-md-4 col-sm-12 col-12 footer-links">
                <h2>Corporate Info</h2>
                <Link href="" className="link">Terms & Conditions</Link>
                <Link href="" className="link">Privacy Policy</Link>
                <Link href="" className="link">Privacy Policy</Link>
                <Link href="" className="link">About Us</Link>
                <Link href="" className="link">Pricing Policy</Link>
              </div>

              <div className="col-lg-12 col-md-4 col-sm-12 col-12 footer-links">
                <h2>Contact us</h2>

                <div className="discription_link text">
                <FaHeadphones className="fa" />
                &nbsp; We are available 24x7 on chat support,
                <span className="text text-link">click to start chat</span>
                </div>
                <Link href="" className="link">
                <MdEmail className="fa" />
                &nbsp; Email ID:
                <span> contact@astrotalk.com</span>
                </Link>
                <div className="footer-social">
                  <Link href={""} className="social-media facebook">
                  <FaFacebookF className="social" />
                  </Link>

                  <Link href={""} className="social-media instagram">
                  <FaInstagram className="social" />
                  </Link>

                  <Link href={""} className="social-media linkedin">
                  <FaLinkedinIn className="social" />
                  </Link>

                  <Link href={""} className="social-media youtube">
                  <TfiYoutube className="social" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-12 col-md-4 col-sm-12 col-12">
                <h2>Secure</h2>

                <div className="row_secure_items">
                  <div className="confidential">
                    <img src="https://aws.astrotalk.com/assets/images/footer/private_home.png" height={100} width={100} alt="" className="icon_left_side" />
                    <h3>Private & Confidential</h3>
                  </div>
                  <div className='confidential'>
                    <img src="https://aws.astrotalk.com/assets/images/footer/verifired.png" height={100} width={100} alt="" className="icon_left_side" />
                    <h3>Verified Astrologers</h3>
                  </div>
                  <div className="confidential">
                    <img src="https://aws.astrotalk.com/assets/images/footer/secure_pay.png" height={100} width={100} alt="" className="icon_left_side" />
                    <h3>Secure Payments</h3>
                  </div>
                </div>

                <div className="btns_app">
                  <Link href="" className='pl-2'>
                    <img src="https://aws.astrotalk.com/assets/images/android.webp" height={44} width={128} alt="" className="app" />
                  </Link>
                  <Link href={""} className="pl-2">
                    <img src="https://aws.astrotalk.com/assets/images/ios.webp" height={44} width={128} alt="" className="app" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="copyright">
      <div className="container text-center">
        <p>Copyright © 2023 Astrotalk Services Private Limited (Formerly Codeyeti Software Solutions Pvt. Ltd.) All Rights Reserved</p>
      </div>
    </div>

    </>
  )
}

export default Footer