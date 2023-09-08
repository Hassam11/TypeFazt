import { useContext } from "react";
import { Phrases } from "../../context/LinesContext";
import Game from "../Game/Game";
import InitialGame from "../InitialGame/InitialGame";

export default function ContainerGame() {
  const { lineMovie } = useContext(Phrases);
  //   console.log(lineMovie.length  > 0);
  // console.log(linesMovies) // Trae el arra completo
  // console.log(lineMovie) //Trae un objeto en un array random del json
  return (
    <>
      {lineMovie.length > 0 ? <Game /> : <InitialGame />}
    </>
  );
}
