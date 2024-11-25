import Image, { StaticImageData } from "next/image"
import { Card } from "@/components/ui/card"
import pills from '../public/pills.jpeg'
import pillBottle from '../public/pillBottle.jpeg'

interface BlogPost {
  date: string
  title: string
  image: StaticImageData
  isLarge?: boolean
}

const upBlogPosts: BlogPost[] = [
  {
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image: pillBottle,
    isLarge: true
  },
  {
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image: pillBottle,
  },
  {
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image: pillBottle,
    isLarge: true
  },
  {
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image: pillBottle,
  }
]

const lowBlogPosts: BlogPost[] = [
    {
        date: "20 APR",
        title: "The Covid-19 Epidemic In 2022 Is Back",
        image: pills,
      },
      {
        date: "20 APR",
        title: "The Covid-19 Epidemic In 2022 Is Back",
        image: pills,
        isLarge: true
      },
      {
        date: "20 APR",
        title: "The Covid-19 Epidemic In 2022 Is Back",
        image: pills,
      },
      {
        date: "17 MAR",
        title: "Hac hendrerit mus nons semper suspendisse",
        image: pills,
        isLarge: true
      },
]

export default function BlogSection() {
  return (
    <div>
        <div className="text-center">
            <p className="text-[#0B2A49] text-sm font-semibold">OUR BLOG</p>
            <h2 className="text-4xl font-bold text-[#0B2A49] mb-8">Latest News</h2>
        </div>
        <div className="relative w-[90%] mx-auto">
            <div className="flex flex-row space-x-4 relative z-10">
                {upBlogPosts.map((post, index) => (
                    <Card 
                        key={index} 
                        className={`border-none overflow-hidden shadow-xl ${
                        post.isLarge ? "h-[400px]" : "h-[200px]"
                        } flex-1`}
                    >
                        <div className={`relative h-full`}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="object-cover rounded-xl h-full"
                                width={400}
                                height={320}
                            />
                            <div className="absolute top-4">
                                <span className="bg-[#0B2A49] text-white px-4 py-1 rounded-r-full text-sm font-medium">
                                {post.date}
                                </span>
                                <h3 className="text-white text-lg p-4 font-semibold">
                                {post.title}
                                </h3>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex flex-row space-x-4 relative mt-6">
                {lowBlogPosts.map((post, index) => (
                    <Card 
                        key={index} 
                        className={`border-none overflow-hidden shadow-xl ${
                        post.isLarge ? "h-[400px] -mt-[200px]" : "h-[200px]"
                        } flex-1`}
                    >
                        <div className={`relative h-full`}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="object-cover rounded-xl h-full"
                                width={400}
                                height={320}
                            />
                            <div className="absolute top-4">
                                <span className="bg-[#0B2A49] text-white px-4 py-1 rounded-r-full text-sm font-medium">
                                {post.date}
                                </span>
                                <h3 className="text-white text-lg p-4 font-semibold">
                                {post.title}
                                </h3>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  )
}

