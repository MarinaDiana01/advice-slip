import './FavoriteAdvicesContainer.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FavoriteAdvicesContainer = (props) => {
  return (
    <div className="favorite-advices-content">
      {/* mai jos generam un div pentru fiecare advice */}
      {
        props.advices.map((advice) => (
          <div className="favorite-advice" key={advice.id}>
            <div className="favorite-advice-header">
              <p className="favorite-advice-id"> #{advice.id} </p>
              <button  onClick={() => props.deleteAdvice(advice.id)} className="favorite-advice-delete-button">
                <DeleteOutlineIcon style={{color: '#4e5d73'}} fontSize={'small'} stroke={"#1f2632"} strokeWidth={0.2} />
              </button>
            </div>
            <p className="favorite-advice-content"> {advice.content} </p>
            <p className="favorite-advice-date"> {advice.date} </p>
          </div>
        ))
      }
    </div>
  );
};

export default FavoriteAdvicesContainer;