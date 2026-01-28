
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ShopHeaderProps {
  userCoins: number;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ userCoins }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center mb-12">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        <ShoppingBag className="mr-2" size={28} />
        Gaming Cosmetics
      </h1>
      <p className="text-muted-foreground text-center max-w-2xl">
        Customize your profile with unique cosmetics and effects!
        Complete quizzes and challenges to earn more coins.
      </p>
      <div className="mt-4 flex items-center bg-secondary/40 px-4 py-2 rounded-full">
        <Star className="text-yellow-400 mr-2" size={20} />
        <span className="font-bold">{userCoins} Coins</span>
      </div>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={() => navigate("/profile")}
      >
        <User className="mr-2" size={16} />
        View My Profile
      </Button>
    </div>
  );
};

export default ShopHeader;
