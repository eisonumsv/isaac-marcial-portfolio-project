
import Window from "../components/Window";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Window title="About Me">
        <div className="space-y-6">
          <p className="text-lg text-white/90">
            I am Isaac John M. Marcial, a young aspiring teenager with a passion for creativity and technology. Currently a student at San Beda Alabang in class 10-TLEICTCP-A, I am focused on developing my skills in both technical and creative fields.
          </p>
          
          <h3 className="text-xl font-semibold text-accent">My Journey in Programming</h3>
          <p className="text-white/80">
            My interest in computer programming began when I was introduced to simple coding games in middle school. What started as curiosity quickly developed into a passion as I began learning HTML and CSS to create basic websites. As I progressed, I discovered Python and JavaScript, which opened up new possibilities for creating interactive projects.
          </p>
          <p className="text-white/80">
            Currently, I'm focused on expanding my programming knowledge through online courses and small project development. I enjoy the problem-solving aspects of coding and the satisfaction of creating something functional from scratch. My goal is to develop innovative applications that combine technical excellence with creative design.
          </p>
          
          <h3 className="text-xl font-semibold text-accent">Technical Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded">
              <h4 className="font-medium text-accent mb-2">Web Development</h4>
              <p className="text-white/70 text-sm">
                Building responsive websites using HTML, CSS, and JavaScript. I'm particularly interested in creating interactive user interfaces and learning modern frameworks.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded">
              <h4 className="font-medium text-accent mb-2">Python Programming</h4>
              <p className="text-white/70 text-sm">
                Developing small applications and scripts to automate tasks. I'm learning about data structures and algorithms to build more efficient programs.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded">
              <h4 className="font-medium text-accent mb-2">Game Development</h4>
              <p className="text-white/70 text-sm">
                Exploring basic game development concepts using Python libraries and simple game engines to create interactive experiences.
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded">
              <h4 className="font-medium text-accent mb-2">UI/UX Design</h4>
              <p className="text-white/70 text-sm">
                Combining my programming skills with digital art to create visually appealing and user-friendly interfaces for applications.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-accent">Beyond Programming</h3>
          <p className="text-white/80">
            Outside of my technical pursuits, I enjoy digital drawing where I create illustrations and designs that express my creativity. I've been developing my digital art skills alongside my programming abilities, finding that they complement each other well in projects that require both technical implementation and visual design.
          </p>
          <p className="text-white/80">
            I also play football as a way to stay active and develop teamwork skills. The strategic thinking required in football often translates to problem-solving in programming, while the physical activity provides a necessary balance to my technical work.
          </p>
          
          <h3 className="text-xl font-semibold text-accent">Future Goals</h3>
          <p className="text-white/80">
            I aim to continue growing my technical skills while pursuing higher education in computer science or a related field. My goal is to develop innovative applications that blend technology with creative design, potentially in areas like web development, game design, or software engineering. I'm constantly seeking to learn and improve, believing that continuous education is key to success in the rapidly evolving tech field.
          </p>
        </div>
      </Window>
    </div>
  );
};

export default About;
