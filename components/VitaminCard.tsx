import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

interface VitaminCardProps {
  title: string,
  description: string
  image: StaticImageData
}

export function VitaminCard({ title, description, image }: VitaminCardProps) {
  return (
    <Card className="group relative overflow-hidden border-none rounded-xl bg-[#EBF6FF] w-[27%]">
        <div
            className="absolute inset-0 bg-cover bg-bottom opacity-100"
            style={{
            backgroundImage: `url(${image.src})`,
            }}
        ></div>
        <CardContent className="relative z-10 flex flex-col justify-between w-[80%] h-52">
            <div className="space-y-2 py-4 w-full">
                <CardTitle className="text-[#1B4B5A] text-xl font-bold">{title}</CardTitle>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <Link
                href="#"
                className="text-[#1B4B5A] font-semibold text-sm underline"
            >
                SEE MORE
            </Link>
        </CardContent>
    </Card>

  )
}

