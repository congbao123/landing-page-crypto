import { Twitter, Facebook, Instagram } from "lucide-react";
import logobgg from "../../public/Img/logo-text.webp"
import Image from "next/image"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
           <Image 
      src={logobgg} 
      alt="CryptoTCB" 
      width={150} 
      height={40} 
      priority
    />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Nền tảng giao dịch cryptocurrency hàng đầu Việt Nam, cung cấp dịch vụ an toàn và đa dạng.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Sản phẩm */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-700">Sản phẩm</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Giao dịch Spot</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Giao dịch Futures</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">API Trading</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Ví điện tử</li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-700">Hỗ trợ</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Trung tâm trợ giúp</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Liên hệ</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Báo cáo lỗi</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Tình trạng hệ thống</li>
          </ul>
        </div>

        {/* Công ty */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-700">Công ty</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Về chúng tôi</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Nghe nghiệp</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Tin tức</li>
            <li className="hover:text-amber-700 cursor-pointer transition-colors">Đối tác</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        <p>© 2025 CryptoEx. Tất cả quyền được bảo lưu.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-amber-700 transition-colors">Điều khoản</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Bảo mật</a>
          <a href="#" className="hover:text-amber-700 transition-colors">Cookie</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;