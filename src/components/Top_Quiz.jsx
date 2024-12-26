import React from 'react';
import PropTypes from 'prop-types';

const  Top_Quiz = ({ objectData, handleLike, isLiked, className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <div className='card'>
        <div
          className='text-center p-3'
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleLike();
            }}
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '2px 7px',
              cursor: 'pointer',
              color: isLiked ? 'red' : 'gray',
            }}
          >
            <i className={`fa-heart ${isLiked ? 'fa-solid' : 'fa-regular'}`} style={{ fontSize: '12px' }} />
          </div>

          <img src={objectData.imgSrc} alt={objectData.title} className="img-fluid mb-3" width={70} height={70} />
          <p className='text-dark m-0 p-0' style={{ fontSize: '11px', fontWeight: '700' }}>{objectData.title}</p>
        </div>
      </div>
    </div>
  );
};

Top_Quiz.propTypes = {
  objectData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // bgColor: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
  handleLike: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Top_Quiz.defaultProps = {
  className: '',
};

export default Top_Quiz;
