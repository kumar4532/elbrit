import Image from 'next/image'
import Logo from '../public/footer_logo.png'
import Mail from '../public/mail_icon.png'
import Location from '../public/location_icon.png'
import Phone from '../public/phone_icon.png'
import { MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#17414F] text-white py-8 px-4 md:px-8 mt-10">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-row justify-between mb-8 w-full">
                <div className="bg-[#215D72] rounded-2xl px-20 py-4 flex justify-center items-center">
                    <Image
                        src={Phone}
                        alt="phone"
                        width={50}
                        height={50}
                        className='-ml-4'
                    />
                    <div className='ml-8 mt-1'>
                    <h3 className="font-semibold">Phone Number</h3>
                    <p>+974 3118 1843</p>
                    </div>
                </div>
                <div className="bg-[#215D72] rounded-2xl px-16 py-4 flex justify-center items-center">
                    <Image
                        src={Mail}
                        alt="mail"
                        width={50}
                        height={50}
                        className='-ml-4'
                    />
                    <div className='ml-8 mt-1'>
                    <h3 className="font-semibold">Email Address</h3>
                    <p>Elbrithcqhr@gmail.com</p>
                    </div>
                </div>
                <div className="bg-[#215D72] rounded-2xl px-16 py-4 flex justify-center items-center">
                    <Image
                        src={Location}
                        alt="location"
                        width={50}
                        height={50}
                        className='-ml-4'
                    />
                    <div className='ml-8 mt-1'>
                    <h3 className="font-semibold">Office Location</h3>
                    <p>Ambassador Street, Zone 61,</p>
                    </div>
                </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="mb-4 md:mb-0 mr-40">
                    <Image
                    src={Logo}
                    alt="ELBRIT Life Sciences PVT. LTD. Logo"
                    width={300}
                    height={150}
                    className="max-w-[2000px]"
                    />
                </div>
                <div className="max-w-md text-sm mr-auto md:text-left">
                    <p>
                    Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
                    </p>
                </div>
            </div>
        
            <div className="text-center md:text-left text-sm">
            <p>
                <MapPin className="inline-block w-4 h-4 mr-1" />
                Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
            </p>
            </div>
        </div>
    </footer>
  )
}

