import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <section className=''>
      <div className='container'>
        <div className='lg:py-20 py-10 flex flex-col gap-10 md:flex-row justify-between'>
            {/* Left */}
            <div className='flex-1'>
                <Image src={'/images/team.svg'} alt='img' width={100} height={100} className='w-[500px]'/>
            </div>

            {/* Right */}
            <div className='flex gap-4 flex-col justify-between flex-1'>
                <div className='flex flex-col gap-6'> 
                    <h2 className='font-semibold text-4xl md:text-5xl'>Meet Our Team</h2>
                    <p className='text-sm text-gray-400 max-w-[400px]'>Discover the brilliance behind Embrace. Our team blends innovation and artistry to craft digital wonders that captivate</p>
                </div>

                <div className=''>
                    <Button text='Learn More' />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Team
