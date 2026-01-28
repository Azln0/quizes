
import React from "react";
import { User, Crown, Shield } from "lucide-react";
import { Cosmetic } from "@/services/dataService";

export const avatars: Cosmetic[] = [
  {
    id: "a1",
    name: "Pixel Hero",
    description: "A retro pixel art avatar",
    price: 400,
    type: "avatar" as const,
    preview: (
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <User className="text-white" size={24} />
      </div>
    ),
    rarity: "common" as const
  },
  {
    id: "a2",
    name: "Dragon Master",
    description: "Show your dominance with this fiery avatar",
    price: 700,
    type: "avatar" as const,
    preview: (
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
        <Crown className="text-white" size={24} />
      </div>
    ),
    rarity: "rare" as const
  },
  {
    id: "a3",
    name: "Cosmic Guardian",
    description: "An otherworldly avatar design",
    price: 900,
    type: "avatar" as const,
    preview: (
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <Shield className="text-white" size={24} />
      </div>
    ),
    rarity: "epic" as const
  },
  {
    id: "a4",
    name: "Diamond Legend",
    description: "The most prestigious avatar available",
    price: 1500,
    type: "avatar" as const,
    preview: (
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 via-red-600 to-indigo-900 flex items-center justify-center border-4 border-gold-300 shadow-lg">
        <Crown className="text-white" size={24} />
      </div>
    ),
    rarity: "legendary" as const
  }
];
