
import React from "react";
import { Cosmetic } from "@/services/dataService";

export const banners: Cosmetic[] = [
  {
    id: "b1",
    name: "Pixel Horizon",
    description: "A retro-style banner with pixelated sunset landscape",
    price: 200,
    type: "banner" as const,
    preview: (
      <div className="w-full h-10 rounded-md bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center px-2">
        <div className="bg-black/30 h-6 w-full rounded flex items-center justify-center">
          <div className="h-4 w-8 bg-orange-400 rounded-sm absolute bottom-6"></div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-2 bg-purple-300 rounded-sm" style={{ height: `${(i+1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>
    ),
    rarity: "common" as const
  },
  {
    id: "b2",
    name: "Neon Cyberpunk",
    description: "Vibrant cyberpunk-themed banner with neon aesthetics",
    price: 450,
    type: "banner" as const,
    preview: (
      <div className="w-full h-10 rounded-md bg-gradient-to-r from-cyan-500 to-blue-900 flex items-center justify-center px-2 overflow-hidden">
        <div className="w-full h-full flex items-center relative">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent to-pink-500/30"></div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 h-16 w-1 bg-cyan-300 blur-sm"></div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-0.5 bg-purple-400 blur-sm"></div>
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 h-8 w-0.5 bg-blue-300 blur-sm"></div>
        </div>
      </div>
    ),
    rarity: "rare" as const
  },
  {
    id: "b3",
    name: "Fantasy Realm",
    description: "Magical fantasy-themed banner with enchanted forest elements",
    price: 700,
    type: "banner" as const,
    preview: (
      <div className="w-full h-10 rounded-md bg-gradient-to-r from-emerald-700 to-indigo-900 flex items-center justify-center px-2 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
          <div className="absolute left-2 bottom-0 w-1 h-full bg-yellow-300/50 rounded-full blur-sm"></div>
          <div className="absolute left-4 bottom-0 w-0.5 h-3/4 bg-blue-300/50 rounded-full blur-sm"></div>
          <div className="absolute right-3 bottom-0 w-0.5 h-1/2 bg-purple-400/50 rounded-full blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-indigo-900/20"></div>
        </div>
      </div>
    ),
    rarity: "epic" as const
  },
  {
    id: "b4",
    name: "Digital Matrix",
    description: "A matrix-inspired banner with digital code rain effect",
    price: 800,
    type: "banner" as const,
    preview: (
      <div className="w-full h-10 rounded-md bg-black flex items-center justify-center px-2 overflow-hidden">
        <div className="w-full h-full relative">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-0 text-green-500 text-xs opacity-80"
              style={{ 
                left: `${i * 10}%`, 
                animation: `fall ${1 + i % 3}s linear infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              10
            </div>
          ))}
        </div>
      </div>
    ),
    rarity: "epic" as const
  },
  {
    id: "b5",
    name: "Golden Dragon",
    description: "An exclusive legendary banner with animated golden dragon scales",
    price: 1500,
    type: "banner" as const,
    preview: (
      <div className="w-full h-10 rounded-md bg-gradient-to-r from-yellow-600 to-amber-900 flex items-center justify-center px-2 overflow-hidden">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMmM3LjczMyAwIDE0LjQ1NiA0LjUyNCAxNy42IDE0LjQgMy4wNzMgOS44MjgtMy4yNzMgMTYuMjU1LTkuNi0uNEw5LjggMTZDMi41NDUgMTQuMTgyLTIuNDU1IDI1LjQ1NC0xLjYgMjkuNiAuNzc1IDM5IDcuMjI3IDM4IDIwIDM4YzYuOCAwIDEzLjYtMS4yIDE4LTQuNFYyQzMyLjggMi40IDI2LjQgMiAyMCAyeiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 animate-pulse"></div>
          <div className="absolute h-10 w-10 rounded-full bg-yellow-300/30 blur-xl left-1/4 -top-5"></div>
        </div>
      </div>
    ),
    rarity: "legendary" as const
  }
];
