
import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Gamepad, Users, Menu, X, ShoppingBag, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Memoize the NavItem for performance
const NavItem = memo(({ 
  name, 
  icon, 
  path, 
  onClick 
}: { 
  name: string; 
  icon: React.ReactNode; 
  path: string; 
  onClick?: () => void;
}) => (
  <Link to={path} onClick={onClick}>
    <Button variant="ghost" className="flex items-center w-full justify-start">
      {icon} {name}
    </Button>
  </Link>
));

NavItem.displayName = "NavItem";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Quizzes", icon: <Gamepad className="mr-2" size={18} />, path: "/quizzes" },
    { name: "Challenges", icon: <Trophy className="mr-2" size={18} />, path: "/challenges" },
    { name: "Leaderboard", icon: <Users className="mr-2" size={18} />, path: "/leaderboard" },
    { name: "Shop", icon: <ShoppingBag className="mr-2" size={18} />, path: "/shop" },
    { name: "Profile", icon: <User className="mr-2" size={18} />, path: "/profile" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 backdrop-blur-md bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 gaming-gradient rounded-full overflow-hidden animate-pulse-glow">
            <Gamepad className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" size={18} />
          </div>
          <span className="font-bold text-xl text-glow">QuizArena</span>
        </Link>

        {isMobile ? (
          <div>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full p-4 bg-background/95 backdrop-blur-md border-b border-white/10 flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavItem 
                    key={item.name} 
                    name={item.name} 
                    icon={item.icon} 
                    path={item.path} 
                    onClick={closeMenu}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-1">
            {navItems.map((item) => (
              <NavItem 
                key={item.name} 
                name={item.name} 
                icon={item.icon} 
                path={item.path}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default memo(NavBar);
