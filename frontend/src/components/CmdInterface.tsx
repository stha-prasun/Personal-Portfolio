import { useState } from "react";

const CmdInterface = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Add the input to history
      setHistory([...history, `> ${input}`, "Hi"]);
      setInput(""); // clear input
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 w-full max-w-lg h-96 overflow-y-auto border border-gray-700 shadow-lg rounded">
      <div className="flex flex-col gap-1">
        {history.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        <div className="flex">
          <span>&gt; </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-black text-green-400 outline-none flex-1 font-mono"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default CmdInterface;
