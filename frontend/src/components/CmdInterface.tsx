import { useState } from "react";

const CmdInterface = () => {
  const initialHistory = [
    "help | about | skills | contact | education | resume | clear",
  ];
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(initialHistory);

  // Function to open resume in new tab
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  // Function to process commands
  const processCommand = (command: string): string | "clear" => {
    switch (command) {
      case "help":
        return "Available commands: help, about, skills, contact, education, resume, clear";
      case "about":
        return "Hi, I'm Prasun Shrestha, a MERN Stack Developer.";
      case "skills":
        return "Skills: JavaScript, React, Node.js, MongoDB, TypeScript, Tailwind CSS";
      case "contact":
        return "You can contact me at: shresthaprasun88@gmail.com";
      case "education":
        return "Education: BSc (Hons) Computing";
      case "resume":
        setTimeout(() => {
          openResume();
        }, 2000);
        return `
██████╗ ██████╗  █████╗ ███████╗██╗   ██╗███╗   ██╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║████╗  ██║
██████╔╝██████╔╝███████║███████╗██║   ██║██╔██╗ ██║
██╔═══╝ ██╔══██╗██╔══██║╚════██║██║   ██║██║╚██╗██║
██║     ██║  ██║██║  ██║███████║╚██████╔╝██║ ╚████║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝

Opening resume in a new tab...
`;
      case "clear":
        return "clear";
      default:
        return `Command not found: ${command}`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = input.trim().toLowerCase();
      const result = processCommand(command);

      if (result === "clear") {
        setHistory(initialHistory); // reset to initial line
        setInput("");
        return;
      }

      setHistory([...history, `prasun@portfolio:~$ ${input}`, result]);
      setInput("");
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 w-full max-w-2xl h-96 overflow-y-auto border border-gray-700 shadow-lg rounded">
      <div className="flex flex-col gap-1">
        {history.map((line, index) => (
          <div key={index}>
            {line.includes("████") ? (
              <pre className="whitespace-pre leading-snug">{line}</pre>
            ) : (
              line.split("\n").map((text, i) => <div key={i}>{text}</div>)
            )}
          </div>
        ))}
        <div className="flex">
          <span className="text-blue-500">prasun@portfolio:~$&nbsp;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-black text-green-400 outline-none flex-1 font-mono ml-1"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default CmdInterface;
