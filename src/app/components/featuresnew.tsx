import { Shield, Lock, TrendingUp } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Giao dịch tức thời",
      description:
        "Thực hiện giao dịch crypto với tốc độ ánh sáng. Hệ thống matching engine tiên tiến đảm bảo giao dịch được thực hiện trong vòng milliseconds.",
    },
    {
      icon: Lock,
      title: "Bảo mật tuyệt đối",
      description:
        "Quản lý rủi ro thông minh với công nghệ AI. Theo dõi danh mục đầu tư và nhận cảnh báo về các biến động thị trường quan trọng.",
    },
    {
      icon: TrendingUp,
      title: "Chiến lược tùy chỉnh",
      description:
        "Xây dựng các chiến lược giao dịch tự động, tái cân bằng danh mục và tối ưu hóa lợi nhuận với các công cụ phân tích chuyên sâu.",
    },
  ]

  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Tính năng vượt trội</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Trải nghiệm giao dịch cryptocurrency hoàn hảo với các tính năng tiên tiến nhất
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300 cursor-pointer">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors">
                <feature.icon className="w-8 h-8 text-orange-500" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-orange-500 group-hover:text-orange-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
