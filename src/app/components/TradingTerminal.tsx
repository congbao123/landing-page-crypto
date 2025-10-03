"use client"

import { useEffect, useState } from "react"



// Helper format function
function formatPrice(num: number) {
  if (num >= 1000) return num.toLocaleString("en-US", { maximumFractionDigits: 2 }) // 12,345.67
  if (num >= 1) return num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) // 123.45
  return num.toPrecision(6) // giá nhỏ thì giữ 6 chữ số có nghĩa
}

function formatChange(num: number) {
  return `${num > 0 ? "+" : ""}${num.toFixed(2)}%`
}

function formatVolume(num: number) {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B"
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M"
  if (num >= 1e3) return (num / 1e3).toFixed(2) + "K"
  return num.toFixed(2)
}

interface CryptoData {
  symbol: string
  price: string
  change: string
  volume24h: string
  openOrders: number
  fee: string
}

export default function TradingTerminal() {
  const [btcData, setBtcData] = useState<CryptoData>({
    symbol: "BTC/USDT",
    price: "0.00",
    change: "0.00",
    volume24h: "0",
    openOrders: 0,
    fee: "0.1",
  })

  const [ethData, setEthData] = useState<CryptoData>({
    symbol: "ETH/USDT",
    price: "0.00",
    change: "0.00",
    volume24h: "0",
    openOrders: 0,
    fee: "0.1",
  })

  useEffect(() => {
    // Kết nối với Binance WebSocket để cập nhật giá theo thời gian thực
    const btcWs = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@ticker")
    const ethWs = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@ticker")

    btcWs.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setBtcData((prev) => ({
        ...prev,
        price: data.c,
        change: data.P,
        volume24h: data.q, // raw volume
        openOrders: Math.floor(Math.random() * 2000) + 1000, // mô phỏng
      }))
    }

    ethWs.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setEthData((prev) => ({
        ...prev,
        price: data.c,
        change: data.P,
        volume24h: data.q,
        openOrders: Math.floor(Math.random() * 2000) + 1000, // mô phỏng
      }))
    }

    return () => {
      btcWs.close()
      ethWs.close()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 lg:p-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Bên trái */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Giao diện giao dịch <span className="text-orange-500">chuyên nghiệp</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Nền tảng giao dịch được thiết kế cho cả người mới bắt đầu và trader chuyên nghiệp. 
            Tích hợp đầy đủ các công cụ phân tích kỹ thuật và quản lý rủi ro.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-gray-300">Giao dịch Spot & Futures</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-gray-300">Rút tiền & Nạp tiền nhanh chóng</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-gray-300">API Trading cho Developer</span>
            </li>
          </ul>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Khám phá nền tảng
          </button>
        </div>

        {/* Bên phải - Trading Terminal */}
        <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 text-gray-400 text-sm font-mono">CryptoEx Trading Terminal</span>
            </div>
            <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">LIVE</div>
          </div>

          {/* Giá */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* BTC */}
            <div>
              <div className="text-gray-400 text-sm mb-2">{btcData.symbol}</div>
              <div className="text-green-400 text-3xl font-bold font-mono mb-1">
                ${formatPrice(Number(btcData.price))}
              </div>
              <div className="text-green-400 text-sm">
                {formatChange(Number(btcData.change))}
              </div>
            </div>

            {/* ETH */}
            <div>
              <div className="text-gray-400 text-sm mb-2">{ethData.symbol}</div>
              <div className="text-green-400 text-3xl font-bold font-mono mb-1">
                ${formatPrice(Number(ethData.price))}
              </div>
              <div className="text-green-400 text-sm">
                {formatChange(Number(ethData.change))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4 border-t border-gray-800 pt-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Khối lượng 24h</span>
              <span className="text-white font-mono">{formatVolume(Number(btcData.volume24h))}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Số lệnh đang chờ</span>
              <span className="text-orange-400 font-mono">{btcData.openOrders.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Phí giao dịch</span>
              <span className="text-orange-400 font-mono">{btcData.fee}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
