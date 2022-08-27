import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import { getRandomWord } from './helpers/getRandomWord';

function App() {
  const [word,setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attemps, setAttempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Determina si perdio
  useEffect(() => {
    if (attemps >= 9) {

      setLose(true);

    }
  }, [attemps]); // hooks

  //Determina si ganó
  useEffect(() => {
    console.log(hiddenWord);

    const currenHiddenWord = hiddenWord.split(' ').join('');
    if (currenHiddenWord == word) {
      setWon(true);
    }
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {

    if (lose) return;
    if (won) return;


    if (!word.includes(letter)) {
      setAttempts(Math.min(attemps + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');


    for (let index = 0; index < word.length; index++) {

      if (word[index] === letter) {
        hiddenWordArray[index] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));


  }
  const newGame = () => {

    const newWord = getRandomWord();
    setWord( newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
    
  }

  return (
    <div className='App'>
      {/* Imgs */}
      <HangImage imageNumber={attemps}></HangImage>
      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>
      {/* Contador de intentos */}
      <h3>Intentos: {attemps}</h3>
      {/* Mensaje de perdio */}

      {
        (lose) ?
          <h2>Perdió la palabra era:  {word}</h2>
          : ''
      }
      {/* Mensaje de gano */}

      {
        (won) ?
          <h2>Ganaste!!</h2>
          : ''
      }

      {/* Botones de letras */}
      {
        letters.map((letter) => (
          <button onClick={() => checkLetter(letter)}
            key={letter}>
            {letter}
          </button>
        ))
      }
      <br></br>
      <br></br>
      <button onClick={ newGame }>¿Nuevo juego?</button>
    </div>
  );
};

export default App
