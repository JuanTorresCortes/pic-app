import React from 'react';
import ImageCards from './ImageCards';

const Container = ({ allPhotos, handleLikePhoto, handleDislikePhoto }) => {
  return (
    <div className='containerMain'>
      {allPhotos.map((photoUrl, index) => (
        <ImageCards
          key={index}
          photoUrl={photoUrl}
          handleLikePhoto={() => handleLikePhoto(photoUrl)}
          handleDislikePhoto={() => handleDislikePhoto(photoUrl)}
        />
      ))}
    </div>
  );
};

export default Container;
