import { useContext, useEffect, useState } from "react";
import { Phrases } from "../../context/LinesContext";

export default function Game() {
  const { lineMovie } = useContext(Phrases);
  const [lineIndex, setLineIndex] = useState(0);
  const lineInfo = lineMovie[lineIndex];

  const isLineQuestion = lineMovie.length - 1;
  const nextLine = () => {
    if(isLineQuestion){
      setLineIndex(lineIndex + 1);
      setTeclaIngresada([]); //<-Se reincia el array desde 0
    }
 

    if (lineIndex === isLineQuestion) {
      return (
        <div>
          <p>Has llegado al final del juego.</p>
          <a href="/">Regresar al comienzo</a>
        </div>
      );
    }
   
  };

  const [teclaIngresada, setTeclaIngresada] = useState([]);

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      const tecla = event.key.toLowerCase();
      setTeclaIngresada((prevTeclas) => [...prevTeclas, tecla]);
    });
    return () => {
      document.removeEventListener("keydown", function () {});
    };
  }, []);

  return (
    <>
      <div className=" flex flex-col justify-between max-w-2xl w-5/6  py-10 px-2  bg-white shadow-2xl  dark:bg-slate-800  rounded-lg my-20 m-auto">
        <div>
          <h2 className="text-gray-800 dark:text-cyan-50 px-2 text-center w-full text-5xl uppercase font-semibold ">
            {lineInfo.movie}
          </h2>
          <div className="text-center  py-10">
            <p className="text-6xl font-mono ">
              {lineInfo.phrase.split("").map((letra, index) => (
                <span
                  key={index}
                  className={`${teclaIngresada.includes(letra.toLowerCase())? "text-stone-950"  : "text-gray-400"}`}
                >
                  {letra}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="flex justify-between px-4 mt-4 ">
          <span className="text-xl font-medium text-gray-400  dark:text-gray-300">
            {lineInfo.year}
          </span>
          <span className="text-xl font-medium text-gray-900   dark:text-gray-400">
            {lineInfo.character}
          </span>
        </div>
        <button className="text-4xl pt-10 " onClick={nextLine}>NEXT</button>
      </div>
    </>
  );
}
