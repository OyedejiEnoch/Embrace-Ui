import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <section className='w-full border-b border-gray-300'>
      <div className='container'>
        <div className='w-full h-20 flex items-center justify-between'>
            {/* Left */}
            <div>
                <Image src={'/images/logo.svg'} alt='logo' width={120} height={80} />
            </div>


            {/* Middle */}
            <ul className='hidden lg:flex items-center'>
                <li className='text-sm mx-4 cursor-pointer '>How it Works</li>
                <li className='text-sm mx-4 cursor-pointer'>Our Work</li>
                <li className='text-sm mx-4 cursor-pointer'>Pricing</li>
                <li className='text-sm mx-4 cursor-pointer'>About Us</li>
            </ul>


            {/* right */}
            <div>
               <Button text='Book a call'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header
