import React from 'react'
import './Line.css'

export const Line = ({guess, isFinal, solution}) => {

  //console.log(guess);
  
  const WORD_LENGTH = 5;
  const tiles =[];

  for (let i=0; i < WORD_LENGTH; i++){
    const char = guess[i];
    let className = 'tile';
    
    if (isFinal){
      console.log(guess[i]);
      if(char === solution[i]){
        className += ' correct';
      }else if (solution.includes(char)){
        className += ' close';
      }else {
        className += ' incorrect'
      }
    }

    tiles.push(<div key={i} className={className}>{char}</div>)
  }

  return (
    <div className='line'>
      {tiles}
    </div>
  )
}
