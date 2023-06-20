import React from "react";


const LikedPhotos = ({ allLikedPhotos }) => {
  return (
    <div className="likedContainer">
       {allLikedPhotos.map((photoUrl, index) => (
        <img key={index} src={photoUrl} alt="Disliked Pic" />
      ))}
    </div>
  );
};

export default LikedPhotos;
