
export function sortByRarity(a: string, b: string): number {
  const rarityOrder = {
    "common": 0,
    "rare": 1,
    "epic": 2,
    "legendary": 3
  };
  
  return rarityOrder[a as keyof typeof rarityOrder] - rarityOrder[b as keyof typeof rarityOrder];
}

export const getBadgeClassById = (badgeId: string): string => {
  switch (badgeId) {
    case "t1": return "bg-gray-500/20 text-gray-300 border-gray-500/50";
    case "t2": return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    case "t3": return "bg-purple-500/20 text-purple-400 border-purple-500/50";
    case "t4": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    case "t5": return "bg-green-500/20 text-green-400 border-green-500/50";
    case "t6": return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    case "t7": return "bg-red-500/20 text-red-400 border-red-500/50";
    case "t8": return "bg-indigo-500/20 text-indigo-400 border-indigo-500/50";
    default: return "border-primary/50";
  }
};

export const getBadgeContentById = (badgeId: string): string => {
  switch (badgeId) {
    case "t1": return "Rookie";
    case "t2": return "Veteran";
    case "t3": return "Pro Gamer";
    case "t4": return "Legend";
    case "t5": return "Speedrunner";
    case "t6": return "Genius";
    case "t7": return "God Gamer";
    case "t8": return "Touch Grass";
    default: return "Badge";
  }
};

export const getBannerClassById = (bannerId: string): string => {
  switch (bannerId) {
    case "b1": return "ring-orange-500 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500";
    case "b2": return "ring-cyan-400 bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500";
    case "b3": return "ring-green-400 bg-gradient-to-br from-green-300 to-emerald-600";
    case "b4": return "ring-purple-500 bg-gradient-to-br from-purple-400 via-pink-400 to-red-500";
    case "b5": return "ring-white bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient-x";
    case "b6": return "ring-yellow-400 bg-gradient-to-br from-yellow-200 to-yellow-500";
    default: return "ring-primary/30 bg-gradient-to-r from-purple-600/40 to-blue-600/40";
  }
};
