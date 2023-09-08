import { createContext } from "react";
import ListLines from "../MovieLines.json";
import { useState } from "react";

export const Phrases = createContext();

export default function LinesContext({ children }) {
  const [linesMovies, setLinesMovies] = useState([]);
  const [lineMovie, setLineMovie] = useState([]);

  async function fetchLine(limit) {
    try {
      setLinesMovies(ListLines);

      setLineMovie(
        [...ListLines].sort(() => Math.random() - 0.5).slice(0, limit)
      );
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }

  return (
    <Phrases.Provider value={{ lineMovie, linesMovies, fetchLine }}>
      {children}
    </Phrases.Provider>
  );
}
