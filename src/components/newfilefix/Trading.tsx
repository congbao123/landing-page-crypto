// 'use client';

// import { useEffect, useState } from 'react';
// import { useTranslations } from 'next-intl';
// import { Button } from '../Button';

// // Helper functions
// function formatPrice(num: number) {
//   if (num >= 1000) return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
//   if (num >= 1) return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//   return num.toPrecision(6);
// }

// function formatChange(num: number) {
//   return `${num > 0 ? '+' : ''}${num.toFixed(2)}%`;
// }

// interface CoinData {
//   symbol: string;
//   name: string;
//   price: string;
//   change: string;
// }

// export default function Trading() {
//   const t = useTranslations('trading');

//   const [hotCoins, setHotCoins] = useState<CoinData[]>([
//     { symbol: 'BTC', name: 'Bitcoin', price: '0', change: '0' },
//     { symbol: 'ETH', name: 'Ethereum', price: '0', change: '0' },
//     { symbol: 'BNB', name: 'BNB', price: '0', change: '0' },
//     { symbol: 'XRP', name: 'XRP', price: '0', change: '0' },
//     { symbol: 'SOL', name: 'Solana', price: '0', change: '0' },
//   ]);

//   const [newCoins, setNewCoins] = useState<CoinData[]>([
//     { symbol: 'ADA', name: 'Cardano', price: '0', change: '0' },
//     { symbol: 'DOGE', name: 'Dogecoin', price: '0', change: '0' },
//     { symbol: 'MATIC', name: 'Polygon', price: '0', change: '0' },
//     { symbol: 'DOT', name: 'Polkadot', price: '0', change: '0' },
//     { symbol: 'LINK', name: 'Chainlink', price: '0', change: '0' },
//   ]);

//   const [topGainers, setTopGainers] = useState<CoinData[]>([
//     { symbol: 'TRX', name: 'TRON', price: '0', change: '0' },
//     { symbol: 'AVAX', name: 'Avalanche', price: '0', change: '0' },
//     { symbol: 'UNI', name: 'Uniswap', price: '0', change: '0' },
//     { symbol: 'LTC', name: 'Litecoin', price: '0', change: '0' },
//     { symbol: 'NEAR', name: 'NEAR Protocol', price: '0', change: '0' },
//   ]);

//   useEffect(() => {
//     // WebSocket cho Hot Coins
//     const hotSymbols = ['btcusdt', 'ethusdt', 'bnbusdt', 'xrpusdt', 'solusdt'];
//     const hotStreams = hotSymbols.map(s => `${s}@ticker`).join('/');
//     const hotWs = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${hotStreams}`);

//     hotWs.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       const data = message.data;
//       if (data && data.s) {
//         const symbol = data.s.replace('USDT', '');
//         setHotCoins(prev => prev.map(coin => 
//           coin.symbol === symbol 
//             ? { ...coin, price: data.c, change: data.P }
//             : coin
//         ));
//       }
//     };

//     // WebSocket cho New Coins
//     const newSymbols = ['adausdt', 'dogeusdt', 'maticusdt', 'dotusdt', 'linkusdt'];
//     const newStreams = newSymbols.map(s => `${s}@ticker`).join('/');
//     const newWs = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${newStreams}`);

//     newWs.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       const data = message.data;
//       if (data && data.s) {
//         const symbol = data.s.replace('USDT', '');
//         setNewCoins(prev => prev.map(coin => 
//           coin.symbol === symbol 
//             ? { ...coin, price: data.c, change: data.P }
//             : coin
//         ));
//       }
//     };

//     // WebSocket cho Top Gainers
//     const topSymbols = ['trxusdt', 'avaxusdt', 'uniusdt', 'ltcusdt', 'nearusdt'];
//     const topStreams = topSymbols.map(s => `${s}@ticker`).join('/');
//     const topWs = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${topStreams}`);

//     topWs.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       const data = message.data;
//       if (data && data.s) {
//         const symbol = data.s.replace('USDT', '');
//         setTopGainers(prev => prev.map(coin => 
//           coin.symbol === symbol 
//             ? { ...coin, price: data.c, change: data.P }
//             : coin
//         ));
//       }
//     };

//     return () => {
//       hotWs.close();
//       newWs.close();
//       topWs.close();
//     };
//   }, []);

//   const CoinItem = ({ coin }: { coin: CoinData }) => {
//     const isPositive = Number(coin.change) >= 0;
    
//     return (
//       <div className="flex items-center justify-between py-3 hover:bg-[#1a1a1a] px-3 rounded-lg transition-colors">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
//             {coin.symbol.substring(0, 1)}
//           </div>
//           <div>
//             <div className="font-bold text-white">{coin.symbol}</div>
//             <div className="text-sm text-gray-500">{coin.name}</div>
//           </div>
//         </div>
//         <div className="text-right">
//           <div className="font-bold text-white">${formatPrice(Number(coin.price))}</div>
//           <div className={`text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-500'}`}>
//             {formatChange(Number(coin.change))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div id="trading" className="mt-6 bg-black text-white py-24 px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//             Tiền điện tử <span className="text-[#f7a600]">thịnh hành</span>
//           </h1>
//           <p className="text-gray-400 text-lg">Giao dịch 1.000+ loại tiền điện tử theo thời gian thực.</p>
//         </div>

//         {/* 3 Columns Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Danh sách nóng */}
//           <div className="bg-[#0f0f0f] rounded-2xl border border-gray-800 overflow-hidden">
//             <div className="bg-[#1a1a1a] px-6 py-4 border-b border-gray-800">
//               <h3 className="text-xl font-bold">Danh sách nóng</h3>
//             </div>
//             <div className="p-3">
//               {hotCoins.map((coin) => (
//                 <CoinItem key={coin.symbol} coin={coin} />
//               ))}
//             </div>
//           </div>

//           {/* Coin mới */}
//           <div className="bg-[#0f0f0f] rounded-2xl border border-gray-800 overflow-hidden">
//             <div className="bg-[#1a1a1a] px-6 py-4 border-b border-gray-800">
//               <h3 className="text-xl font-bold">Coin mới</h3>
//             </div>
//             <div className="p-3">
//               {newCoins.map((coin) => (
//                 <CoinItem key={coin.symbol} coin={coin} />
//               ))}
//             </div>
//           </div>

//           {/* Tăng mạnh nhất */}
//           <div className="bg-[#0f0f0f] rounded-2xl border border-gray-800 overflow-hidden">
//             <div className="bg-[#1a1a1a] px-6 py-4 border-b border-gray-800">
//               <h3 className="text-xl font-bold">Tăng mạnh nhất</h3>
//             </div>
//             <div className="p-3">
//               {topGainers.map((coin) => (
//                 <CoinItem key={coin.symbol} coin={coin} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }