import Image from 'next/image'
import React from 'react'

const About = () => {

    const about =[
        {
            title:'Discovery',
            text:'We meet with you to learn about your business, your goals, and your target audience.',
            icon:'bolt'
        },
        {
            title:'Strategy',
            text:'We develop a customized marketing strategy that is based on your unique needs and goals.',
            icon:'chess'
        },
        {
            title:'Execution',
            text:'We execute our strategy using the latest digital marketing tools and techniques.',
            icon:'arrow'
        },
        {
            title:'Measurement',
            text:'We track the results of our campaigns so that we can make adjustments as needed..',
            icon:'ruler'
        },
    ]

  return (
    <section className=''>
        <div className='container'>
            <div className='lg:py-20 py-10 flex flex-col md:flex-row gap-10 '>
                {/* Left */}
                <div className='flex flex-col flex-1'>
                    <h2 className='font-semibold text-4xl md:text-5xl'>How it Works</h2>
                    <p className='mt-6 text-sm text-gray-500 max-w-[400px]'>We believe that the best way to create successful marketing campaigns 
                    is to work closely with our clients to understand their goals and challenges.</p>
                    <div className='w-[280px] h-[280px] lg:w-[387px] lg:h-[311px] rounded-xl mt-10'>
                        <Image src={'/images/keyboard.svg'} alt='img' width={100} height={100} className='w-full object-contain' />
                    </div>
                </div>

                {/* Right */}
                <div className='flex flex-col gap-8 flex-1'>
                    {about.map((details)=>(
                        <div key={details.title} className='flex items-center gap-8'>
                            <div className='px-6 py-6 bg-[#3461FF] rounded-2xl flex justify-center items-center'>
                                <Image src={`/images/${details.icon}.svg`} alt='icon'width={40} height={40} className='' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='text-2xl'>{details.title}</h2>
                                <p className='text-sm text-gray-500 max-w-[400px]'>{details.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default About
