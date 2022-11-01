import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { words } from "./helper/words.js";
import { Line } from "./components/Line/Line";

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const handleType = (event) => {
      if (isGameOver) {
        return;
      }

      if (event.key === "Enter") {
        if (currentGuess.length !== 5) {
          return;
        }

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess ('');


        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameOver(true);
        }
      }
      if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }
      if (currentGuess.length >= 5) {
        return;
      }
      const isLetter = event.key.match(/^[a-z]{1}$/) != null;

      if(isLetter){
        setCurrentGuess((oldGuess) => oldGuess + event.key);
      }

      
    };

    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, isGameOver, solution,guesses]);

  useEffect(() => {
    setSolution(words.getRandomWord().toLowerCase());
  }, []);

  

  return (
    <div className="board">
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((val) => val == null);
        console.log(isCurrentGuess);
        return (<Line 
                    guess={isCurrentGuess ? currentGuess : guess ?? ""} 
                    isFinal={!isCurrentGuess && guess != null }
                    solution = {solution}
                />);
      })}
    </div>
  );
}

export default App;
