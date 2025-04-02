
import { Home, User, HeartPulse, Info, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Taskbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const taskbarItems = [
    { path: "/", icon: <Home className="h-5 w-5" />, label: "Home" },
    { path: "/profile", icon: <User className="h-5 w-5" />, label: "Profile" },
    { path: "/hobbies", icon: <HeartPulse className="h-5 w-5" />, label: "Hobbies" },
    { path: "/about", icon: <Info className="h-5 w-5" />, label: "About" },
    { path: "/contact", icon: <Mail className="h-5 w-5" />, label: "Contact" },
  ];

  return (
    <div className="taskbar">
      <div className="bg-white/10 rounded-full px-1 py-1 flex gap-1">
        {taskbarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-1 rounded-full px-3 py-1 transition-all duration-200 ${
              isActive(item.path) 
                ? "bg-accent/20 text-accent" 
                : "text-white hover:bg-white/10"
            }`}
            title={item.label}
          >
            {item.icon}
            <span className={`${isActive(item.path) ? "block" : "hidden md:block"} text-xs`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Taskbar;
