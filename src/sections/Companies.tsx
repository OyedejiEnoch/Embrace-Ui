import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <section className=' bg-[#FAFAFA]'>
        <div className='container'>
            <div className='w-full lg:py-20 py-16'>
                <h2 className='text-center text-3xl md:text-4xl font-semibold'>Companies We Work With</h2>

                <div className='w-full mt-20 flex flex-col items-center justify-center gap-20'>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10'>
                        <Image src={'/logos/spotify.svg'} alt='spotify-logo' width={80} height={80} />
                        <Image src={'/logos/google.svg'} alt='google-logo' width={80} height={80}  />
                        <Image src={'/logos/uber.svg'} alt='uber-logo' width={80} height={80}  />
                        <Image src={'/logos/microsoft.svg'} alt='microsoft-logo' width={80} height={80}  />
                        <Image src={'/logos/shopify.svg'} alt='shopify-logo' width={80} height={80}  />
                    </div>

                    <div className='hidden md:flex w-full  flex-col md:flex-row items-center justify-between gap-4'>
                        <Image src={'/logos/evernote.svg'} alt='evernote-logo' width={80} height={80} />
                        <Image src={'/logos/adobe.svg'} alt='adobe-logo' width={80} height={80}  />
                        <Image src={'/logos/paypal.svg'} alt='paypal-logo' width={80} height={80}  />
                        <Image src={'/logos/amazon.svg'} alt='amazon-logo' width={80} height={80}  />
                        <Image src={'/logos/asana.svg'} alt='asana-logo' width={80} height={80}  />
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Companies
