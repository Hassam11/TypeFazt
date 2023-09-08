import { useEffect } from "react";
import ContainerGame from "./components/ContainerGame/ContainerGame";
import NavBar from "./components/Navbar/NavBar";
import LinesContext from "./context/LinesContext";

function App() {
  useEffect(() => {
    document.body.classList.add("dark:bg-slate-900");
    return () => {
      document.body.classList.remove("dark:bg-slate-900");
    };
  }, []);
  return (
    <LinesContext>
      <div className=" dark:bg-slate-900 dark:text-white">
        <NavBar />
        <div className=" container flex flex-col mx-auto ">
          <ContainerGame />
        </div>
      </div>
    </LinesContext>
  );
}

export default App;
