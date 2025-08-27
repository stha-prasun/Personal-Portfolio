import { useState, useEffect } from "react";
import { Code, User, Star } from "lucide-react";

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
      className="h-screen flex flex-col"
      style={{
        background: "#018281",
        fontFamily:
          '"Tahoma", "MS Sans Serif", "Geneva", "Verdana", "sans-serif"',
      }}
    >
      {/* Desktop */}
      <div className="flex-1 p-2 flex flex-col items-start space-y-5">
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
          <span className="text-white text-xs text-center">Prasun</span>
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
                  About Me
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

        <div className="flex flex-col items-center w-16 cursor-pointer select-none">
          <div className="w-12 h-12 mb-1 bg-blue-500 rounded border-2 border-blue-700 flex items-center justify-center">
            🌐
          </div>
          <span className="text-white text-sm text-center">Internet</span>
        </div>

        <div className="flex flex-col items-center w-16 cursor-pointer select-none">
          <div className="w-12 h-12 mb-1 bg-gray-300 rounded border-2 border-gray-500 flex items-center justify-center">
            🗂️
          </div>
          <span className="text-white text-sm text-center">Documents</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="h-10 bg-gray-300 text-black flex items-center px-3 relative border-t-2 border-white">
        <button
          id="startBtn"
          onClick={toggleStartMenu}
          className="bg-gray-300 text-black px-2 py-1 font-bold hover:bg-gray-200 active:bg-gray-400"
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
          className="text-sm text-black px-2 py-1"
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
      {showStartMenu && (
        <div
          id="startMenu"
          className="fixed bottom-10 left-2 w-48 bg-gray-300 shadow-lg z-50"
          style={{
            borderTop: "2px solid white",
            borderLeft: "2px solid white",
            borderBottom: "2px solid #404040",
            borderRight: "2px solid #404040",
          }}
        >
          <ul className="flex flex-col">
            <li className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400">
              Programs
            </li>
            <li className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400">
              Documents
            </li>
            <li className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400">
              Settings
            </li>
            <li className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400">
              Find
            </li>
            <li className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400">
              Help
            </li>
            <li className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400">
              Run...
            </li>
            <li className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer">
              Shut Down...
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
