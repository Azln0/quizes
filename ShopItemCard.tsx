
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Cosmetic } from "@/services/dataService";

interface ShopItemCardProps {
  item: Cosmetic;
  onPurchase: (item: Cosmetic) => void;
  canAfford: boolean;
}

const getRarityClass = (rarity: string) => {
  switch (rarity) {
    case "common": return "border-gray-500 bg-gray-500/5";
    case "rare": return "border-blue-500 bg-blue-500/5";
    case "epic": return "border-purple-500 bg-purple-500/5";
    case "legendary": return "border-yellow-500 bg-yellow-500/5";
    default: return "border-gray-500 bg-gray-500/5";
  }
};

const getRarityBadge = (rarity: string) => {
  switch (rarity) {
    case "common": return <Badge variant="outline" className="border-gray-500">Common</Badge>;
    case "rare": return <Badge variant="outline" className="border-blue-500">Rare</Badge>;
    case "epic": return <Badge variant="outline" className="border-purple-500">Epic</Badge>;
    case "legendary": return <Badge variant="outline" className="border-yellow-500">Legendary</Badge>;
    default: return <Badge variant="outline">Unknown</Badge>;
  }
};

const ShopItemCard: React.FC<ShopItemCardProps> = ({ item, onPurchase, canAfford }) => {
  return (
    <Card 
      key={item.id} 
      className={`gaming-card hover:border-primary/40 transition-all duration-300 ${getRarityClass(item.rarity)} border`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{item.name}</CardTitle>
          {getRarityBadge(item.rarity)}
        </div>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-16">
        {item.preview}
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4">
        <div className="flex items-center">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span>{item.price}</span>
        </div>
        <Button 
          variant={canAfford ? "secondary" : "outline"}
          className="ml-auto"
          onClick={() => onPurchase(item)}
          disabled={!canAfford}
        >
          Purchase
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ShopItemCard, getRarityClass, getRarityBadge };
