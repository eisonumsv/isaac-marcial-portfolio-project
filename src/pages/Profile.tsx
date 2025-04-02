
import Window from "../components/Window";
import ProfilePicture from "../components/ProfilePicture";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Window title="Profile">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="md:w-1/3 flex flex-col items-center">
            <ProfilePicture />
            <h2 className="text-2xl font-bold mt-4 text-accent">Isaac John M. Marcial</h2>
            <p className="text-white/80">Student Developer</p>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Personal Information</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-white/60">Name:</span>
                  <span className="col-span-2">Isaac John M. Marcial</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-white/60">School:</span>
                  <span className="col-span-2">San Beda Alabang</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-white/60">Class Section:</span>
                  <span className="col-span-2">10-TLEICTCP-A</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-white/60">Interests:</span>
                  <span className="col-span-2">Computer Programming, Digital Art, Football</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Programming Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <span>HTML/CSS</span>
                    <span>70%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full mt-1">
                    <div className="h-full bg-accent rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>JavaScript</span>
                    <span>55%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full mt-1">
                    <div className="h-full bg-accent rounded-full" style={{ width: "55%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Python</span>
                    <span>60%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full mt-1">
                    <div className="h-full bg-accent rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>UI Design</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full mt-1">
                    <div className="h-full bg-accent rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Educational Background</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-medium">San Beda Alabang</p>
                  <p className="text-white/70 text-sm">2022 - Present</p>
                  <p className="text-white/80">Class 10-TLEICTCP-A with focus on Information & Communications Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default Profile;
