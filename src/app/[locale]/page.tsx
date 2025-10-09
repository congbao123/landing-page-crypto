"use client"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FeaturesNew from "../../components/featuresnew"
import Web3Features from "../../components/Web3Features "
import { ArrowRight } from "lucide-react"
import TradingTerminal from "../../components/TradingTerminal"
import { Button } from "../../components/Button"
import AboutUs from "../../components/AboutUs"
import { useTranslations } from "next-intl"
import { useEffect, useRef } from "react"
import { Content } from "next/font/google"
import RegistrationRewards from "@/components/RegistrationRewards"

interface StatItem {
  value: string
  description: string
  label: string
}

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations("hero")
  const b = useTranslations("stats")
  const statsData: StatItem[] = [
    { value: "1.2M+", description: b("users"), label: "CryptoEx" },
    { value: "99.9%", description: b("uptime"), label: "Uptime" },
    { value: "$60B+", description: b("volume"), label: "Volume" },
    { value: "24/7", description: b("support"), label: "Support" },
  ]

  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const web3Ref = useRef<HTMLDivElement>(null)
  const tradingRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const RegistrationRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up")
          entry.target.classList.remove("opacity-0", "translate-y-10")
        }
      })
    }, observerOptions)

    const refs = [ contentRef,statsRef,RegistrationRef, featuresRef, web3Ref, tradingRef, aboutRef]
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <div className="bg-black">
      <Header />
      <div ref={contentRef} className="h-[700px] mt-16 relative overflow-hidden opacity-0 translate-y-10 transition-all duration-700 flex justify-center items-center">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video/dongxu3d.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

      
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10"></div>

        {/* Content */}
        <div  className="text-white text-center items-center flex flex-col gap-6 relative z-10">
          <span className="text-[12px] w-[300px] flex items-center justify-center mb-6 px-4 py-2 animate-bounce-slow rounded-md bg-white/30 backdrop-blur-sm border-amber-50">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {t("badge")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{t("title")}</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#f7a600]">{t("titleEnd")}</span>
          </h1>
          <p
            className="text-gray-400 text-[14px] sm:text-[18px] md:text-[24px]
              max-w-3xl mx-auto text-center whitespace-normal break-words"
          >
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-10 px-6 rounded-md hover:text-black hover:scale-105 transition-all duration-300">
              {t("startTrading")} <ArrowRight className="inline-block ml-2" />
            </Button>
            <Button className="h-10 px-6 rounded-md bg-white/10 backdrop-blur-sm hover:text-black hover:bg-white/20 border-white/30 text-white hover:scale-105 transition-all duration-300">
              {t("learnMore")}
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 text-white mt-7 py-12 px-4 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col hover:scale-105 transition-all duration-300 items-center">
              <h3 className="text-4xl font-bold text-[#f7a600]">{item.value}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
       <div ref={RegistrationRef} className="opacity-0 translate-y-10 transition-all duration-700">
          <RegistrationRewards />
       </div>
      <div ref={featuresRef} className="opacity-0 translate-y-10 transition-all duration-700">
        <FeaturesNew />
      </div>
      <div ref={web3Ref} className="opacity-0 translate-y-10 transition-all duration-700">
        <Web3Features />
      </div>
      <div ref={tradingRef} className="opacity-0 translate-y-10 transition-all duration-700">
        <TradingTerminal />
      </div>
      <div ref={aboutRef} className="opacity-0 translate-y-10 transition-all duration-700">
        <AboutUs />
      </div>
      <Footer />
    </div>
  )
}
