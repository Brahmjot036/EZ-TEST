const Card = ({ title, image, description, isDark }) => {
    return (
      <div className={`rounded-xl shadow-lg p-6 border transition-all duration-300 cursor-pointer hover:scale-105 ${
        isDark ? "bg-white/10 border-white/20 hover:border-blue-400 hover:shadow-blue-500/50"
               : "bg-[#112949] border-gray-700 hover:border-blue-500 hover:shadow-lg"
      }`}>
        <div className="flex items-center space-x-3">
          <img src={image} alt={title} className="w-12 h-12 object-cover rounded-md" />
          <h3 className={`text-lg font-semibold ${isDark ? "text-blue-400" : "text-[#3CC3F2]"}`}>
            {title}
          </h3>
        </div>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    );
  };
  
  export default Card;
  