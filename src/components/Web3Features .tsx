"use client"

import { Database, Coins, ShoppingBag, Shuffle, ArrowRight } from "lucide-react"
import { Button } from "./Button"

const Web3Features = () => {
  const features = [
    {
      icon: Database,
      color: "text-white bg-pink-500",
      hover: "hover:bg-pink-400/10",
      title: "DeFi Integration",
      description:
        "Kết nối với các giao thức DeFi hàng đầu như Uniswap, Compound, và Aave để tối đa hóa lợi nhuận.",
    },
    {
      icon: Coins,
      color: "text-white bg-green-400",
      hover: "hover:bg-green-500/10",
      title: "Yield Farming",
      description:
        "Tham gia yield farming và liquidity mining để kiếm thêm thu nhập thụ động từ crypto holdings.",
    },
    {
      icon: ShoppingBag,
      color: "text-white bg-bule-500",
      hover: "hover:bg-blue-500/10",
      title: "NFT Marketplace",
      description:
        "Mua bán NFT với trải nghiệm liền mạch, hỗ trợ đầy đủ các chuẩn ERC-721 và ERC-1155.",
    },
    {
      icon: Shuffle,
      color: "text-white  bg-orange-400",
      hover: "hover:bg-orange-500/10",
      title: "Cross-Chain Bridge",
      description:
        "Chuyển đổi tài sản giữa các blockchain khác nhau một cách liền mạch và nhanh chóng.",
    },
  ]

  return (
    <section id="web3" className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tính năng <span className="text-amber-700">Web3</span> tiên tiến
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Khám phá thế giới DeFi, NFT và các công nghệ blockchain mới nhất
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group bg-black rounded-2xl p-8 min-h-[260px] hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group text-left shadow-lg  ${feature.hover}`}
            >
              {/* Icon box */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-gray-900 ${feature.color}`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-12">
          <Button className="px-6 py-3 rounded-lg bg-gradient-to-r hover:text-black hover:scale-105 transition-all duration-300">
            Khám phá Web3 <ArrowRight className="inline-block  ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Web3Features
