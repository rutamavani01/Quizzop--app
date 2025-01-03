import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Top_Quiz = ({ handleLike, isLiked, className, objectData, ...props }) => {

  return (
    <div className={`${className}`} {...props}>
      <div className="card " >
        <div
          className="text-center p-4"
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            position: 'relative',
            cursor: 'pointer',width:'100%',height:'130px'
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

          <img
            src={objectData.image}
            alt={objectData?.title}
            style={{ width: '60px', height: '60px', borderRadius: '8px' }}
          />
          <div>
            <p className='mt-3' style={{ margin: 0, fontWeight: 'bold',fontSize:'13px' }}>{objectData?.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Top_Quiz.propTypes = {
  handleLike: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  objectData: PropTypes.object.isRequired,
};

Top_Quiz.defaultProps = {
  className: '',
};

export default Top_Quiz;
