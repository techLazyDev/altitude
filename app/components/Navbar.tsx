import {Facebook, Instagram } from 'lucide-react'

export default function Navbar() {
  return (
  <header className='py-5 px-10 flex justify-between items-center'>
      <img src='/assets/logo.png' />
      <div className='flex gap-4'>
        <a href='/' className='bg-[#343434] p-2 rounded-md text-[#1C1C1C]'>
          <Facebook strokeWidth='2.5'/>
        </a>
        <a href='/' className='bg-[#343434] p-2 rounded-md text-[#1C1C1C]'>
          <Instagram strokeWidth='2.5'/>
        </a>
      </div>
  </header>
  );
}
