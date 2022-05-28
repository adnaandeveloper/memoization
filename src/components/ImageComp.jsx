import React from 'react';

const ImageComp = ({ image, number, dispatch }) => {
  console.log(dispatch);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        onClick={() => dispatch()}
        style={{ height: '10rem', cursor: 'pointer' }}
        src={image}
        alt="car"
      />
      <h1>{number}</h1>
    </div>
  );
};

export default ImageComp;
