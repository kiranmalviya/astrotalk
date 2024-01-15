import React from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

const Header = () => {
  return (
    <section className="px-10 pb-3 fixed w-full bg-white top-0 -z-0 shadow-md">
      <div className='w-full px-3 mx-auto'>
        <div className="flex justify-between items-center flex-wrap">
          <div className="block m-0 p-0 cursor-pointer">
            <div className="block m-0 p-0 cursor-pointer text-xl no-underline whitespace-nowrap">
              <div className="w-44 h-auto">
                <img src="https://aws.astrotalk.com/assets/images/astrotalk-header-logo.webp" alt="logo" height={51} width={247} />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-end items-center">
              <div className="cursor-pointer ml-0 no-underline whitespace-nowrap py-1 px-3 text-gray-600">
                <Link href="/" className="text-sm block cursor-pointer ml-0 no-underline whitespace-nowrap py-1 px-3 text-gray-500">Free Kundli</Link>
              </div>
              <div className="cursor-pointer ml-0 no-underline whitespace-nowrap py-1 px-3 text-gray-600">
                <Link href="/" className="text-sm block cursor-pointer ml-0 no-underline whitespace-nowrap py-1 px-3 text-gray-500">Kundli Matching</Link>
              </div>

              <div className="cursor-pointer">
                <div className="relative transition-all">
                  <Link href={""} className="cursor-pointer ml-0 text-gray-600 no-underline whitespace-nowrap py-1 px-3 flex items-center gap-1 group transition-all group-hover:text-black">
                    <span className="text-sm block cursor-pointer ml-0 no-underline whitespace-nowrap py-1 px-3 text-gray-500">Horoscopes</span>
                    <MdKeyboardArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                    
                    <div className="border-1 z-10 absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                        Horoscope 2024
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Today's Horoscope
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Weekly Horoscope
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Monthly Horoscope
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Yearly Horoscope
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Daily Horoscope
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Free Kundali
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Tomorrow Horoscope
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Yesterday Horoscope
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Chinese Horoscope
                      </Link>
                    </div>  
                  </Link>
                </div>
              </div>

              <div className="ml-3 cursor-pointer">
                <div className="relative transition-all">
                  <Link href={""} className="cursor-pointer w-16 h-16 ml-0 text-gray-600 no-underline whitespace-nowrap py-1 px-3 flex items-center gap-1 group transition-all group-hover:text-black"><img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png" alt="" width={50} height={50} />
                  <IoMdArrowDropup className="rotate-180 transition-all group-hover:rotate-0" />

                  <div className="items-center z-10 justify-center border-1 absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  <Link href={""} className="justify-center cursor-pointer w-16 h-16 ml-0 text-gray-600 no-underline whitespace-nowrap py-1 px-3 flex items-center gap-1 group transition-all group-hover:text-black"><img className="items-center justify-center" src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png" alt="" width={50} height={50} /></Link>
                  <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-cyan-700 font-bold hover:bg-yellow-400">Kiran Malviya</Link>
                  <Link href={""} className="text-xs flex cursor-pointer items-center pb-0 pl-6 pr-8 text-black hover:bg-yellow-400">
                      +91 8839379887
                    </Link>
                    <Link href={""} className="border-none flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      <hr/>
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Notifications
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Wallet Transactions
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Order History
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Customer Support Chat
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Logout
                      </Link>
                      <Link href={""} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:bg-yellow-400">
                      Logout From Other Devices
                      </Link>
                      
                    </div>  

                  </Link>
                </div>
              </div>


            </div>
            <div className="p-0 flex-nowrap justify-start relative flex items-center">
            <div className="flex basis-auto items-center grow">
              <ul className="flex ml-auto flex-row pl-0 mb-0 list-none mt-0">
                <li className="text-gray-600 text-justify"><Link href="/" className="text-sm text-gray-600 ml-0 py-1 px-3 transition-all text-left cursor-pointer whitespace-nowrap block no-underline">Chat with Astrologer</Link></li>
                <li className="text-gray-600 text-justify"><Link href="/" className="text-sm text-gray-600 ml-0 py-1 px-3 transition-all text-left cursor-pointer whitespace-nowrap block no-underline">Talk to Astrologer</Link></li>
                <li className="text-gray-600 text-justify"><Link href="/" className="text-sm text-gray-600 ml-0 py-1 px-3 transition-all text-left cursor-pointer whitespace-nowrap block no-underline">Astromall</Link></li>
                <li className="text-gray-600 text-justify"><Link href="/" className="text-sm text-gray-600 ml-0 py-1 px-3 transition-all text-left cursor-pointer whitespace-nowrap block no-underline">Book a Pooja</Link></li>
                <li className="text-gray-600 text-justify"><Link href="/" className="text-sm text-gray-600 ml-0 py-1 px-3 transition-all text-left cursor-pointer whitespace-nowrap block no-underline">Blog</Link></li>
              </ul>
            </div>
          </div>
          </div>

          

        </div>
      </div>
    </section>
  )
}

export default Header