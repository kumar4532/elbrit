import Image from "next/image";
import Logo from "../public/logo.png"
import vitamin from "../public/vitaminBottle.png"
import ServiceCard from "@/components/ServiceCard";
import Perks from "@/components/Perks";
import { IngredientsSection } from "@/components/IngredientsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <header className="p-6">
        <Image 
          src={Logo} 
          alt="logo" 
          width={160} 
          height={40} 
        />
      </header>

      <main className="container bg-[#E2F5FB] px-6 min-h-[120vh]">
        <h1 className="text-center text-[#003569] text-4xl md:text-6xl lg:text-9xl font-extrabold pt-8 mb-12">Essential Vitamins</h1>
        
        <div className="flex flex-col md:flex-row  space-x-28 items-center justify-center">
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-600 mb-2">Online Medical Supplies</p>
            <h2 className="text-2xl font-bold text-[#003569] mb-4">Get Your Vitamins <br /> & Minerals</h2>
            <button className="rounded-full bg-[#17414F] py-2 px-6 transition-colors hover:bg-[#225b6f]">
              <span className="text-sm text-white">EXPLORE</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center w-96 h-96 overflow-visible">
            <div className="bg-[#FFE9B5] w-[88%] h-[80%] rounded-tl-[40%] rounded-br-[40%]" />
            <Image
              src={vitamin}
              alt="Vitamin bottle"
              className="absolute top-1/3 left-[45%] transform -translate-x-1/2 -translate-y-1/2"
              width={440}
              height={440}
            />
          </div>

          <div className="space-y-6">
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L4 8v8l8 6 8-6V8l-8-6z" />
                  <path d="M12 22V12" />
                  <path d="M12 12L4 8" />
                  <path d="M12 12l8-4" />
                </svg>
              }
              title="Vitamins"
              description={
                <>
                  Increased Vitamins and <br />
                  minerals in your diet
                </>
              }
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <path d="M8 12h8" />
                </svg>
              }
              title="Weight Loss"
              description={
                <>
                  Weight Loss <br />
                  Find scientifically proven solutions
                </>
              }
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v18" />
                  <path d="M5 7h14" />
                  <path d="M5 12h14" />
                  <path d="M5 17h14" />
                </svg>
              }
              title="Functional Foods"
              description={
                <>
                  Functional Foods <br />
                  From protein powers to baby formula
                </>
              }
            />
          </div>
        </div>

        <div className="flex justify-between w-20 ml-36 mt-4">
          <div className="rounded-full p-4 bg-slate-400"></div>
          <div className="rounded-full p-4 bg-slate-400"></div>
        </div>
      </main>

      <div className="bg-[#17414F] p-14 mx-auto -mt-56 mb-4 w-4/5 rounded-[65px] relative">
        <Perks />
      </div>

      <IngredientsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

