"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useEffect, useRef } from "react"
import { HeroSection } from "@/components/newfilefix/hero"
import TrustedBySection from "@/components/newfilefix/TrustedBy"
import { FeaturesSection } from "@/components/newfilefix/features-section"
import HowItWorksSection from "@/components/newfilefix/how-it-works-section"
import TestimonialsSection from "@/components/newfilefix/testimonials-section"
import PricingSection from "@/components/newfilefix/pricing-section"
import FAQSection from "@/components/newfilefix/faq-section"
import { MobileAppSection } from "@/components/newfilefix/mobile-app-section"
import { ContactSection } from "@/components/newfilefix/contact-section"

export default function Home() {
  // Refs for scroll animation
  const trustedByRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const mobileAppRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Scroll animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up")
          entry.target.classList.remove("opacity-0", "translate-y-10")
        }
      })
    }, observerOptions)

    const refs = [
      trustedByRef,
      featuresRef,
      howItWorksRef,
      testimonialsRef,
      pricingRef,
      faqRef,
      mobileAppRef,
      contactRef,
    ]

    refs.forEach((ref) => ref.current && observer.observe(ref.current))

    return () => {
      refs.forEach((ref) => ref.current && observer.unobserve(ref.current))
    }
  }, [])

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero - No animation, always visible */}
      <HeroSection />

      {/* Trusted By */}
      <div
        ref={trustedByRef}
        className="opacity-0 translate-y-10 transition-all duration-700"
      >
        <TrustedBySection />
      </div>

      {/* Features */}
      <div
        ref={featuresRef}
        id="platform"
        className="opacity-0 translate-y-10 transition-all duration-700 py-12 sm:py-16 lg:py-20"
      >
        <FeaturesSection />
      </div>

      {/* How It Works */}
      <div
        ref={howItWorksRef}
        id="features"
        className="opacity-0 translate-y-10 transition-all duration-700"
      >
        <HowItWorksSection />
      </div>

      {/* Testimonials */}
      <div
        ref={testimonialsRef}
        className="opacity-0 translate-y-10 transition-all duration-700 py-12 sm:py-16 lg:py-20"
      >
        <TestimonialsSection />
      </div>

      {/* Pricing */}
      <div
        ref={pricingRef}
        id="pricing"
        className="opacity-0 translate-y-10 transition-all duration-700"
      >
        <PricingSection />
      </div>

      {/* FAQ */}
      <div
        ref={faqRef}
        id="about"
        className="opacity-0 translate-y-10 transition-all duration-700 py-12 sm:py-16 lg:py-20"
      >
        <FAQSection />
      </div>

      {/* Mobile App */}
      <div
        ref={mobileAppRef}
        className="opacity-0 translate-y-10 transition-all duration-700 py-12 sm:py-16 lg:py-20"
      >
        <MobileAppSection />
      </div>

      {/* Contact */}
      <div
        ref={contactRef}
        id="contact"
        className="opacity-0 translate-y-10 transition-all duration-700 py-12 sm:py-16 lg:py-20"
      >
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}