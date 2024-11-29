import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full'>
      <div className='container'>
        <div className='w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 py-16 md:py-20 lg:py-20 md:px-10 px-2 '>
            {/* Left */}
            <div>
                <h2 className='text-6xl md:text-6xl lg:text-7xl font-bold max-w-[250px]  md:max-w-[300px] lg:max-w-[400px] leading-[65px] lg:leading-[75px] '>We Take Care Of Your Brand</h2>
                <p className='mt-6 text-gray-500 text-sm md:text-[16px] max-w-[300px] lg:max-w-[500px]'>We care about our work and we care about our clients </p>
                
                <div className='mt-6 flex flex-col md:flex-row items-start md:items-center gap-2'>
                <input className='w-[200px] bg-gray-100/50 md:w-[300px] border border-gray-400 px-5 py-4 rounded-full' placeholder='Enter Your Email' />
                <Button text="Let's Talk" />
                </div>
            </div>


            {/* Right */}
            <div className=''>
                <Image src={'/images/hero.svg'} alt='hero-img' width={300} height={280} className='w-[500px] object-contain' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
