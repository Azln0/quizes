
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { getQuizById, QuizQuestion, saveUserProgress } from "@/services/dataService";
import { Check, X, Trophy, Clock } from "lucide-react";

const QuizPage = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // Time-related states
  const [startTime, setStartTime] = useState<number>(0);
  const [timeBonus, setTimeBonus] = useState(0);
  const [showTimeBonus, setShowTimeBonus] = useState(false);
  
  useEffect(() => {
    if (quizId) {
      const quizData = getQuizById(quizId);
      if (quizData) {
        setQuiz(quizData);
        setQuestions(quizData.questions);
      } else {
        navigate("/quizzes");
      }
    }
  }, [quizId, navigate]);
  
  // Set start time when a new question is displayed
  useEffect(() => {
    if (questions.length > 0 && !isAnswered) {
      setStartTime(Date.now());
    }
  }, [currentQuestionIndex, questions, isAnswered]);
  
  const handleAnswerSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };
  
  const checkAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "You need to select an answer before submitting",
        variant: "destructive",
      });
      return;
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    
    setIsAnswered(true);
    setIsCorrect(correct);
    
    let pointsEarned = 0;
    
    if (correct) {
      // Calculate time bonus
      const endTime = Date.now();
      const timeElapsed = (endTime - startTime) / 1000; // in seconds
      let timeBonusPoints = 0;
      
      if (timeElapsed < 5) {
        timeBonusPoints = 2;
        toast({
          title: "Speed Bonus!",
          description: "You answered in under 5 seconds! +2 points",
          variant: "default",
        });
      }
      
      pointsEarned = currentQuestion.points + timeBonusPoints;
      setScore(score + pointsEarned);
      setTimeBonus(timeBonusPoints);
      setShowTimeBonus(timeBonusPoints > 0);
    }
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setShowTimeBonus(false);
      } else {
        setShowResults(true);
        // Save progress
        saveUserProgress(quizId, undefined, score);
      }
    }, 1500);
  };
  
  if (!quiz) {
    return <div className="container py-8 pt-24">Loading quiz...</div>;
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  
  return (
    <div className="container max-w-3xl py-8 pt-24">
      {!showResults ? (
        <Card className="gaming-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{quiz.title}</CardTitle>
              <div className="text-sm">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>
            <CardDescription>
              <div className="flex justify-between items-center mb-2">
                <span>Progress</span>
                <div className="flex items-center text-yellow-400">
                  <Clock size={16} className="mr-1" />
                  <span className="text-xs">Answer in under 5s for +2 points!</span>
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="text-xl font-medium">{currentQuestion.question}</div>
            
            <RadioGroup value={selectedAnswer || ""} className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className={`w-full p-4 rounded-md border transition-colors cursor-pointer
                      ${isAnswered && option === currentQuestion.correctAnswer
                        ? "border-green-500 bg-green-500/10"
                        : isAnswered && option === selectedAnswer
                        ? "border-red-500 bg-red-500/10"
                        : selectedAnswer === option
                        ? "border-primary"
                        : "border-white/10 hover:border-primary/50"
                      }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswered} />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
                      </div>
                      
                      {isAnswered && option === currentQuestion.correctAnswer && (
                        <Check className="text-green-500" />
                      )}
                      {isAnswered && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                        <X className="text-red-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
            
            {showTimeBonus && (
              <div className="flex items-center justify-center space-x-2 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-md animate-pulse">
                <Clock className="text-yellow-400" size={18} />
                <span className="font-bold text-yellow-400">Speed Bonus: +2 points!</span>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between border-t border-white/10 pt-4">
            <div>
              Current Score: <span className="font-bold">{score}</span>
            </div>
            <Button 
              onClick={checkAnswer} 
              disabled={isAnswered || selectedAnswer === null}
            >
              {isAnswered ? "Next Question..." : "Submit Answer"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="gaming-card text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
            <CardDescription>
              You've finished the {quiz.title} quiz
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full gaming-gradient opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full gaming-gradient opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy size={60} className="text-yellow-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl">Your Score:</h3>
              <p className="text-4xl font-bold text-glow">{score} / {quiz.totalPoints}</p>
              <p className="text-muted-foreground">
                {score === quiz.totalPoints 
                  ? "Perfect! You're a gaming expert!" 
                  : score > (quiz.totalPoints / 2) 
                    ? "Great job! You know your games well!"
                    : "Keep playing to improve your score!"}
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="justify-center space-x-4">
            <Button onClick={() => navigate("/quizzes")}>More Quizzes</Button>
            <Button variant="outline" onClick={() => navigate("/leaderboard")}>View Leaderboard</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default QuizPage;
