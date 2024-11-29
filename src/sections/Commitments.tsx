import React from 'react'

const Commitments = () => {
  return (
    <section className='w-full'>
        <div className='container'>
            <div className='lg:py-20 py-10 flex flex-col gap-10 md:flex-row justify-between px-2 md:px-10'>
                {/* Left */}
                <div className='flex flex-row gap-12 flex-1'>
                    {/* top */}
                    <div className='flex flex-col items-start gap-12'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-4xl md:text-5xl'>245%</h2>
                            <p className='text-sm text-gray-400'>More revenues for the brand</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-4xl md:text-5xl'>50+</h2>
                            <p className='text-sm text-gray-400'>Brand trust us</p>
                        </div>
                        
                    </div>

                    {/* bottom */}
                    <div className='flex flex-col items-start gap-12'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-4xl md:text-5xl'>130K+</h2>
                            <p className='text-sm text-gray-400'>Audiences reached</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h2 className='font-bold text-4xl md:text-5xl'>24+</h2>
                            <p className='text-sm text-gray-400'>World wide awards</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className='flex gap-6 flex-col items-start flex-1'>
                    <h2 className='font-bold text-4xl md:text-5xl'>Commitments</h2>
                    <p className='text-sm text-gray-400 max-w-[500px]'>We are committed to working with you collaboratively to understand
                        your goals and create a strategy that will achieve them.</p>
                    <p className='font-semibold text-[#3461FF] text-sm '>Learn More</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Commitments
