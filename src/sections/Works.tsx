import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Works = () => {
  return (
    <section className=''>
      <div className='container'>
        <div className='lg:py-20 py-10'>
            <h2 className='font-semibold text-4xl md:text-5xl text-center'>Our Works</h2>
            <p className='mt-6 text-sm text-gray-500 text-center'>A glimpse of our portfolio</p>

            <div className='flex flex-col md:flex-row mt-10 gap-6 md:gap-10 items-center justify-center'>
                <div className='flex flex-col items-center gap-8 mx-8'>
                    <Image src={'/images/applekeyboard.svg'} alt='img' width={100} height={100} className='w-[300px]'/>
                    <h2 className='text-2xl'>Apple</h2>
                </div>
                <div className='flex flex-col items-center gap-8 mx-8'>
                    <Image src={'/images/cocacola.svg'} alt='img' width={100} height={100} className='w-[300px]'/>
                    <h2 className='text-2xl'>Coca-Cola</h2>
                </div>
                <div className='flex flex-col items-center gap-8 mx-8'>
                    <Image src={'/images/nike.svg'} alt='img' width={100} height={100} className='w-[300px]'/>
                    <h2 className='text-2xl'>Nike</h2>
                </div>
            </div>

            <div className='mt-10 flex items-center justify-center'>
                <Button text='See More' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Works
