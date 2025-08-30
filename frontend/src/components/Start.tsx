import toast from "react-hot-toast";

const Start = () => {
  const handleShutDown = () => {
    toast("Shutting down...");

    setTimeout(() => {
      // Clear the body
      document.body.innerHTML = "";

      // Create a full-screen div
      const shutdownScreen = document.createElement("div");
      shutdownScreen.style.position = "fixed";
      shutdownScreen.style.top = "0";
      shutdownScreen.style.left = "0";
      shutdownScreen.style.width = "100vw";
      shutdownScreen.style.height = "100vh";
      shutdownScreen.style.backgroundColor = "black";
      shutdownScreen.style.display = "flex";
      shutdownScreen.style.justifyContent = "center";
      shutdownScreen.style.alignItems = "center";
      shutdownScreen.style.flexDirection = "column";
      shutdownScreen.style.zIndex = "9999";

      // Add shutdown message
      const msg = document.createElement("h1");
      msg.innerText = "Windows is shutting down...";
      msg.style.color = "white";
      msg.style.fontFamily = "sans-serif";
      msg.style.fontSize = "2rem";
      msg.style.textAlign = "center";

      shutdownScreen.appendChild(msg);
      document.body.appendChild(shutdownScreen);
    }, 1000);
  };

  return (
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
        <li
          className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400"
          onClick={() =>
            toast.success("Tip: Did you know you can find Easter eggs here?")
          }
        >
          Tip
        </li>
        <a
          href="https://www.instagram.com/stha.prasun"
          target="_blank"
          className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400"
        >
          Instagram
        </a>
        <li
          onClick={() => {
            document.body.style.cursor = "url('Icons/thor-hammer.png'), auto";
            toast.success("Mjolnir activated! Move the cursor around");
          }}
          className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-gray-400"
        >
          Surprise
        </li>
        <li
          onClick={handleShutDown}
          className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer"
        >
          Shut Down...
        </li>
      </ul>
    </div>
  );
};

export default Start;
