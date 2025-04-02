
import Window from "../components/Window";
import { Code, Palette, Football } from "lucide-react";

const Hobbies = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Window title="My Hobbies">
        <div className="space-y-6">
          <p className="text-lg text-white/90">
            My hobbies represent a blend of technical skill and creative expression, helping me grow into a well-rounded individual.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="bg-accent/20 p-3 rounded-full w-fit mb-4">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-2">Computer Programming</h3>
              <p className="text-white/80">
                My primary passion is coding. I enjoy learning different programming languages and building small projects to improve my skills.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-white/90 mb-1">Current Focus:</h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Web development (HTML, CSS, JavaScript)</li>
                  <li>Python programming</li>
                  <li>Basic algorithms and data structures</li>
                  <li>Simple game development</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="bg-accent/20 p-3 rounded-full w-fit mb-4">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-2">Digital Drawing</h3>
              <p className="text-white/80">
                I express my creativity through digital art, creating illustrations and designs using various digital tools and software.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-white/90 mb-1">Favorite Tools:</h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Adobe Photoshop</li>
                  <li>Procreate</li>
                  <li>Krita</li>
                  <li>Digital drawing tablet</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="bg-accent/20 p-3 rounded-full w-fit mb-4">
                <Football className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-2">Football</h3>
              <p className="text-white/80">
                I enjoy playing football as a way to stay active, build teamwork skills, and take a break from technology.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-white/90 mb-1">Skills & Activities:</h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>School football team</li>
                  <li>Weekend practice sessions</li>
                  <li>Position: Midfielder</li>
                  <li>Local community matches</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Window title="How My Hobbies Connect">
              <p className="text-white/90">
                My interests in programming, digital art, and football complement each other in unique ways. The problem-solving skills I develop through programming help me approach creative challenges in digital art. Meanwhile, football provides a physical outlet that helps clear my mind and improves my ability to work in teams—a crucial skill for collaborative coding projects. Together, these hobbies create a balanced approach to personal development that combines technical skills, creativity, and physical activity.
              </p>
            </Window>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default Hobbies;
