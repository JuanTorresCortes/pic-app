import React from "react";

const DislikedPhotos = ({ dislikedPhotos }) => {
  return (
    <div className="dislikedContainer">
      {dislikedPhotos.map((photoUrl, index) => (
        <img key={index} src={photoUrl} alt="Disliked Pic" />
      ))}
    </div>
  );
};

export default DislikedPhotos;
