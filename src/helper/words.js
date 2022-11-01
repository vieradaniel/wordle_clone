import { wordList } from "../API/wordList"


export const words ={
    getRandomWord: ()=>{
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        return randomWord;
    }
}