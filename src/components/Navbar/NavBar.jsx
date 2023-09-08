import { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

export default function NavBar() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <nav className="flex justify-between px-4 py-3 font-semibold" >
        <a className="text-center text-xl p-2" href="/">Inicio</a>
        <button
          onClick={handleChangeTheme}
          className="text-2xl  dark:bg-slate-900 px-2 py-2 rounded-md  hover:bg-slate-300 hover:dark:bg-slate-900 "
        >
          {theme === "light" ? <CiDark /> : <CiLight />}
        </button>
      </nav>
      <hr className=""/>
    </>
  );
}
