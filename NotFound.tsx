
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-4 text-glow">404</h1>
          <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
          <Link to="/">
            <Button size="lg">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
