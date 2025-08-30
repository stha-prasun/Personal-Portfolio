import { useState } from "react";

const JarvisInstructions = () => {
  const [openJarvis, setOpenJarvis] = useState(false);

  const instructions = [
    { command: "hello jarvis", description: "Greet the user" },
    { command: "time", description: "Tell the current time" },
    { command: "i am iron man", description: "Easter egg command" },
  ];

  return (
    <>
      {/* Icon */}
      <div
        className="flex flex-col items-center w-16 cursor-pointer select-none"
        onClick={() => setOpenJarvis(true)}
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, Geneva, Verdana, sans-serif',
        }}
      >
        <div className="w-16 h-16 -mb-2 flex items-center justify-center">
          <img
            className="w-16 h-16"
            src="/Icons/notepad.png"
            alt="instructions"
          />
        </div>
        <span className="font-light text-white text-sm text-center">
          Jarvis.txt
        </span>
      </div>

      {/* Instructions Popup */}
      {openJarvis && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#C0C0C0] border-t-2 border-l-2 border-b-2 border-r-2 border-black shadow-[4px_4px_0_#808080] w-[500px] max-h-[70vh] overflow-auto">
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-[#000080] text-white px-2 py-1 select-none">
              <span
                className="font-bold text-[13px]"
                style={{
                  fontFamily:
                    '"MS Sans Serif", Tahoma, Geneva, Verdana, sans-serif',
                }}
              >
                Jarvis - Instructions
              </span>
              <div className="flex gap-1">
                <button
                  className="bg-[#C0C0C0] border-t-2 border-l-2 border-b-2 border-r-2 border-black w-6 h-6 flex items-center justify-center text-black active:translate-x-[1px] active:translate-y-[1px] text-[12px] font-bold"
                  onClick={() => setOpenJarvis(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Instructions Content */}
            <div className="bg-white p-4 text-sm font-mono">
              <h2 className="font-bold mb-2">Available Commands:</h2>
              <ul className="list-disc pl-5 space-y-1">
                {instructions.map((item, index) => (
                  <li key={index}>
                    <span className="font-bold">{item.command}</span> -{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JarvisInstructions;
