import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './FavoriteAdvice.css';

const FavoriteAdvice = props => {
  const handleRemoveAdvice = () => {
    props.removeAdvice(props.advice.id);
  };

  return (
    <div className="favorite-advice" key={props.advice.id}>
      <div className="favorite-advice-header">
        <p className="favorite-advice-id"> #{props.advice.id} </p>
        <button
          onClick={handleRemoveAdvice}
          className="favorite-advice-delete-button"
        >
          <DeleteOutlineIcon
            style={{ color: '#4e5d73' }}
            fontSize={'small'}
            stroke={'#1f2632'}
            strokeWidth={0.2}
          />
        </button>
      </div>
      <p className="favorite-advice-content"> {props.advice.content} </p>
      <p className="favorite-advice-date"> {props.advice.addedAt} </p>
    </div>
  );
};

export default FavoriteAdvice;
