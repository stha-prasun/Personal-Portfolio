import { useState } from "react";
import CmdInterface from "./CmdInterface";

const Home_cmd = () => {
  const [openCmd, setOpenCmd] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-center w-16 cursor-pointer select-none"
        onClick={() => setOpenCmd(true)}
        style={{
          fontFamily: '"MS Sans Serif", Tahoma, Geneva, Verdana, sans-serif',
        }}
      >
        <div className="w-16 h-16 -mb-2 flex items-center justify-center">
          <img className="w-16 h-16" src="/Icons/ms_dos.png" alt="cmd" />
        </div>
        <span className="font-light text-white text-sm text-center">DOS</span>
      </div>

      {openCmd && (
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
                C:\Prasun\Portfolio
              </span>
              <div className="flex gap-1">
                <button
                  className="bg-[#C0C0C0] border-t-2 border-l-2 border-b-2 border-r-2 border-black w-6 h-6 flex items-center justify-center text-black active:translate-x-[1px] active:translate-y-[1px] text-[12px] font-bold"
                  onClick={() => setOpenCmd(false)}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* CMD Content */}
            <div className="bg-[#C0C0C0] p-4 flex flex-col">
              <div className="bg-black text-green-400 font-mono p-2 w-full h-64 overflow-y-auto border border-gray-700 shadow-inner rounded">
                <CmdInterface />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home_cmd;
