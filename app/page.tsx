import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className='relative'>
      <div className='flex lg:flex-row flex-col-reverse items-center p-20'>
          <div className='lg:w-1/2 w-full flex flex-col justify-center lg:items-start items-center text-center lg:text-start gap-7'>
            <h1 className='text-6xl font-bold text-white'>Hoodies Designed for Life at Any <span className='text-[#DFFF48]'>Altitude</span>.</h1>
            <p className='text-[#757575] font-light'>Whether you're scaling mountains, exploring city streets, or relaxing by the fire, Altitude Hoodie is built to keep up with your every adventure. Crafted with premium materials, unmatched comfort, and timeless style, it&apos;s the perfect layer for wherever life takes you.</p>
            <a className='bg-[#DFFF48] font-bold rounded-xl flex items-center justify-between w-64 py-3 px-5'>PRE-ORDERS ONLY <ArrowRight strokeWidth="3"/></a>
          </div>
          <div className='lg:w-1/2 w-full flex flex-col justify-center'>
            <img src='/assets/main.png'/>
          </div>
      </div>
      <div className='absolute top-0 w-full -z-10'>
        <img src='/assets/vector.png' className='w-full'/>
        </div>
        <div className='absolute lg:bottom-32 bottom-14 w-full -z-10'>
        <img src='/assets/vector2.png' className='w-full'/>
        </div>
    </main>
  );
}
