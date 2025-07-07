'use client';


import Banner from '@/component/Banner';

import CurvedLine from '@/component/CurvedLine';
import Description from '@/component/Description';
import Ecommerce from '@/component/Ecommerce';
import Hero from '@/component/Hero';
import ScheduleCall from '@/component/ScheduleCall';
import WhoAreYou from '@/component/WhoAreYou';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      <Hero />
      <Description />
      <WhoAreYou />
      <Banner />
      <CurvedLine />
      <Ecommerce />
      <ScheduleCall />
    </main>
    
    </>
    
  );
}
