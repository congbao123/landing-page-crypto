"use client";

import Image from "next/image";
import bitcoin from "../../public/Img/bitcoin.png";
import Ethicon from "../../public/Img/ethereum.png";
import solanaicon from "../../public/Img/solana.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesNew from "../components/featuresnew";
import Web3Features from "../components/Web3Features ";
import { ArrowRight } from "lucide-react";
import TradingTerminal from "../components/TradingTerminal";
import { Button } from "../components/Button";
import AboutUs from "../components/AboutUs";
import { useTranslation } from "next-i18next";

interface StatItem {
  value: string;
  description: string;
  label: string;
}

export default function Home() {
  const statsData: StatItem[] = [
    { value: "1.2M+", description: "Người dùng tin tưởng", label: "CryptoEx" },
    { value: "99.9%", description: "Thời gian hoạt động", label: "Uptime" },
    { value: "$60B+", description: "Khối lượng giao dịch", label: "Volume" },
    { value: "24/7", description: "Hỗ trợ khách hàng", label: "Support" },
  ];

  return (
    <div className="bg-black">
      <Header />
      <div className="h-[500px] mt-16 inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 flex justify-center items-center relative">
        <div className="text-white text-center flex flex-col gap-6">
          <span className="text-[12px] flex items-center justify-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Thông báo: Nền tảng giao dịch crypto hàng đầu thế giới
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Nền tảng giao dịch
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-orange-500">Cryptocurrency</span> hàng đầu
          </h1>
          <p className="text-gray-400 text-[14px] md:text-[24px] sm:text-[18px]">
            Giao dịch, rút tiền và nạp tiền một cách an toàn với <br />công nghệ blockchain tiên tiến. Nền tảng của chúng <br />tôi hỗ trợ hơn 100+ loại cryptocurrency phổ biến.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-10 px-6 rounded-md hover:text-black hover:scale-105 transition-all duration-300">
              Bắt đầu giao dịch <ArrowRight className="inline-block ml-2" />
            </Button>
            <Button className="bg-black h-10 px-6 rounded-md hover:text-black hover:bg-amber-700 hover:scale-105 transition-all duration-300">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
        {/* Icons */}
        <Image
          src={solanaicon}
          alt="icon-solana"
          width={60}
          height={60}
          className="absolute hidden md:block top-[25%] left-[5%]"
        />
        <Image
          src={bitcoin}
          alt="icon-bitcoin"
          width={60}
          height={60}
          className="absolute hidden md:block top-[50%] left-[10%]"
        />
        <Image
          src={Ethicon}
          alt="icon-ETH"
          width={45}
          height={45}
          className="absolute hidden md:block top-[75%] right-[5%]"
        />
      </div>

      <div className="bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 text-white mt-7 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {statsData.map((item, index) => (
            <div key={index} className="flex flex-col hover:scale-105 transition-all duration-300 items-center">
              <h3 className="text-4xl font-bold text-orange-500">{item.value}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <FeaturesNew />
      <Web3Features />
      <TradingTerminal />
      <AboutUs />
      <Footer />
    </div>
  );
}