
import { useEffect } from "react";
import { toast } from "sonner";
import { Achievement, getAchievements } from "@/services/dataService";
import { Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NOTIFICATION_CHECK_INTERVAL = 15000; // 15 seconds
const LOCAL_STORAGE_KEY = "lastAchievementCheck";

const getLastCheckedTime = (): number => {
  const lastCheck = localStorage.getItem(LOCAL_STORAGE_KEY);
  return lastCheck ? parseInt(lastCheck, 10) : 0;
};

const setLastCheckedTime = (time: number): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, time.toString());
};

const findNewAchievements = (achievements: Achievement[]): Achievement[] => {
  const lastCheckedTime = getLastCheckedTime();
  const now = Date.now();
  
  // Find achievements unlocked since the last check
  const newAchievements = achievements.filter(a => {
    if (!a.unlocked || !a.unlockedAt) return false;
    
    const unlockTime = new Date(a.unlockedAt).getTime();
    return unlockTime > lastCheckedTime && unlockTime <= now;
  });
  
  // Update the last checked time
  setLastCheckedTime(now);
  
  return newAchievements;
};

const NotificationSystem = () => {
  const navigate = useNavigate();
  
  const checkForAchievements = () => {
    const achievements = getAchievements();
    const newAchievements = findNewAchievements(achievements);
    
    if (newAchievements.length > 0) {
      // Show notifications for new achievements
      newAchievements.forEach(achievement => {
        toast(
          <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400" size={18} />
            <span>New Achievement Unlocked!</span>
          </div>,
          {
            description: achievement.title,
            action: {
              label: "View",
              onClick: () => navigate("/profile")
            },
            duration: 5000
          }
        );
      });
    }
  };
  
  useEffect(() => {
    // Check on component mount
    checkForAchievements();
    
    // Set up interval for checking
    const intervalId = setInterval(checkForAchievements, NOTIFICATION_CHECK_INTERVAL);
    
    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default NotificationSystem;
