import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <section className='hidden md:block'>
        <div className='container'>
            <div className='lg:py-20 py-10 ' >
                <div className='flex justify-between bg-[#232038] rounded-3xl px-20 py-16 text-white'>
                    <div className='flex-1 flex flex-col justify-between'>
                        <h2 className='font-bold text-4xl md:text-5xl'>Start Your Journey With Us Now</h2>

                        <div className='mt-6'>
                        <Button text='Start Now' />
                        </div>
                    </div>

                    <div className='flex-1 flex justify-center items-center'>
                        <Image src={'/images/circle.svg'} alt='img' width={80} height={80} className='w-[250px]'/>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Cta
