
import { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLeaderboard, getCategories, User } from "@/services/dataService";
import { Trophy, Users, Gamepad2, Award, Flame, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const LeaderboardPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Call getLeaderboard without the currentCategory parameter
    setUsers(getLeaderboard());
    setCategories(getCategories());
  }, [currentCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setCurrentCategory(undefined);
    } else {
      setCurrentCategory(category);
    }
  };

  const handleUserClick = (userId: string) => {
    // Navigate to the profile page with the user ID
    navigate(`/profile/${userId}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'League of Legends':
        return <span className="text-blue-400 mr-2">LoL</span>;
      case 'Valorant':
        return <span className="text-red-400 mr-2">VAL</span>;
      case 'CS:GO':
        return <span className="text-yellow-400 mr-2">CS</span>;
      case 'Minecraft':
        return <span className="text-green-400 mr-2">MC</span>;
      case 'General Gaming':
        return <span className="text-purple-400 mr-2">GG</span>;
      case 'Elden Ring':
        return <span className="text-orange-400 mr-2">ER</span>;
      case 'RDR2':
        return <span className="text-amber-700 mr-2">RDR2</span>;
      case 'GTA V':
        return <span className="text-emerald-500 mr-2">GTA</span>;
      default:
        return <Gamepad2 className="mr-2 text-primary" size={16} />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'League of Legends':
        return 'LoL';
      case 'Red Dead Redemption 2':
        return 'RDR2';
      case 'General Gaming':
        return 'Gen Gaming';
      default:
        return category;
    }
  };

  const getRankStyle = (index: number) => {
    if (index === 0) return "text-yellow-400";
    if (index === 1) return "text-gray-300";
    if (index === 2) return "text-amber-600";
    return "text-white";
  };

  const getTrophySize = (index: number) => {
    if (index === 0) return 24;
    if (index === 1) return 20;
    if (index === 2) return 18;
    return 0;
  };
  
  const getPlayerNameClass = (index: number) => {
    if (index === 0) return "font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-pulse-glow";
    if (index === 1) return "font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-pulse";
    if (index === 2) return "font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400";
    return "font-bold";
  };

  const getPlayerIcon = (index: number) => {
    if (index === 0) return <Crown className={`mr-2 ${getRankStyle(index)}`} size={getTrophySize(index)} />;
    if (index === 1) return <Award className={`mr-2 ${getRankStyle(index)}`} size={getTrophySize(index)} />;
    if (index === 2) return <Flame className={`mr-2 ${getRankStyle(index)}`} size={getTrophySize(index)} />;
    return null;
  };

  return (
    <div className="container py-8 pt-24">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <Users className="mr-2" size={28} />
          Epic Quest Masters Leaderboard
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          See who's topping the charts in our gaming quiz challenges.
          Complete more quizzes and challenges to climb the ranks!
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 w-full max-w-4xl">
            <TabsTrigger 
              value="all" 
              onClick={() => handleCategoryChange('all')}
              className="flex items-center justify-center"
            >
              <Trophy size={16} className="mr-1 md:mr-2" />
              <span className="text-xs md:text-sm">Overall</span>
            </TabsTrigger>
            
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category} 
                onClick={() => handleCategoryChange(category)}
                className="flex items-center justify-center"
              >
                {getCategoryIcon(category)}
                <span className="text-xs md:text-sm truncate max-w-[60px]">{getCategoryName(category)}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle>Top Players Overall</CardTitle>
              <CardDescription>Rankings based on total score across all game categories</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable 
                users={users} 
                getRankStyle={getRankStyle} 
                getTrophySize={getTrophySize} 
                showCategory={true}
                getPlayerNameClass={getPlayerNameClass}
                getPlayerIcon={getPlayerIcon}
                onUserClick={handleUserClick}
                getCategoryName={getCategoryName}
                getCategoryIcon={getCategoryIcon}
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <Card className="gaming-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {getCategoryIcon(category)}
                  Top {getCategoryName(category)} Players
                </CardTitle>
                <CardDescription>Rankings based on {category} quiz and challenge scores</CardDescription>
              </CardHeader>
              <CardContent>
                <LeaderboardTable 
                  users={users} 
                  getRankStyle={getRankStyle} 
                  getTrophySize={getTrophySize} 
                  showCategory={false}
                  category={category}
                  getPlayerNameClass={getPlayerNameClass}
                  getPlayerIcon={getPlayerIcon}
                  onUserClick={handleUserClick}
                  getCategoryName={getCategoryName}
                  getCategoryIcon={getCategoryIcon}
                />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const LeaderboardTable = ({ 
  users, 
  getRankStyle, 
  getTrophySize, 
  showCategory, 
  category,
  getPlayerNameClass,
  getPlayerIcon,
  onUserClick,
  getCategoryName,
  getCategoryIcon
}: LeaderboardTableProps) => {
  return (
    <Table>
      <TableCaption>Current rankings based on total score</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Player</TableHead>
          {showCategory && <TableHead className="hidden md:table-cell">Category</TableHead>}
          <TableHead className="text-right">Score</TableHead>
          <TableHead className="text-right hidden md:table-cell">Quizzes</TableHead>
          <TableHead className="text-right hidden md:table-cell">Challenges</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <span className={getRankStyle(index)}>#{index + 1}</span>
                {getPlayerIcon(index)}
              </div>
            </TableCell>
            <TableCell>
              <div 
                className="flex items-center cursor-pointer hover:underline"
                onClick={() => onUserClick(user.id)}
              >
                <span className={getPlayerNameClass(index)}>
                  {user.name}
                </span>
                {user.equippedCosmetics?.badge && (
                  <Badge variant="outline" className={
                    user.equippedCosmetics.badge === 't1' ? 'ml-2 bg-gray-500/20 text-gray-300 border-gray-500/50' :
                    user.equippedCosmetics.badge === 't2' ? 'ml-2 bg-blue-500/20 text-blue-400 border-blue-500/50' :
                    user.equippedCosmetics.badge === 't3' ? 'ml-2 bg-purple-500/20 text-purple-400 border-purple-500/50' :
                    user.equippedCosmetics.badge === 't4' ? 'ml-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
                    user.equippedCosmetics.badge === 't5' ? 'ml-2 bg-green-500/20 text-green-400 border-green-500/50' :
                    user.equippedCosmetics.badge === 't6' ? 'ml-2 bg-amber-500/20 text-amber-400 border-amber-500/50' :
                    user.equippedCosmetics.badge === 't7' ? 'ml-2 bg-red-500/20 text-red-400 border-red-500/50' :
                    user.equippedCosmetics.badge === 't8' ? 'ml-2 bg-indigo-500/20 text-indigo-400 border-indigo-500/50' :
                    'ml-2 border-primary/50'
                  }>
                    {user.equippedCosmetics.badge === 't1' ? 'Rookie' :
                     user.equippedCosmetics.badge === 't2' ? 'Veteran' :
                     user.equippedCosmetics.badge === 't3' ? 'Pro Gamer' :
                     user.equippedCosmetics.badge === 't4' ? 'Legend' :
                     user.equippedCosmetics.badge === 't5' ? 'Speedrunner' :
                     user.equippedCosmetics.badge === 't6' ? 'Genius' :
                     user.equippedCosmetics.badge === 't7' ? 'God Gamer' :
                     user.equippedCosmetics.badge === 't8' ? 'Touch Grass' :
                     'Badge'}
                  </Badge>
                )}
              </div>
            </TableCell>
            {showCategory && (
              <TableCell className="hidden md:table-cell">
                <span className="inline-flex items-center text-xs">
                  {/* Show default "All" when user doesn't have a preferred category */}
                  {user.categoryScores && Object.keys(user.categoryScores).length > 0 ? (
                    <>
                      {getCategoryIcon(Object.keys(user.categoryScores)[0])}
                      <span className="truncate max-w-[80px] inline-block">
                        {getCategoryName(Object.keys(user.categoryScores)[0])}
                      </span>
                    </>
                  ) : (
                    "All"
                  )}
                </span>
              </TableCell>
            )}
            <TableCell className="text-right font-bold">
              {category ? user.categoryScores?.[category as keyof typeof user.categoryScores] || 0 : user.score}
            </TableCell>
            <TableCell className="text-right hidden md:table-cell">
              {typeof user.completedQuizzes === 'number' 
                ? user.completedQuizzes 
                : user.completedQuizzes?.length || 0}
            </TableCell>
            <TableCell className="text-right hidden md:table-cell">
              {typeof user.completedChallenges === 'number' 
                ? user.completedChallenges 
                : user.completedChallenges?.length || 0}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

interface LeaderboardTableProps {
  users: User[];
  getRankStyle: (index: number) => string;
  getTrophySize: (index: number) => number;
  showCategory: boolean;
  category?: string;
  getPlayerNameClass: (index: number) => string;
  getPlayerIcon: (index: number) => React.ReactNode;
  onUserClick: (userId: string) => void;
  getCategoryName: (category: string) => string;
  getCategoryIcon: (category: string) => React.ReactNode;
}

export default LeaderboardPage;
