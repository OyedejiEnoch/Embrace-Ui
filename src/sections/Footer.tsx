import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className=''>
        <div className='container'>
            <div className='lg:py-20 py-10 flex flex-col lg:flex-row items-start gap-10 lg:justify-between lg:items-center '>
                {/* Left */}
                <div className='flex flex-col gap-12'>
                    <Image src={'/images/logo.svg'} alt='logo' width={80} height={80} className='w-[150px]' />

                    <div className='flex items-center gap-8'>
                        <Image src={'/images/instagram.svg'} alt='instagram' width={20} height={20}  />
                        <Image src={'/images/twitter.svg'} alt='twitter' width={20} height={20}  />
                        <Image src={'/images/facebook.svg'} alt='faceebook' width={20} height={20}  />
                    </div>

                    <div>
                        <Button text='Contact Us' />
                    </div>
                </div>

                {/* Right */}
                <div>
                    <ul className='flex flex-wrap gap-10 justify-between'>
                        <div className='flex flex-col gap-6 mx-2 lg:mx-10'>
                            <li className='text-sm text-gray-500'>Work With Us</li>
                            <li className='text-sm text-gray-500'>Advertise With Us</li>
                            <li className='text-sm text-gray-500'>Support Us</li>
                            <li className='text-sm text-gray-500'>Business Advices</li>
                        </div>
                        <div className='flex flex-col gap-6 mx-2 lg:mx-10'>
                            <li className='text-sm text-gray-500'>Private Coaching</li>
                            <li className='text-sm text-gray-500'>Our Work</li>
                            <li className='text-sm text-gray-500'>Our Commitment</li>
                            <li className='text-sm text-gray-500'>Our Team</li>
                        </div>
                        <div className='flex flex-col gap-6 mx-2 lg:mx-10'>
                            <li className='text-sm text-gray-500'>About Us</li>
                            <li className='text-sm text-gray-500'>FAQs</li>
                            <li className='text-sm text-gray-500'>Report a Bug</li>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
            <div className='bg-black '>
                <div className='container flex flex-col md:flex-row justify-between items-center gap-8 text-white py-8'>

                    <h2 className='text-xs text-gray-200'>©2024 Enoch Oyedeji, Inc. - All Rights Reserved</h2>

                    <div className='flex flex-col md:flex-row items-center gap-8 text-xs text-gray-200 cursor-pointer'>
                        <span>Terms of use</span>
                        <span>Privacy policy</span>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer
