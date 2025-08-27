import { useState, useEffect } from "react";
import { Code, User, Star } from "lucide-react";
import Start from "./Start";
import Github from "./Github";

const Home = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [open, setOpen] = useState(false);

  // Update clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      if (hours === 0) hours = 12;

      const minutesStr = minutes < 10 ? "0" + minutes : minutes;
      const timeStr = `${hours}:${minutesStr} ${ampm}`;

      setCurrentTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#startBtn") && !target.closest("#startMenu")) {
        setShowStartMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      style={{
        background: "#018281",
        fontFamily:
          '"Tahoma", "MS Sans Serif", "Geneva", "Verdana", "sans-serif"',
      }}
    >
      {/* Desktop */}
      <div className="flex-1 p-2 flex flex-col items-start space-y-2">
        {/* Desktop Icons */}
        <div
          className="flex flex-col items-center w-16 cursor-pointer select-none"
          onClick={() => setOpen(true)}
          style={{
            fontFamily: '"MS Sans Serif", Tahoma, Geneva, Verdana, sans-serif',
          }}
        >
          <div className="w-16 h-16 -mb-2 flex items-center justify-center">
            <img
              className="w-16 h-16"
              src="/Icons/my_computer.png"
              alt="computer"
            />
          </div>
          <span className="font-light text-white text-sm text-center">Prasun</span>
        </div>

        {/* Windows 95 Popup */}
        {open && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#C0C0C0] border-t-2 border-l-2 border-b-2 border-r-2 border-black shadow-[4px_4px_0_#808080] w-[600px] max-h-[80vh] overflow-auto">
              {/* Title Bar */}
              <div className="flex items-center justify-between bg-[#000080] text-white px-2 py-1 select-none">
                <span
                  className="font-bold text-[13px]"
                  style={{
                    fontFamily:
                      '"MS Sans Serif", Tahoma, Geneva, Verdana, sans-serif',
                  }}
                >
                  Prasun
                </span>
                <div className="flex gap-1">
                  <button
                    className="bg-[#C0C0C0] border-t-2 border-l-2 border-b-2 border-r-2 border-black w-6 h-6 flex items-center justify-center text-black active:translate-x-[1px] active:translate-y-[1px] text-[12px] font-bold"
                    onClick={() => setOpen(false)}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#C0C0C0] p-4 flex flex-col space-y-4">
                {/* Header */}
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span className="font-bold text-[14px]">Prasun Shrestha</span>
                  <span className="text-[12px] text-gray-700">
                    • Full Stack Developer
                  </span>
                </div>

                {/* Skills Section */}
                <div className="flex items-start gap-2">
                  <Code size={16} className="mt-[2px]" />
                  <div className="text-[13px]">
                    <p className="font-bold">Skills:</p>
                    <p>
                      React, Node.js, Express, MongoDB, Tailwind CSS,
                      JavaScript, TypeScript
                    </p>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="flex items-start gap-2">
                  <Star size={16} className="mt-[2px]" />
                  <div className="text-[13px]">
                    <p className="font-bold">About Me:</p>
                    <p>
                      Passionate about building modern web applications using
                      the MERN stack.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Github />
      </div>

      {/* Taskbar */}
      <div className="h-8 bg-gray-300 text-black flex items-center px-2 relative border-t-2 border-white">
        <button
          id="startBtn"
          onClick={toggleStartMenu}
          className="bg-gray-300 text-black text-sm font-bold px-2 py-0.5 select-none hover:bg-gray-200"
          style={{
            borderTop: "2px solid white",
            borderLeft: "2px solid white",
            borderBottom: "2px solid #404040",
            borderRight: "2px solid #404040",
          }}
        >
          Start
        </button>

        <div className="flex-1"></div>

        <div
          className="text-sm text-black px-2 py-0.5"
          style={{
            borderTop: "1px solid #404040",
            borderLeft: "1px solid #404040",
            borderBottom: "1px solid white",
            borderRight: "1px solid white",
            background: "#c0c0c0",
          }}
        >
          {currentTime}
        </div>
      </div>

      {/* Start Menu Popup */}
      {showStartMenu && <Start />}
    </div>
  );
};

export default Home;
