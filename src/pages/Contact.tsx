
import Window from "../components/Window";
import { Mail, Phone, Send, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "../components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Window title="Contact Me">
        <div className="space-y-8">
          <p className="text-white/90">
            Feel free to reach out to me through any of the following channels. I'm always open to discussing projects, opportunities, or just chatting about technology and programming!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-white/80">09XX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:isaacjohnmandinmarcial@gmail.com" 
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    isaacjohnmandinmarcial@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Github className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-white/80">@isaacjmarcial</p>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-navy border border-white/20 rounded focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-navy border border-white/20 rounded focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 bg-navy border border-white/20 rounded focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent text-navy py-2 rounded flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </Window>
      
      <Window title="Office Hours">
        <div className="text-center space-y-4">
          <p className="text-white/90">
            I'm generally available to respond to messages during these hours:
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white/5 p-3 rounded">
              <h4 className="font-medium text-accent">Weekdays</h4>
              <p>4:00 PM - 9:00 PM</p>
            </div>
            <div className="bg-white/5 p-3 rounded">
              <h4 className="font-medium text-accent">Weekends</h4>
              <p>10:00 AM - 5:00 PM</p>
            </div>
          </div>
          <p className="text-white/70 text-sm">
            Response time may vary based on school schedule and activities
          </p>
        </div>
      </Window>
    </div>
  );
};

export default Contact;
