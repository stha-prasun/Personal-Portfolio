const Github = () => {
  return (
    <a
      href="https://github.com/stha-prasun"
      target="_blank"
      className="flex flex-col items-center w-16 cursor-pointer select-none"
      style={{
        fontFamily: '"MS Sans Serif", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <div className="w-16 h-16 -mb-2 flex items-center justify-center">
        <img className="w-16 h-16" src="/Icons/web.png" alt="computer" />
      </div>
      <span className="text-white text-xs text-center">Github</span>
    </a>
  );
};

export default Github;
