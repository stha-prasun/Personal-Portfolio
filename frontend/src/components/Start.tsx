const Start = () => {
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
  )
}

export default Start