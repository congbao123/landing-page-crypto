"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import ggplay from "../../public/Img/icon-ggplay.png"
import appstore from "../../public/Img/iconios.png"
import iconapp from "../../public/Img/iconappmobile.png"
import { useTranslations } from "next-intl"

export default function DownloadApp() {
  const downloadRef = useRef<HTMLDivElement>(null)
  const t = useTranslations("downloadApp")
  useEffect(() => {
    const currentRef = downloadRef.current; // Lấy tham chiếu hiện tại
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Dọn dẹp observer khi component unmount
      }
    };
  }, []);

  return (
    <div
      ref={downloadRef}
      className="text-white py-12 px-4 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text and Buttons */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")} <span className="text-[#f7a600]">{t("titlemid")}</span>
          </h2>
          <p className="text-gray-400 text-[16px] md:text-[18px] max-w-lg mx-auto md:mx-0 mb-6">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 hover:scale-105 transition-all duration-300"
            >
              <Image
                src={appstore}
                alt="App Store"
                width={150}
                height={20}
                style={{ width: "auto", height: "auto" }}
                className="mr-2"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300"
            >
              <Image
                src={ggplay}
                alt="Google Play"
                 width={150}
          
                style={{ width: "auto", height: "100px" }}
                className="mr-2 hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* Right Side: App Mockup Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={iconapp}
            alt="App Mockup"
            width={300}
            height={700}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}