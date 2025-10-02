import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold mr-2">
              C
            </span>
            <span className="text-xl font-bold">CryptoEx</span>
          </div>
          <p className="text-sm text-gray-400">
            Nền tảng giao dịch cryptocurrency hàng đầu Việt Nam, cung cấp dịch vụ an toàn và đa dạng.
          </p>
          <div className="flex space-x-2 mt-2">
            <span className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500">
              {/* Twitter Icon Placeholder */}
            </span>
            <span className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
              {/* Twitter Icon Filled Placeholder */}
            </span>
          </div>
        </div>

        {/* Column 2: Sản phẩm */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sản phẩm</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Giao dịch Spot</li>
            <li>Giao dịch Futures</li>
            <li>API Trading</li>
            <li>Ví điện tử</li>
          </ul>
        </div>

        {/* Column 3: Hỗ trợ */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Hỗ trợ</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Trung tâm trợ giúp</li>
            <li>Liên hệ</li>
            <li>Báo cáo lỗi</li>
            <li>Tình trạng hệ thống</li>
          </ul>
        </div>

        {/* Column 4: Công ty */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Công ty</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Về chúng tôi</li>
            <li>Nghe nghiệp</li>
            <li>Tin tức</li>
            <li>Đối tác</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        <p>© 2025 CryptoEx. Tất cả quyền được bảo lưu.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-400">Điều khoản</a>
          <a href="#" className="hover:text-gray-400">Bảo mật</a>
          <a href="#" className="hover:text-gray-400">Cookie</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;