import './FavoriteAdvicesModal.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteAdvicesContainer from '../FavoriteAdvicesContainer/FavoriteAdvicesContainer';

const FavoriteAdvicesModal = (props) => {
  return ( 
    <>
      <div onClick={props.setIsOpen} className="overlay"></div>
      <div className="favorite-advices-container favorite-advices-scrollbar">
        <div className="favorite-advices-title-container">
          <h2 className="favorite-advice-title"> My favorite Advices </h2>
          <AutoAwesomeIcon style={{color: '#4e5d73'}} stroke={"#1f2632"} strokeWidth={1} />
        </div>
        {props.advices.length === 0 ? (<p className="favorite-advice-message"> No favorite advices added yet </p>) : (<FavoriteAdvicesContainer advices={props.advices} deleteAdvice={props.deleteAdvice} />)}
    </div>
    </>
  );
};

export default FavoriteAdvicesModal;