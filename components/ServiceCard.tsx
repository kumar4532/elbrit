import React from 'react'

const ServiceCard = ({icon, title, description}: {icon: React.ReactNode, title: string, description: React.ReactNode}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#17414F] rounded-full p-4">
        <div className="w-8 h-8 text-white">
          {icon}
        </div>
      </div>
      <div className="text-left">
        <h3 className="font-semibold text-[#17414F]">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard