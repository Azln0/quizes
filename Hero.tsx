
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Gamepad, BarChart3, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-purple-900/5 to-backgroun/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-xl animate-pulse-glow" />
          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">
            <Gamepad size={32} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-glow">
          Gaming Quiz Master
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl text-muted-foreground">
          Test your knowledge of popular games like <span className="text-primary font-semibold">League of Legends</span>, 
          <span className="text-primary font-semibold"> Valorant</span>, 
          <span className="text-primary font-semibold"> CS:GO</span>, and 
          <span className="text-primary font-semibold"> Minecraft</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/quizzes">
            <Button size="lg" className="group">
              Start Quizzes
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </Link>
          
          <Link to="/challenges">
            <Button variant="outline" size="lg">
              View Challenges
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
          <div className="gaming-card p-6 flex flex-col items-center">
            <div className="bg-primary/20 p-3 rounded-full mb-4">
              <Gamepad className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Game-Specific Quizzes</h3>
            <p className="text-sm text-muted-foreground">
              From champion abilities to weapon stats, test your expertise in specific games
            </p>
          </div>
          
          <div className="gaming-card p-6 flex flex-col items-center">
            <div className="bg-primary/20 p-3 rounded-full mb-4">
              <Trophy className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Complete Challenges</h3>
            <p className="text-sm text-muted-foreground">
              Prove your gaming knowledge mastery with special challenges for each game
            </p>
          </div>
          
          <div className="gaming-card p-6 flex flex-col items-center">
            <div className="bg-primary/20 p-3 rounded-full mb-4">
              <BarChart3 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Climb the Leaderboard</h3>
            <p className="text-sm text-muted-foreground">
              Earn points and compete with other gamers to reach the top
            </p>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Star className="mr-2 text-yellow-400" size={20} />
            Featured Games
          </h2>
          <div className="flex gap-6 flex-wrap justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2">🧙‍♂️</div>
              <span className="text-sm">League of Legends</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2">🔫</div>
              <span className="text-sm">Valorant</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2">💣</div>
              <span className="text-sm">CS:GO</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2">⛏️</div>
              <span className="text-sm">Minecraft</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-2">🎮</div>
              <span className="text-sm">General Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
