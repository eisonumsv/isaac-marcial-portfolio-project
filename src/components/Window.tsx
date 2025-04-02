
import { ReactNode } from "react";
import { X, Minus, Square } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Window = ({ title, children, className = "" }: WindowProps) => {
  return (
    <div className={`window animate-fade-in ${className}`}>
      <div className="window-title">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button className="text-white opacity-70 hover:opacity-100">
            <Minus className="h-4 w-4" />
          </button>
          <button className="text-white opacity-70 hover:opacity-100">
            <Square className="h-3.5 w-3.5" />
          </button>
          <button className="text-white opacity-70 hover:opacity-100">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
