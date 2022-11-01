import React from 'react'
import './Keyboard.css'

export const Keyboard = ({handleType,guesses}) => {

 
  
 
  
  

  return (
    <div className='keyboard'>
        <button className={`key`} onClick={handleType} value='q'>Q</button>
        <button className='key' onClick={handleType} value='w'>W</button>
        <button className='key' onClick={handleType} value='e'>E</button>
        <button className='key' onClick={handleType} value='r'>R</button>
        <button className='key' onClick={handleType} value='t'>T</button>
        <button className='key' onClick={handleType} value='y'>Y</button>
        <button className='key' onClick={handleType} value='u'>U</button>
        <button className='key' onClick={handleType} value='i'>I</button>
        <button className='key' onClick={handleType} value='o'>O</button>
        <button className='key' onClick={handleType} value='p'>P</button>
        
        <div className='space'></div>

        <button className='key' onClick={handleType} value='a'>A</button>
        <button className='key' onClick={handleType} value='s'>S</button>
        <button className='key' onClick={handleType} value='d'>D</button>
        <button className='key' onClick={handleType} value='f'>F</button>
        <button className='key' onClick={handleType} value='g'>G</button>
        <button className='key' onClick={handleType} value='h'>H</button>
        <button className='key' onClick={handleType} value='j'>J</button>
        <button className='key' onClick={handleType} value='k'>K</button>
        <button className='key' onClick={handleType} value='l'>L</button>
        
        <div className='space'></div>

        <button className='key large' onClick={handleType} value='Enter'>Enter</button>
        
        <button className='key' onClick={handleType} value='z'>Z</button>
        <button className='key' onClick={handleType} value='x'>X</button>
        <button className='key' onClick={handleType} value='c'>C</button>
        <button className='key' onClick={handleType} value='v'>V</button>
        <button className='key' onClick={handleType} value='b'>B</button>
        <button className='key' onClick={handleType} value='n'>N</button>
        <button className='key' onClick={handleType} value='m'>M</button>
        
        <button className='key large' onClick={handleType} value='Backspace'>
          <svg   xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="game-icon" data-testid="icon-backspace">
            <path  fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z">
            </path>
          </svg>
        </button>
    </div>
    
  )
}
