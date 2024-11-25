import { VitaminCard } from "./VitaminCard"
import bg1 from "../public/bg-1.jpeg"
import bg2 from "../public/bg-2.jpeg"
import bg3 from "../public/bg-3.jpeg"
import bg4 from "../public/bg-4.jpeg"
import bg5 from "../public/bg-5.jpeg"

const vitamins = [
  {
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    image: bg1
  },
  {
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    image: bg2
  },
  {
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    image: bg3
  },
  {
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    image: bg4
  },
  {
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    image: bg5
  }
]

export function IngredientsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap gap-6">
        <div className="space-y-4 max-w-lg">
          <p className="text-sm font-semibold tracking-wide text-[#1B4B5A] uppercase">
            INGREDIENTS
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#1B4B5A]">
            Better Ingredients
          </h2>
          <p className="text-gray-600 text-[12px] max-w-xl">
            Only the best when you choose products offered on our platform - high-quality 
            ingredients for high quality products!
          </p>
        </div>
        
        {vitamins.map((vitamin, index) => (
        <VitaminCard
            key={index}
            title={vitamin.title}
            description={vitamin.description}
            image={vitamin.image}
        />
        ))}

        <div className="w-[10%] p-4 bg-blue-200">
          <div className="w-full bg-blue-500 p-4 rounded-br-full"></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}
