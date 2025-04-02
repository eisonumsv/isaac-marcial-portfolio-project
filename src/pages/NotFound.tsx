
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Window from "../components/Window";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center">
      <Window title="Error 404" className="max-w-md w-full">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-accent">404</h1>
          <p className="text-xl text-white/80 mb-4">Oops! Page not found</p>
          <p className="text-white/60">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent text-navy py-2 px-4 rounded hover:bg-accent-hover transition-colors"
          >
            <Home className="h-4 w-4" /> Return to Home
          </Link>
        </div>
      </Window>
    </div>
  );
};

export default NotFound;
