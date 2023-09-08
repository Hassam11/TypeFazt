import { useContext } from "react";
import { Phrases } from "../../context/LinesContext";

export default function InitialGame() {
  const { fetchLine } = useContext(Phrases);
  const handleClick = () => {
    fetchLine(10);
  };
  return (
    <>
      <h2 className="font-bold text-4xl uppercase text-center py-10">Game</h2>
      <button
        className=" bg-slate-200 dark:bg-blue-900 dark:text-white m-auto w-2/3  font-medium rounded-lg text-lg px-5 py-2.5  "
        onClick={handleClick}
      >
        START
      </button>
    </>
  );
}
