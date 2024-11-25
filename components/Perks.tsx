import React from 'react'
import India from '../public/Group-8117.svg.png'
import Leaf from '../public/leafIcon.png'
import Box from '../public/box.png'
import Eco from '../public/eco.png'
import Ship from '../public/ship.png'
import Beaker from '../public/beaker.png'
import Image, { StaticImageData } from 'next/image';

type infoData = {
    title: string,
    content: string
}

const infoData = [
    {
        title: "Clinically studied",
        content: "All products that we offer have undergone lab and safety tests"
    },
    {
        title: "Vegetarian Friendly",
        content: "We have a wide selection of vegetarian products to meet your needs"
    },
    {
        title: "Made in India",
        content: "Shop local and explore health products made right here in India"
    },
    {
        title: "Free shipping",
        content: "We deliver to your door with no shipping costs on your orders"
    },
    {
        title: "No Risk",
        content: "We ensure that all products are safe and within their use-by date"
    },
    {
        title: "GMO free",
        content: "Natural, no modified products and derivatives for those who need it"
    },

]

const icons = [Beaker, Leaf, India, Ship, Box, Eco]

const Info = ({ info }: { info: infoData }) => (
    <div className="text-center mt-4">
      <h1 className="text-white text-lg mb-2">{info.title}</h1>
      <p className="text-[14px] mx-auto w-2/3 text-gray-400">{info.content}</p>
    </div>
);

const CircleAndInfo = ({ icon, info }: {icon: StaticImageData, info: infoData}) => (
    <div className='flex flex-col justify-center items-center '>
        <div className="flex justify-center items-center rounded-full bg-white w-28 h-28 mb-2">
            <Image src={icon} alt='' />
        </div>
        <Info info={info} />
    </div>
);
  
const TopCircleRow = () => (
    <div className="flex justify-evenly -mt-[110px]">
        {icons.slice(0, 3).map((icon, index) => (
            <CircleAndInfo key={index} icon={icon} info={infoData[index]} />
        ))}
    </div>
);
  
const BottomCircleRow = () => (
    <div className="flex justify-evenly w-full mt-20">
        {icons.slice(3, 6).map((icon, index) => (
            <CircleAndInfo key={index} icon={icon} info={infoData[index + 3]} />
        ))}
    </div>
);

const Perks = () => {
  return (
    <div>
        <TopCircleRow />
        <BottomCircleRow />
    </div>
  )
}

export default Perks