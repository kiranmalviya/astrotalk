import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import Services from '@/Components/Services';
import News from '@/Components/News';
import Celebrity from '@/Components/Celebrity';
import Astrologers from '@/Components/Astrologers';
import Whyastrology from '@/Components/Whyastrology';
import Aboutastrology from '@/Components/Aboutastrology';

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <Services />
      <News />
      <Celebrity />
      <Astrologers />
      <Whyastrology />
      <Aboutastrology />
      <Footer />
    </section>
  )
}
