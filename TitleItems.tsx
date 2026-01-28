
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Cosmetic } from "@/services/dataService";

export const titles: Cosmetic[] = [
  {
    id: "t1",
    name: "Rookie",
    description: "Everyone starts somewhere - might as well own it with style",
    price: 100,
    type: "badge" as const,
    preview: <Badge className="bg-gray-500/20 text-gray-300 border border-gray-500/50">Rookie</Badge>,
    rarity: "common" as const
  },
  {
    id: "t2",
    name: "Veteran",
    description: "For those who know when to strategically exit a match",
    price: 300,
    type: "badge" as const,
    preview: <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/50">Veteran</Badge>,
    rarity: "rare" as const
  },
  {
    id: "t3",
    name: "Pro Gamer",
    description: "The universal gaming advice, now as your title",
    price: 400,
    type: "badge" as const,
    preview: <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/50">Pro Gamer</Badge>,
    rarity: "rare" as const
  },
  {
    id: "t4",
    name: "Legend",
    description: "Your aim is your claim to fame",
    price: 700,
    type: "badge" as const,
    preview: <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/50">Legend</Badge>,
    rarity: "epic" as const
  },
  {
    id: "t5",
    name: "Speedrunner",
    description: "You don't just play games, you live their stories",
    price: 700,
    type: "badge" as const,
    preview: <Badge className="bg-green-500/20 text-green-400 border border-green-500/50">Speedrunner</Badge>,
    rarity: "epic" as const
  },
  {
    id: "t6",
    name: "Genius",
    description: "Maximum effort, maximum results",
    price: 800,
    type: "badge" as const,
    preview: <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/50">Genius</Badge>,
    rarity: "epic" as const
  },
  {
    id: "t7",
    name: "God Gamer",
    description: "They say nobody's perfect, but your gameplay comes close",
    price: 1000,
    type: "badge" as const,
    preview: <Badge className="bg-red-500/20 text-red-400 border border-red-500/50">God Gamer</Badge>,
    rarity: "legendary" as const
  },
  {
    id: "t8",
    name: "Touch Grass",
    description: "The ironic title for those who never log off",
    price: 1200,
    type: "badge" as const,
    preview: <Badge className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/50">Touch Grass</Badge>,
    rarity: "legendary" as const
  }
];
