import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Faq = () => {
  return (
    <section className=''>
        <div className='container'>
            <div className='lg:py-20 py-10 flex items-center gap-12 flex-col md:flex-row'>
                {/* left */}
                <div className='flex-1 flex flex-col gap-8'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-sm'>How do i sign up for the project</h2>
                            <Image src={'/images/plus.svg'} alt='icon' width={20} height={20} className='cursor-pointer'/>
                        </div>
                        <hr />
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-sm'>What thing that i should prepare before starting?</h2>
                            <Image src={'/images/plus.svg'} alt='icon' width={20} height={20} className='cursor-pointer'/>
                        </div>
                        <hr />
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-sm'>Does my company need help for marketing advices?</h2>
                            <Image src={'/images/plus.svg'} alt='icon' width={20} height={20} className='cursor-pointer'/>
                        </div>
                        <hr />
                    </div>
                </div>

                {/* Right */}
                <div className='flex flex-col gap-8 flex-1'>
                    <h2 className=' text-3xl md:text-4xl'>How We Can Help You?</h2>
                    <p className='text-sm text-gray-400 max-w-[300px]'>Follow our newsletter. We will regulary update our latest project and avaliability</p>

                    <div className='mt-6 flex flex-col md:flex-row items-start md:items-center gap-2'>
                    <input className='w-[200px] bg-gray-100/50 md:w-[300px] border border-gray-400 px-5 py-4 rounded-full' placeholder='Enter Your Email' />
                    <Button text="Let's Talk" />
                    </div>

                    <span className='text-[#3461FF] text-sm font-semibold underline cursor-pointer'>More FAQ</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq
