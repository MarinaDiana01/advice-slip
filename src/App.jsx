import './App.css';
import PauseIcon from '@mui/icons-material/Pause';
import CasinoIcon from '@mui/icons-material/Casino';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';
import FavoriteAdvicesModal from './components/FavoriteAdvicesModal/FavoriteAdvicesModal';


const App = () => {
  const[advice, setadvice] = useState({
    id: 117,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consectetur! Magnam necessitatibus similique tempora temporibus',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [favoriteAdvices, setFavoriteAdvices] = useState ([]);


  useEffect(() => {
    const storedAdvices = JSON.parse(localStorage.getItem('favoriteAdvices'));
    if (storedAdvices) {
      setFavoriteAdvices(storedAdvices);
    }
  }, []); 


  const handleGenerateAdvice = async() => {
    setIsLoading(true);

    const serverResponse = await fetch('https://api.adviceslip.com/advice');
    const data = await serverResponse.json();

    setIsLoading(false);

    const newAdvice = {
      id: data.slip.id,
      content: data.slip.advice,
    };
    setadvice(newAdvice);
  };


  const getAdviceIndex = () => {
    const adviceIndex = favoriteAdvices.findIndex((favoriteAdvice) => favoriteAdvice.id === advice.id);
    return adviceIndex;
  };


  const isAdviceInFavorites = () => {
    return favoriteAdvices.some((favoriteAdvice) => favoriteAdvice.id === advice.id);
  };


  const handleDeletedAdvice = (adviceId) => {
    const updatedFavoriteAdvices = favoriteAdvices.filter(favoriteAdvice => favoriteAdvice.id !== adviceId);
    setFavoriteAdvices(updatedFavoriteAdvices);

    localStorage.setItem('favoriteAdvices', JSON.stringify(updatedFavoriteAdvices));
  };


  const handleAddAdviceToFavorites = () => {
    const adviceIndex = getAdviceIndex();

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateAddedAdvice = `${day}/${month + 1}/${year}`;

    if (adviceIndex >= 0) {
      // elimina advice
      const newFavoriteAdvices = [...favoriteAdvices];
      newFavoriteAdvices.splice(adviceIndex, 1); 

      setFavoriteAdvices(newFavoriteAdvices);
    } else {
      // adauga advice
      const newFavoriteAdvices = [...favoriteAdvices, {
        id: advice.id, 
        content: advice.content,
        date: dateAddedAdvice,
        },
      ];
      setFavoriteAdvices(newFavoriteAdvices);

      localStorage.setItem('favoriteAdvices', JSON.stringify(newFavoriteAdvices));
    }
  };


  const handleModalOpening = () => {
    setIsOpen(true);
  };

  
  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <section className='app-container'>
      <button onClick={handleModalOpening} className='show-favorites'> Show favorites </button>
      
      {isOpen === true ?  (<FavoriteAdvicesModal  advices={favoriteAdvices} deleteAdvice={handleDeletedAdvice} setIsOpen={closeModal} />) : null}

      <div className='advice-slip-container'>
        <button onClick = {handleAddAdviceToFavorites} className='toggle-favorite-button'> 
          {
            isAdviceInFavorites() ? (<FavoriteIcon style={{color: '#52ffa8'}} />) : (<FavoriteBorderIcon style={{color: '#52ffa8'}} />) 
          }
        </button>
        <p className='advice-id'> ADVICE #{advice.id} </p>
        <p className='advice-content'> "{advice.content}" </p>
        <div className='separator-container'>
          <hr />
            <PauseIcon style={{color: '#cee3e9'}} />
          <hr />
        </div>
        <button onClick={handleGenerateAdvice} className='advice-button' disabled = {isLoading === true ? true : false}>
          {
            isLoading === true ? (<div className="spinner"></div>) : (<CasinoIcon fontSize={'large'} />)
          }  
        </button>
      </div>
    </section>
  );
};

export default App;
