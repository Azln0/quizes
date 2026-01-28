
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Crown, User, Star } from "lucide-react";
import { toast } from "sonner";
import { saveUserCosmetics, getCurrentUser } from "@/services/dataService";
import { useNavigate } from "react-router-dom";
import { Cosmetic } from "@/services/dataService";

import { ShopItemCard } from "@/components/shop/ShopItemCard";
import { banners } from "@/components/shop/BannerItems";
import { titles } from "@/components/shop/TitleItems";
import { avatars } from "@/components/shop/AvatarItems";
import { sortByRarity } from "@/components/shop/shopUtils";
import ShopHeader from "@/components/shop/ShopHeader";

const ShopPage = () => {
  const [selectedTab, setSelectedTab] = useState("banners");
  const user = getCurrentUser();
  const [userCoins, setUserCoins] = useState(user.coins || 1000);
  const navigate = useNavigate();

  const shopItems = {
    banners: banners.sort((a, b) => sortByRarity(a.rarity, b.rarity)),
    titles: titles.sort((a, b) => sortByRarity(a.rarity, b.rarity)),
    avatars: avatars.sort((a, b) => sortByRarity(a.rarity, b.rarity))
  };

  const handlePurchase = (item: Cosmetic) => {
    if (userCoins >= item.price) {
      setUserCoins(prev => prev - item.price);
      
      saveUserCosmetics(item);
      
      toast.success(`You purchased ${item.name}!`, {
        description: "Item has been added to your inventory"
      });
      
      toast.info("Check your profile to equip your new item!", {
        action: {
          label: "Go to Profile",
          onClick: () => navigate("/profile")
        }
      });
    } else {
      toast.error("Not enough coins", {
        description: "Complete more quizzes to earn coins"
      });
    }
  };

  return (
    <div className="container py-8 pt-24">
      <ShopHeader userCoins={userCoins} />

      <Tabs defaultValue="banners" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
            <TabsTrigger 
              value="banners" 
              onClick={() => setSelectedTab("banners")}
              className="flex items-center justify-center"
            >
              <Shield size={16} className="mr-2" />
              <span>Banners</span>
            </TabsTrigger>
            <TabsTrigger 
              value="titles" 
              onClick={() => setSelectedTab("titles")}
              className="flex items-center justify-center"
            >
              <Crown size={16} className="mr-2" />
              <span>Titles</span>
            </TabsTrigger>
            <TabsTrigger 
              value="avatars" 
              onClick={() => setSelectedTab("avatars")}
              className="flex items-center justify-center"
            >
              <User size={16} className="mr-2" />
              <span>Avatars</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        {Object.entries(shopItems).map(([category, items]) => (
          <TabsContent key={category} value={category} className="mt-0">
            {items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                  <ShopItemCard 
                    key={item.id}
                    item={item}
                    onPurchase={handlePurchase}
                    canAfford={userCoins >= item.price}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Coming soon!</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopPage;
