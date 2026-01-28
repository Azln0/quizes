
import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Trophy, 
  Medal, 
  Star, 
  Award, 
  Sparkles, 
  Crown, 
  Package,
  ShoppingBag,
  Palette,
  CheckCircle2,
  Circle,
  Shield,
  Flame,
  Swords,
  Gamepad2,
  BrainCircuit,
  Zap,
  Eye
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  getCurrentUser, 
  getUserCosmetics, 
  getAchievements,
  equipCosmetic,
  unequipCosmetic,
  Cosmetic,
  Achievement
} from "@/services/dataService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage = () => {
  const [user] = useState(getCurrentUser());
  const [cosmetics, setCosmetics] = useState<Cosmetic[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [selectedTab, setSelectedTab] = useState("overview");
  const [previewingItem, setPreviewingItem] = useState<Cosmetic | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCosmetics(getUserCosmetics());
    setAchievements(getAchievements());
  }, []);

  const playInteractionSound = () => {
    const audio = new Audio();
    audio.src = "/sounds/click.mp3";
    audio.volume = 0.2;
    audio.play().catch(e => console.log("Audio play prevented by browser policy"));
  };

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const achievementProgress = Math.round((unlockedAchievements.length / achievements.length) * 100);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Trophy": return <Trophy className="text-yellow-400" />;
      case "Medal": return <Medal className="text-blue-400" />;
      case "Star": return <Star className="text-purple-400" />;
      case "Award": return <Award className="text-green-400" />;
      case "Sparkles": return <Sparkles className="text-indigo-400" />;
      case "Crown": return <Crown className="text-amber-400" />;
      case "Package": return <Package className="text-cyan-400" />;
      case "ShoppingBag": return <ShoppingBag className="text-pink-400" />;
      case "Flame": return <Flame className="text-orange-400" />;
      case "Swords": return <Swords className="text-red-400" />;
      case "Gamepad2": return <Gamepad2 className="text-emerald-400" />;
      default: return <Award className="text-blue-400" />;
    }
  };

  const handleEquip = (cosmetic: Cosmetic) => {
    playInteractionSound();
    equipCosmetic(cosmetic.id);
    setCosmetics(getUserCosmetics());
    toast.success(`Equipped ${cosmetic.name}!`, {
      description: "Your profile has been updated",
      position: "bottom-center"
    });
    setPreviewingItem(null);
  };

  const handleUnequip = (cosmetic: Cosmetic) => {
    playInteractionSound();
    unequipCosmetic(cosmetic.type);
    setCosmetics(getUserCosmetics());
    toast.success(`Unequipped ${cosmetic.name}`, {
      position: "bottom-center"
    });
  };
  
  const handlePreview = (cosmetic: Cosmetic) => {
    playInteractionSound();
    setPreviewingItem(cosmetic);
  };

  const cancelPreview = () => {
    playInteractionSound();
    setPreviewingItem(null);
  };

  const getNameEffect = () => {
    if (previewingItem && previewingItem.type === "badge") {
      return renderBadgePreview(previewingItem);
    }

    if (!user.equippedCosmetics?.nameEffect) return <span className="font-bold">{user.name}</span>;
    
    const nameEffectId = user.equippedCosmetics.nameEffect;
    const effect = cosmetics.find(c => c.id === nameEffectId);
    if (!effect) return <span className="font-bold">{user.name}</span>;
    
    switch (effect.id) {
      case "ne1": 
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse font-bold">{user.name}</span>;
      case "ne2": 
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 animate-pulse-glow font-bold">{user.name}</span>;
      case "ne3": 
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 animate-pulse-glow font-bold">{user.name}</span>;
      case "ne4": 
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-pulse-glow font-bold">{user.name}</span>;
      case "ne5": 
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 animate-pulse font-bold">{user.name}<span className="text-yellow-400">⚡</span></span>;
      case "ne6": 
        return <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient-x font-bold">{user.name}</span>;
      default:
        return <span className="font-bold">{user.name}</span>;
    }
  };

  const getBadge = () => {
    if (previewingItem && previewingItem.type === "badge") {
      return null;
    }

    if (!user.equippedCosmetics?.badge) return null;
    
    const badgeId = user.equippedCosmetics.badge;
    const badge = cosmetics.find(c => c.id === badgeId);
    if (!badge) return null;
    
    switch (badge.id) {
      case "t1": 
        return <Badge className="bg-gray-500/20 text-gray-300 ml-2">Rookie</Badge>;
      case "t2": 
        return <Badge className="bg-blue-500/20 text-blue-400 ml-2">Veteran</Badge>;
      case "t3": 
        return <Badge className="bg-purple-500/20 text-purple-400 ml-2">Pro Gamer</Badge>;
      case "t4": 
        return <Badge className="bg-yellow-500/20 text-yellow-400 ml-2">Legend</Badge>;
      case "t5": 
        return <Badge className="bg-green-500/20 text-green-400 ml-2">Speedrunner</Badge>;
      case "t6": 
        return <Badge className="bg-amber-500/20 text-amber-400 ml-2">Genius</Badge>;
      default:
        return null;
    }
  };

  const renderBadgePreview = (badge: Cosmetic) => {
    const badgeContent = (() => {
      switch (badge.id) {
        case "t1": return "Rookie";
        case "t2": return "Veteran";
        case "t3": return "Pro Gamer";
        case "t4": return "Legend";
        case "t5": return "Speedrunner";
        case "t6": return "Genius";
        default: return "Unknown";
      }
    })();
    
    const badgeClass = (() => {
      switch (badge.id) {
        case "t1": return "bg-gray-500/20 text-gray-300";
        case "t2": return "bg-blue-500/20 text-blue-400";
        case "t3": return "bg-purple-500/20 text-purple-400";
        case "t4": return "bg-yellow-500/20 text-yellow-400";
        case "t5": return "bg-green-500/20 text-green-400";
        case "t6": return "bg-amber-500/20 text-amber-400";
        default: return "bg-gray-500/20 text-gray-300";
      }
    })();
    
    return (
      <div className="flex items-center">
        <span className="font-bold">{user.name}</span>
        <Badge className={`ml-2 ${badgeClass}`}>{badgeContent}</Badge>
      </div>
    );
  };

  const getAvatar = () => {
    if (previewingItem && previewingItem.type === "avatar") {
      return renderAvatarPreview(previewingItem);
    }

    if (!user.equippedCosmetics?.avatar) {
      return (
        <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
          <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-600">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      );
    }
    
    const avatarId = user.equippedCosmetics.avatar;
    const avatar = cosmetics.find(c => c.id === avatarId);
    if (!avatar) {
      return (
        <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
          <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-600">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      );
    }
    
    switch (avatar.id) {
      case "a1": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      case "a2": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      case "a3": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      case "a4": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-gold-300/50 shadow-xl shadow-gold-300/30 bg-gradient-to-r from-orange-500 via-red-600 to-indigo-900 animate-pulse">
            <AvatarFallback className="bg-gradient-to-r from-orange-500 via-red-600 to-indigo-900 border-4 border-gold-300 shadow-lg animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      default:
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
    }
  };

  const renderAvatarPreview = (avatar: Cosmetic) => {
    switch (avatar.id) {
      case "a1": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      case "a2": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      case "a3": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      case "a4": 
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-gold-300/50 shadow-xl shadow-gold-300/30 bg-gradient-to-r from-orange-500 via-red-600 to-indigo-900 animate-pulse">
            <AvatarFallback className="bg-gradient-to-r from-orange-500 via-red-600 to-indigo-900 border-4 border-gold-300 shadow-lg animate-pulse">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
      default:
        return (
          <Avatar className="h-24 w-24 ring-4 ring-offset-4 ring-offset-background ring-primary/30 shadow-xl shadow-primary/20">
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        );
    }
  };

  const getBanner = () => {
    if (previewingItem && previewingItem.type === "banner") {
      return getBannerClass(previewingItem.id);
    }

    if (!user.equippedCosmetics?.banner) return "";
    
    const bannerId = user.equippedCosmetics.banner;
    return getBannerClass(bannerId);
  };

  const getBannerClass = (bannerId: string) => {
    switch (bannerId) {
      case "b1": 
        return "ring-orange-500 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500";
      case "b2": 
        return "ring-cyan-400 bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500";
      case "b3": 
        return "ring-green-400 bg-gradient-to-br from-green-300 to-emerald-600 animate-pulse";
      case "b4": 
        return "ring-purple-500 bg-gradient-to-br from-purple-400 via-pink-400 to-red-500";
      case "b5": 
        return "ring-white bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient-x";
      case "b6": 
        return "ring-yellow-400 bg-gradient-to-br from-yellow-200 to-yellow-500";
      default:
        return "";
    }
  };

  const completedQuizzes = Array.isArray(user.completedQuizzes) 
    ? user.completedQuizzes 
    : typeof user.completedQuizzes === 'number'
      ? Array(user.completedQuizzes).fill('Quiz')
      : [];

  const completedChallenges = Array.isArray(user.completedChallenges) 
    ? user.completedChallenges 
    : typeof user.completedChallenges === 'number'
      ? Array(user.completedChallenges).fill('Challenge') 
      : [];

  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-10">
        <div className="particle-1"></div>
        <div className="particle-2"></div>
        <div className="particle-3"></div>
      </div>
    </div>
  );

  const getSkillColor = (category: string) => {
    switch (category) {
      case "Gaming": return "bg-purple-500";
      case "Technology": return "bg-blue-500";
      case "Science": return "bg-green-500";
      case "History": return "bg-yellow-500";
      case "Art": return "bg-pink-500";
      case "Sports": return "bg-red-500";
      default: return "bg-primary";
    }
  };
  
  // Group cosmetics by type
  const cosmeticsByType = cosmetics.reduce((acc: Record<string, Cosmetic[]>, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen pt-16 pb-8 relative bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      <ParticleBackground />
      
      <div className="container px-4 relative z-10">
        <div className="relative mb-8">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center">
              <Crown className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="text-sm font-bold">
                LEVEL {Math.floor((user.score || 0) / 1000) + 1}
              </span>
            </div>
            <span className="text-xs text-white/70 flex items-center">
              <Star className="h-3 w-3 text-yellow-400 mr-1" />
              {(user.score || 0) % 1000} / 1000 XP
            </span>
          </div>
          <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden mb-2 backdrop-blur-sm border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-pulse"
              style={{ width: `${Math.min((user.score || 0) % 1000 / 10, 100)}%` }}
            />
          </div>
        </div>

        {previewingItem && (
          <div className="fixed top-20 inset-x-0 z-50 backdrop-blur-sm bg-black/40 border-b border-white/10 shadow-lg shadow-primary/20 py-2">
            <div className="container">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Shield className="text-primary mr-2" />
                  <span>Previewing: <span className="font-bold">{previewingItem.name}</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={cancelPreview}
                    className="hover:bg-white/10"
                  >
                    Cancel
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => handleEquip(previewingItem)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    <CheckCircle2 className="mr-1 h-4 w-4" />
                    Equip
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-white/10 neo-blur overflow-hidden gaming-card relative group">
              <div className="absolute -inset-x-40 -inset-y-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              <div className="absolute inset-0 w-full h-full opacity-10 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              <CardHeader className="pb-0 relative z-10">
                <div className="flex flex-col items-center space-y-4 pt-4">
                  <div className={`p-1 rounded-full ring-4 ${getBanner() || "ring-primary/30 bg-gradient-to-r from-purple-600/40 to-blue-600/40"} shadow-glow`}>
                    {getAvatar()}
                  </div>
                  <div className="text-center space-y-1">
                    <CardTitle className="text-3xl font-gaming bg-clip-text">
                      {getNameEffect()}
                      {getBadge()}
                    </CardTitle>
                    <div className="flex justify-center items-center gap-3 text-sm">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Trophy className="h-3 w-3" /> 
                        Level {Math.floor((user.score || 0) / 1000) + 1}
                      </Badge>
                      <CardDescription className="flex items-center">
                        <Flame className="h-3 w-3 text-orange-400 mr-1" />
                        {user.score || 0} Total Points
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-6">
                <div className="grid grid-cols-4 gap-2 pb-4">
                  <div className="flex flex-col items-center neo-blur rounded-lg p-3 transition-transform hover:-translate-y-1 duration-300">
                    <Star className="h-5 w-5 text-yellow-400 mb-1" />
                    <span className="font-semibold">{user.coins || 0}</span>
                    <span className="text-xs text-muted-foreground">Coins</span>
                  </div>
                  <div className="flex flex-col items-center neo-blur rounded-lg p-3 transition-transform hover:-translate-y-1 duration-300">
                    <Trophy className="h-5 w-5 text-blue-400 mb-1" />
                    <span className="font-semibold">{completedQuizzes.length}</span>
                    <span className="text-xs text-muted-foreground">Quizzes</span>
                  </div>
                  <div className="flex flex-col items-center neo-blur rounded-lg p-3 transition-transform hover:-translate-y-1 duration-300">
                    <Medal className="h-5 w-5 text-purple-400 mb-1" />
                    <span className="font-semibold">{completedChallenges.length}</span>
                    <span className="text-xs text-muted-foreground">Challenges</span>
                  </div>
                  <div className="flex flex-col items-center neo-blur rounded-lg p-3 transition-transform hover:-translate-y-1 duration-300">
                    <Award className="h-5 w-5 text-green-400 mb-1" />
                    <span className="font-semibold">{unlockedAchievements.length}</span>
                    <span className="text-xs text-muted-foreground">Achievements</span>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm flex items-center">
                        <Trophy className="h-4 w-4 text-yellow-400 mr-1" />
                        Achievement Progress
                      </span>
                      <span className="text-xs">{unlockedAchievements.length}/{achievements.length}</span>
                    </div>
                    <Progress value={achievementProgress} className="h-2.5 bg-white/10" />
                  </div>
                  
                  {user.categoryScores && Object.entries(user.categoryScores).length > 0 && (
                    <div className="pt-4">
                      <div className="flex items-center mb-2">
                        <BrainCircuit className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm font-semibold">Skill Breakdown</span>
                      </div>
                      <div className="space-y-3">
                        {Object.entries(user.categoryScores).map(([category, score]) => (
                          <div key={category} className="space-y-1">
                            <div className="flex justify-between items-center text-xs">
                              <span>{category}</span>
                              <span>{score} pts</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${getSkillColor(category)}`}
                                style={{ width: `${Math.min(score / 10, 100)}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-white/10 pt-4 flex justify-between relative z-10">
                <Button 
                  variant="default" 
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/40"
                  onClick={() => navigate("/quizzes")}
                >
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Play Quizzes
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  onClick={() => navigate("/shop")}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="border border-white/10 neo-blur gaming-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pb-2">
                {unlockedAchievements.length === 0 ? (
                  <div className="text-center py-6">
                    <div className="bg-white/5 p-3 rounded-full inline-block mb-2">
                      <Trophy className="h-8 w-8 text-muted-foreground opacity-70" />
                    </div>
                    <p className="text-muted-foreground">No achievements unlocked yet</p>
                    <p className="text-xs text-muted-foreground mt-1">Complete quizzes to earn achievements</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {unlockedAchievements.slice(0, 3).map((achievement) => (
                      <div 
                        key={achievement.id} 
                        className="flex items-center gap-3 p-3 rounded-lg neo-blur border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <div className="p-2 rounded-full bg-white/10">
                          {getIconComponent(achievement.icon)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-xs hover:bg-white/5"
                  onClick={() => setSelectedTab("achievements")}
                >
                  View All Achievements
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="border border-white/10 neo-blur gaming-card">
              <CardHeader className="pb-2">
                <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="grid grid-cols-3 mb-4 bg-white/5 border border-white/10">
                    <TabsTrigger 
                      value="overview" 
                      className="data-[state=active]:bg-gradient-to-r from-indigo-600 to-purple-600 data-[state=active]:text-primary-foreground"
                      onClick={() => playInteractionSound()}
                    >
                      <User size={16} className="mr-2" />
                      <span>Overview</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="cosmetics"
                      className="data-[state=active]:bg-gradient-to-r from-indigo-600 to-purple-600 data-[state=active]:text-primary-foreground"
                      onClick={() => playInteractionSound()}
                    >
                      <Palette size={16} className="mr-2" />
                      <span>Inventory</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="achievements"
                      className="data-[state=active]:bg-gradient-to-r from-indigo-600 to-purple-600 data-[state=active]:text-primary-foreground"
                      onClick={() => playInteractionSound()}
                    >
                      <Trophy size={16} className="mr-2" />
                      <span>Achievements</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-0 p-0">
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-6 p-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Zap className="text-yellow-400 mr-2" size={18} />
                            Recent Activity
                          </h3>
                          {completedQuizzes.length === 0 && completedChallenges.length === 0 ? (
                            <div className="text-center py-8 neo-blur rounded-lg border border-white/10">
                              <Gamepad2 className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                              <p className="text-muted-foreground">No recent activity</p>
                              <p className="text-xs text-muted-foreground mt-1">Complete quizzes to see your activity here</p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {/* Recent activity items would go here */}
                              <div className="neo-blur rounded-lg p-4 border border-white/10 hover:bg-white/5 transition-colors">
                                Recent activities will be displayed here.
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="cosmetics" className="mt-0 p-0">
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-6 p-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Palette className="text-primary mr-2" size={18} />
                            Your Cosmetics
                          </h3>
                          
                          {cosmetics.length === 0 ? (
                            <div className="text-center py-8 neo-blur rounded-lg border border-white/10">
                              <Package className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                              <p className="text-muted-foreground">Your inventory is empty</p>
                              <p className="text-xs text-muted-foreground mt-1">Visit the shop to purchase cosmetics</p>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="mt-4 border-white/10"
                                onClick={() => navigate("/shop")}
                              >
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                Go to Shop
                              </Button>
                            </div>
                          ) : (
                            <div className="space-y-6">
                              {/* Banners */}
                              {cosmeticsByType.banner && cosmeticsByType.banner.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-medium mb-3 flex items-center">
                                    <Shield className="h-4 w-4 mr-2 text-blue-400" />
                                    Banners
                                  </h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {cosmeticsByType.banner.map((item) => {
                                      const isEquipped = user.equippedCosmetics?.banner === item.id;
                                      return (
                                        <div 
                                          key={item.id}
                                          className={`p-3 neo-blur rounded-lg border ${isEquipped ? 'border-primary/50' : 'border-white/10'} hover:bg-white/5 transition-all`}
                                        >
                                          <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-full ${getBannerClass(item.id)}`}></div>
                                            <div className="flex-1">
                                              <p className="font-medium text-sm">{item.name}</p>
                                              <p className="text-xs text-muted-foreground">{item.description}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                              {isEquipped ? (
                                                <Button 
                                                  size="sm" 
                                                  variant="destructive"
                                                  onClick={() => handleUnequip(item)}
                                                >
                                                  Unequip
                                                </Button>
                                              ) : (
                                                <>
                                                  <Button 
                                                    size="sm" 
                                                    variant="secondary"
                                                    onClick={() => handlePreview(item)}
                                                  >
                                                    <Eye className="h-3 w-3 mr-1" />
                                                    Preview
                                                  </Button>
                                                  <Button 
                                                    size="sm" 
                                                    variant="default"
                                                    onClick={() => handleEquip(item)}
                                                  >
                                                    Equip
                                                  </Button>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                              
                              {/* Avatars */}
                              {cosmeticsByType.avatar && cosmeticsByType.avatar.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-medium mb-3 flex items-center">
                                    <User className="h-4 w-4 mr-2 text-green-400" />
                                    Avatars
                                  </h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {cosmeticsByType.avatar.map((item) => {
                                      const isEquipped = user.equippedCosmetics?.avatar === item.id;
                                      return (
                                        <div 
                                          key={item.id}
                                          className={`p-3 neo-blur rounded-lg border ${isEquipped ? 'border-primary/50' : 'border-white/10'} hover:bg-white/5 transition-all`}
                                        >
                                          <div className="flex items-center gap-3">
                                            {/* Render avatar preview based on id */}
                                            <Avatar className="h-10 w-10">
                                              <AvatarFallback className={
                                                item.id === 'a1' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                                                item.id === 'a2' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                                                item.id === 'a3' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' :
                                                item.id === 'a4' ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 border border-yellow-200' :
                                                'bg-primary'
                                              }>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                              <p className="font-medium text-sm">{item.name}</p>
                                              <p className="text-xs text-muted-foreground">{item.description}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                              {isEquipped ? (
                                                <Button 
                                                  size="sm" 
                                                  variant="destructive"
                                                  onClick={() => handleUnequip(item)}
                                                >
                                                  Unequip
                                                </Button>
                                              ) : (
                                                <>
                                                  <Button 
                                                    size="sm" 
                                                    variant="secondary"
                                                    onClick={() => handlePreview(item)}
                                                  >
                                                    <Eye className="h-3 w-3 mr-1" />
                                                    Preview
                                                  </Button>
                                                  <Button 
                                                    size="sm" 
                                                    variant="default"
                                                    onClick={() => handleEquip(item)}
                                                  >
                                                    Equip
                                                  </Button>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                              
                              {/* Badges */}
                              {cosmeticsByType.badge && cosmeticsByType.badge.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-medium mb-3 flex items-center">
                                    <Award className="h-4 w-4 mr-2 text-yellow-400" />
                                    Badges
                                  </h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {cosmeticsByType.badge.map((item) => {
                                      const isEquipped = user.equippedCosmetics?.badge === item.id;
                                      return (
                                        <div 
                                          key={item.id}
                                          className={`p-3 neo-blur rounded-lg border ${isEquipped ? 'border-primary/50' : 'border-white/10'} hover:bg-white/5 transition-all`}
                                        >
                                          <div className="flex items-center gap-3">
                                            <Badge className={
                                              item.id === 't1' ? 'bg-gray-500/20 text-gray-300' :
                                              item.id === 't2' ? 'bg-blue-500/20 text-blue-400' :
                                              item.id === 't3' ? 'bg-purple-500/20 text-purple-400' :
                                              item.id === 't4' ? 'bg-yellow-500/20 text-yellow-400' :
                                              item.id === 't5' ? 'bg-green-500/20 text-green-400' :
                                              item.id === 't6' ? 'bg-amber-500/20 text-amber-400' :
                                              ''
                                            }>
                                              {item.id === 't1' ? 'Rookie' :
                                               item.id === 't2' ? 'Veteran' :
                                               item.id === 't3' ? 'Pro Gamer' :
                                               item.id === 't4' ? 'Legend' :
                                               item.id === 't5' ? 'Speedrunner' :
                                               item.id === 't6' ? 'Genius' : 'Badge'}
                                            </Badge>
                                            <div className="flex-1">
                                              <p className="font-medium text-sm">{item.name}</p>
                                              <p className="text-xs text-muted-foreground">{item.description}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                              {isEquipped ? (
                                                <Button 
                                                  size="sm" 
                                                  variant="destructive"
                                                  onClick={() => handleUnequip(item)}
                                                >
                                                  Unequip
                                                </Button>
                                              ) : (
                                                <>
                                                  <Button 
                                                    size="sm" 
                                                    variant="secondary"
                                                    onClick={() => handlePreview(item)}
                                                  >
                                                    <Eye className="h-3 w-3 mr-1" />
                                                    Preview
                                                  </Button>
                                                  <Button 
                                                    size="sm" 
                                                    variant="default"
                                                    onClick={() => handleEquip(item)}
                                                  >
                                                    Equip
                                                  </Button>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="achievements" className="mt-0 p-0">
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-6 p-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <Trophy className="text-yellow-400 mr-2" size={18} />
                          Achievements
                          <Badge variant="outline" className="ml-2 text-xs">
                            {unlockedAchievements.length}/{achievements.length}
                          </Badge>
                        </h3>
                        
                        <Progress value={achievementProgress} className="h-2.5 bg-white/10" />
                        
                        <div className="space-y-4 mt-6">
                          {achievements.map((achievement) => {
                            const isUnlocked = achievement.unlocked;
                            return (
                              <div 
                                key={achievement.id} 
                                className={`p-4 rounded-lg neo-blur border ${isUnlocked ? 'border-primary/30' : 'border-white/5'} hover:bg-white/5 transition-colors`}
                              >
                                <div className="flex items-center gap-4">
                                  <div className={`p-3 rounded-full ${isUnlocked ? 'bg-primary/20' : 'bg-white/5'}`}>
                                    {isUnlocked ? (
                                      getIconComponent(achievement.icon)
                                    ) : (
                                      <Lock className="text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <p className={`font-medium ${isUnlocked ? '' : 'text-muted-foreground'}`}>
                                      {achievement.title}
                                    </p>
                                    <p className={`text-sm ${isUnlocked ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                                      {achievement.description}
                                    </p>
                                  </div>
                                  {isUnlocked && (
                                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

function Lock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
