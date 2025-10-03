import Image from "next/image";
import bitcoin from "../../public/bitcoin.png";
import Ethicon from "../../public/ethereum.png";
import solanaicon from "../../public/solana.png";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import FeaturesNew from "./components/featuresnew";
import Web3Features from "./components/Web3Features ";
import { ArrowRight } from "lucide-react"
import TradingTerminal from "./components/TradingTerminal";
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
   <div className="  bg-black ">
    <Headers />
        <div className="h-[500px] mt-16 inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 justify-center items-center flex ">
          <div className="text-white justify-center items-center flex flex-col gap-6">
            <span className="text-[12px] flex items-center">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Thông báo: Nền tảng giao dịch crypto hàng đầu Việt Nam
                     </span>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Nền tảng giao dịch</h1>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"><span className="text-orange-500">Cryptocurrency</span> hàng đầu </h1>
           <p className="text-gray-400 text-[14px] md:text-[24px] sm:text-[18px]">Giao dịch, rút tiền và nạp tiền một cách an toàn với <br />công nghệ blockchain tiên tiến.
             Nền tảng của chúng <br />tôi hỗ trợ hơn 100+ loại cryptocurrency phổ biến. </p> 
             <div className="flex gap-4">
              <button className="bg-amber-700 h-10 px-6 rounded-md text-black hover:scale-105 transition-all duration-300">Bắt đầu giao dịch <ArrowRight className="inline-block  ml-2" /></button>
              <button className="bg-black h-10 px-6 rounded-md hover:text-black hover:bg-amber-700 hover:scale-105 transition-all duration-300">Tìm hiểu thêm</button>
             </div>
          </div>
          {/* Thêm 3 icon */}
        <Image
          src={solanaicon}
          alt="icon-solana"
          width={60}
          height={60}
          className="absolute block md:block lg:block top-90 left-77"
        />
        <Image
          src={bitcoin}
          alt="icon-bitcoin"
          width={60}
          height={60}
          className="absolute block md:hidden lg:block top-50 left-67"
        />
        <Image
          src={Ethicon}
          alt="icon-ETH"
          width={45}
          height={45}
          className="absolute block md:hidden lg:block top-76 right-67"
        />
        </div>
             
             <div className="bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 text-white mt-7 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {statsData.map((item, index) => (
          <div key={index} className="flex flex-col hover:scale-105 transition-all duration-300 items-center">
            <h3 className="text-4xl font-bold text-orange-500">{item.value}</h3>
            <p className="text-sm  text-gray-400">{item.description}</p>
            <p className="text-xs  text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <FeaturesNew />
     <Web3Features />
     <TradingTerminal />
    <Footer />
        </div>
  );
}
