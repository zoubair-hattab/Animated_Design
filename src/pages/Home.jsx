import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import HotDessert from '../components/hotDessert/HotDessert';
import Bannar from '../components/bannar/Bannar';
import PopularRecipie from '../components/popularRecipie/PopularRecipie';
import Reviews from '../components/reviews/Reviews';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className=" bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Bannar />
      <PopularRecipie />
      <Reviews />
      <Footer />
    </div>
  );
}
