
import Window from "../components/Window";
import ProfilePicture from "../components/ProfilePicture";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Window title="Welcome" className="max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <ProfilePicture size="lg" />
          
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-accent">Isaac John M. Marcial</h1>
            <p className="text-xl text-white/90">Student Developer & Digital Artist</p>
            <p className="text-white/80 max-w-lg mx-auto">
              A passionate student programmer from San Beda Alabang with interests in creative technology, computer science, and digital art.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link 
              to="/profile" 
              className="bg-accent text-navy font-medium px-4 py-2 rounded flex items-center gap-1 hover:bg-accent-hover transition-all"
            >
              View Profile <ChevronRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-white/20 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Window>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Window title="Programming Projects">
          <div className="space-y-4">
            <p className="text-white/90">
              Focused on developing skills in:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Web Development (HTML, CSS, JavaScript)</li>
              <li>Python Programming</li>
              <li>Basic Game Development</li>
              <li>UI/UX Design Principles</li>
            </ul>
            <Link 
              to="/profile" 
              className="text-accent hover:underline flex items-center gap-1"
            >
              Learn more <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </Window>
        
        <Window title="Recent Activities">
          <div className="space-y-4">
            <div className="border-b border-white/10 pb-2">
              <p className="text-white/90">Completed beginner Python course</p>
              <p className="text-white/60 text-sm">Last week</p>
            </div>
            <div className="border-b border-white/10 pb-2">
              <p className="text-white/90">Created digital art project</p>
              <p className="text-white/60 text-sm">2 weeks ago</p>
            </div>
            <div>
              <p className="text-white/90">Participated in school football tournament</p>
              <p className="text-white/60 text-sm">Last month</p>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
};

export default Home;
