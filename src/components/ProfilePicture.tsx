
interface ProfilePictureProps {
  size?: "sm" | "md" | "lg";
}

const ProfilePicture = ({ size = "md" }: ProfilePictureProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };
  
  return (
    <div className={`${sizeClasses[size]} border-4 border-accent mx-auto overflow-hidden`}>
      <img
        src="/lovable-uploads/9a53aae9-b891-4d50-8a75-34748f22ac55.png"
        alt="Isaac John M. Marcial"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfilePicture;
