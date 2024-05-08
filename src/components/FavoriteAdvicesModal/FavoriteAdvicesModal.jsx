import FavoriteAdvice from '../FavoriteAdvice/FavoriteAdvice';
import './FavoriteAdvicesModal.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const FavoriteAdvicesModal = props => {
  return (
    <>
      <div onClick={props.setIsOpen} className="overlay"></div>
      <div className="favorite-advices-container favorite-advices-scrollbar">
        <div className="favorite-advices-title-container">
          <h2 className="favorite-advice-title"> My favorite Advices </h2>
          <AutoAwesomeIcon
            style={{ color: '#4e5d73' }}
            stroke={'#1f2632'}
            strokeWidth={0.8}
          />
        </div>
        <div>
          {props.advices.length === 0 ? (
            <p className="favorite-advice-message">
              No favorite advices added yet
            </p>
          ) : (
            props.advices.map(advice => (
              <FavoriteAdvice
                key={advice.id}
                advice={advice}
                removeAdvice={props.removeAdvice}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FavoriteAdvicesModal;
