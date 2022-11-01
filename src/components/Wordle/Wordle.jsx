import { useEffect, useState } from "react";
import { words } from "../../helper/words.js";
import { Line } from "../../components/Line/Line";
import {Keyboard} from '../../components/Keyboard/Keyboard'

export const Wordle = () => {
    const [solution, setSolution] = useState("hello");
    const [guesses, setGuesses] = useState(Array(6).fill(null));
    const [currentGuess, setCurrentGuess] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);
  
  
    const handleType = (event) => {
      
      if (isGameOver) {
        return;
      }
  
      if (event.key === "Enter" || event.target.value === "Enter") {
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
      if (event.key === "Backspace" || event.target.value === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }
      if (currentGuess.length >= 5) {
        return;
      }
      
      const isLetter = event.key ? event.key.match(/^[a-z]{1}$/) != null : event.target.value != null;
  
      if(isLetter){
        setCurrentGuess((oldGuess) => oldGuess + (event.key ? event.key : event.target.value));
      }
  
      
    };
  
    useEffect(() => {
      
  
      window.addEventListener("keydown", handleType);
      return () => window.removeEventListener("keydown", handleType);
    }, [currentGuess, isGameOver, solution,guesses]);
  
    useEffect(() => {
      setSolution(words.getRandomWord().toLowerCase());
    }, []);
  
    
  
    return (
      <div className='wordle'>
      <div className="board">
        {guesses.map((guess, i) => {
          const isCurrentGuess = i === guesses.findIndex((val) => val == null);
          
          return (<Line
                      key={'guess word ' + i} 
                      guess={isCurrentGuess ? currentGuess : guess ?? ""} 
                      isFinal={!isCurrentGuess && guess != null }
                      solution = {solution}
                  />);
        })}
      </div>
  
      <Keyboard handleType={handleType} guesses={guesses}/>
      </div>
    );
}
