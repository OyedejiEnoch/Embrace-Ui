import Image from 'next/image'
import React from 'react'

const Reviews = () => {
  return (
    <section className=''>
      <div className='container'>
        <div className='lg:py-20 py-10 flex flex-col gap-8'>
            <div className='flex flex-col gap-4 md:flex-row items-center justify-between'>
                <h2 className='font-semibold text-4xl md:text-5xl'>What Our Client Said About Us</h2>
                <div className='flex gap-4 items-center'>
                    <div className='bg-[#F8F9FF] px-2 py-2 md:px-6 md:py-6 rounded-full cursor-pointer'>
                        <Image src={'/images/leftarrow.svg'} alt='icon' width={30} height={30} />
                    </div>
                    <div className='bg-[#3461FF] px-2 py-2 md:px-6 md:py-6 rounded-full cursor-pointer'>
                        <Image src={'/images/rightarrow.svg'} alt='icon' width={30} height={30} />
                    </div>
                </div>
            </div>

            <div className='flex items-center flex-col md:flex-row gap-6'>

                <div className='bg-[#3461FF] px-6 py-8 rounded-3xl text-white max-w-[400px]'>
                    <div className='flex items-center gap-4'>
                        <Image src={'/images/profile1.svg'} alt='img' width={70} height={70} />
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl font-semibold'>Amelia Joseph</h2>
                            <p>Chief Manager</p>
                        </div>
                    </div>

                    <p className='mt-6 text-sm text-gray-200 leading-[25px]'>My vision came alive effortlessly. Their blend of casual and professional approach 
                    made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p>
                </div>

                <div className='bg-[#F8F9FF] px-6 py-8 rounded-3xl max-w-[400px]'>
                    <div className='flex items-center gap-4'>
                        <Image src={'/images/profile2.svg'} alt='img' width={70} height={70} />
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl font-semibold'>Amelia Joseph</h2>
                            <p>Chief Manager</p>
                        </div>
                    </div>

                    <p className='mt-6 text-sm text-gray-700 leading-[25px]'>I found the digital expertise I needed. Their creative-professional balance exceeded 
                    expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!</p>
                </div>

                <div className='bg-[#F8F9FF] px-6 py-8 rounded-3xl max-w-[400px]'>
                    <div className='flex items-center gap-4'>
                        <Image src={'/images/profile3.svg'} alt='img' width={70} height={70} />
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl font-semibold'>Jacob Joshua</h2>
                            <p>Chief Manager</p>
                        </div>
                    </div>

                    <p className='mt-6 text-sm text-gray-700 leading-[25px]'>Embrace really nails it! Creative brilliance, approachable style. They're the partners 
                    you want—artistry meets strategy. Thrilled with what they achieved!"</p>
                </div>
            
            </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
