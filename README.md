Bitgoget Landing Page

Tổng quan

Bitgoget Landing Page là một trang web được xây dựng để giới thiệu nền tảng giao dịch tiền mã hóa (cryptocurrency). Trang này được thiết kế với giao diện hiện đại, sử dụng Next.js và React để cung cấp trải nghiệm người dùng mượt mà, hỗ trợ đa ngôn ngữ (i18n) và tích hợp các hiệu ứng chuyển động đẹp mắt.

Công nghệ sử dụng





Framework: Next.js 

Ngôn ngữ lập trình: TypeScript

Quản lý đa ngôn ngữ: next-intl

Giao diện: Tailwind CSS



Hiệu ứng và tương tác: IntersectionObserver để tạo hiệu ứng cuộn (scroll animations)



Dữ liệu thời gian thực: WebSocket để hiển thị dữ liệu giá tiền mã hóa (BTC/USDT, ETH/USDT) từ Binance



Thư viện giao diện: Lucide-react (biểu tượng), next/font/google (font chữ)



Hỗ trợ đa ngôn ngữ: Sử dụng next-intl để hỗ trợ các ngôn ngữ như tiếng Anh (en), tiếng Việt (vi), tiếng Pháp (fr), tiếng Trung (zh).



Hiệu ứng cuộn: Sử dụng IntersectionObserver để kích hoạt hiệu ứng "slide-up" khi các phần tử xuất hiện trong khung nhìn.



Dữ liệu thời gian thực: Tích hợp WebSocket để hiển thị giá và thông tin thị trường của BTC và ETH.



Thiết kế đáp ứng: Giao diện thân thiện với cả thiết bị di động và máy tính để bàn.



Hiệu ứng hình ảnh: Video nền trong Hero và RegistrationRewards, cùng với các hiệu ứng hover và chuyển đổi mượt mà.

Cấu trúc mã nguồn





Home.tsx: Thành phần chính, tập hợp tất cả các thành phần khác và quản lý hiệu ứng cuộn.



RegistrationRewards.tsx: Hiển thị phần thưởng đăng ký với danh sách động và video minh họa.



TradingTerminal.tsx: Tích hợp WebSocket để hiển thị dữ liệu giao dịch thời gian thực.



Web3Features.tsx: Hiển thị các tính năng Web3 với các thẻ đặc trưng và nút CTA.



DownloadApp.tsx: Phần tải ứng dụng với hình ảnh mockup và liên kết đến các cửa hàng ứng dụng.



BitgogetSupport.tsx: Phần hỗ trợ với hai thẻ (cộng đồng và hỗ trợ khách hàng).



LanguageSwitcher.tsx: Bộ chuyển đổi ngôn ngữ với dropdown và hỗ trợ chuyển đổi mượt mà.

Cách chạy dự án





Cài đặt phụ thuộc:

npm install



Cấu hình môi trường:


Cấu hình next-intl với các tệp ngôn ngữ trong thư mục messages.



Chạy dự án:

npm run dev



Truy cập: Mở trình duyệt tại http://localhost:3000.

Các lưu ý


Đảm bảo kết nối internet để WebSocket trong TradingTerminal hoạt động.

Các tệp ngôn ngữ (JSON) cần được đặt trong thư mục messages để hỗ trợ đa ngôn ngữ.

Một số thành phần như FeaturesNew và InvestorSlider chưa được cung cấp mã nguồn, cần bổ sung để hoàn thiện.

Tác giả


Được phát triển bởi Trương Công Bảo.