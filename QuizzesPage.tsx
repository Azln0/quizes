
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad, Star, Filter } from "lucide-react";
import { getQuizzes, Quiz, getCategories } from "@/services/dataService";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const QuizzesPage = () => {
  const [quizzes] = useState<Quiz[]>(getQuizzes().sort((a, b) => sortByDifficulty(a.difficulty, b.difficulty)));
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const categories = [{ id: "all", name: "All Games" }, ...getCategories().map(cat => ({ id: cat, name: cat }))];

  function sortByDifficulty(a: string, b: string): number {
    const difficultyOrder = {
      "easy": 0,
      "medium": 1,
      "hard": 2
    };
    
    return difficultyOrder[a as keyof typeof difficultyOrder] - difficultyOrder[b as keyof typeof difficultyOrder];
  }

  const filteredQuizzes = activeFilter === "all" 
    ? quizzes 
    : quizzes.filter(quiz => quiz.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'League of Legends': return "🧙‍♂️";
      case 'Valorant': return "🔫";
      case 'CS:GO': return "💣";
      case 'Minecraft': return "⛏️";
      case 'General Gaming': return "🎮";
      case 'Elden Ring': return "🗡️";
      case 'Red Dead Redemption 2': return "🤠";
      case 'GTA V': return "🚗";
      default: return "🎲";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'border-green-500 bg-green-500/5';
      case 'medium': return 'border-yellow-500 bg-yellow-500/5';
      case 'hard': return 'border-red-500 bg-red-500/5';
      default: return 'border-blue-500 bg-blue-500/5';
    }
  };

  return (
    <div className="container py-8 pt-24">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <Gamepad className="mr-2" size={28} />
          Gaming Quizzes
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl">
          Test your gaming knowledge with our collection of quizzes covering popular games
          like League of Legends, Valorant, CS:GO, Minecraft, Elden Ring, RDR2, and GTA V.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <Filter className="mr-2" size={18} />
            Filter by Game
          </h2>
        </div>
        <TabsList className="bg-secondary/40 p-1 w-full flex flex-wrap justify-start">
          {categories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              onClick={() => setActiveFilter(category.id)}
              className="flex-grow sm:flex-grow-0"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
            <Card className={`gaming-card hover:border-primary/40 transition-all duration-300 h-full border ${getDifficultyColor(quiz.difficulty)}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{quiz.title}</CardTitle>
                  <Badge variant="outline" className={quiz.difficulty === 'easy' ? 'border-green-500' : quiz.difficulty === 'medium' ? 'border-yellow-500' : 'border-red-500'}>
                    {quiz.difficulty}
                  </Badge>
                </div>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <span className="mr-1">{getCategoryIcon(quiz.category)}</span> 
                    {quiz.category}
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {quiz.questions.length} questions
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-white/10 pt-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" size={16} />
                  <span>{quiz.totalPoints} points</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Play Quiz
                </Badge>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No quizzes found for this category.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setActiveFilter("all")}
          >
            Show All Quizzes
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizzesPage;
