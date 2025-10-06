

export default function AboutUs() {
  return (
    <section id ="about" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Về <span className="text-amber-700">BitGoGet</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Chúng tôi là nền tảng giao dịch cryptocurrency hàng đầu Thế giới, cam kết mang đến trải nghiệm giao dịch an
            toàn, nhanh chóng và đáng tin cậy cho hơn 1 triệu người dùng trên thế giới.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Đáng tin cậy - Purple/Blue gradient */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Đáng tin cậy</h3>
            <p className="text-gray-400 leading-relaxed">Được cấp phép và giám sát bởi các cơ quan tài chính</p>
          </div>

          {/* Nhanh chóng - Green gradient */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Nhanh chóng</h3>
            <p className="text-gray-400 leading-relaxed">Giao dịch được thực hiện trong vòng milliseconds</p>
          </div>

          {/* Hỗ trợ 24/7 - Orange gradient */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Hỗ trợ 24/7</h3>
            <p className="text-gray-400 leading-relaxed">Đội ngũ chăm sóc khách hàng chuyên nghiệp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
