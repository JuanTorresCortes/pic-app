import React from 'react';
const ImageCards = ({ photoUrl, handleLikePhoto, handleDislikePhoto }) => {
  
  return (
    
    <div className='cardDiv' style={{border: "2px solid blue"}}>
      <img style={{padding: "4px"}} src={photoUrl} alt="Funny Pic" onClick={() => handleLikePhoto(photoUrl)} />
      <br />
      <div style={{margin: "4%"}}>
        <button style={{backgroundColor: "green"}} onClick={() => handleLikePhoto(photoUrl)}>Like</button>
        <br />
        <button style={{backgroundColor: "red"}} onClick={() => handleDislikePhoto(photoUrl)}>Dislike</button>
      </div>
    </div>
  );
};

export default ImageCards;
