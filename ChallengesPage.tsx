
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { getChallenges, Challenge } from "@/services/dataService";

const ChallengesPage = () => {
  const [challenges] = useState<Challenge[]>(
    getChallenges().sort((a, b) => sortByDifficulty(a.difficulty, b.difficulty))
  );

  function sortByDifficulty(a: string, b: string): number {
    const difficultyOrder = {
      "easy": 0,
      "medium": 1,
      "hard": 2
    };
    
    return difficultyOrder[a as keyof typeof difficultyOrder] - difficultyOrder[b as keyof typeof difficultyOrder];
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'border-green-500 bg-green-500/5';
      case 'medium': return 'border-yellow-500 bg-yellow-500/5';
      case 'hard': return 'border-red-500 bg-red-500/5';
      default: return 'border-blue-500 bg-blue-500/5';
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return <Badge variant="outline" className="border-green-500">Easy</Badge>;
      case 'medium': return <Badge variant="outline" className="border-yellow-500">Medium</Badge>;
      case 'hard': return <Badge variant="outline" className="border-red-500">Hard</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const handleStartChallenge = (challenge: Challenge) => {
    toast.info(`Challenge started: ${challenge.title}`, {
      description: "Complete the challenge to earn rewards!"
    });
  };

  return (
    <div className="container py-8 pt-24">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <Trophy className="mr-2" size={28} />
          Gaming Challenges
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          Take on special challenges to earn unique rewards and recognition.
          Complete tasks across different games and test your skills!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <Card 
            key={challenge.id} 
            className={`gaming-card hover:border-primary/40 transition-all duration-300 border ${getDifficultyColor(challenge.difficulty)}`}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{challenge.title}</CardTitle>
                {getDifficultyBadge(challenge.difficulty)}
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span>{challenge.progress}%</span>
              </div>
              <Progress value={challenge.progress} className="h-2" />
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={14} className="mr-1" />
                <span>{challenge.timeLimit}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-white/10 pt-4">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" size={16} />
                <span>{challenge.rewardPoints} points</span>
              </div>
              <Button 
                variant="secondary"
                size="sm" 
                className="ml-auto gap-1"
                onClick={() => handleStartChallenge(challenge)}
              >
                Start <ArrowUpRight size={14} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChallengesPage;
