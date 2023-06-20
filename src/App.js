import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import DislikedPhotos from "./components/DislikedPhotos";
import LikedPhotos from "./components/LikedPhotos";

function App() {
  const photoList = [
    "https://tse1.mm.bing.net/th?id=OIP.buntINTHFLyDODyMKXNYcgHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114",
    "https://tse1.mm.bing.net/th?id=OIP.iXvEDuv2D7rz76A3DkcFlgHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114",
    "https://tse1.mm.bing.net/th?id=OIP.hQMNrNobH5G5L_dwVrF2SAHaG1&pid=Api&rs=1&c=1&qlt=95&w=123&h=114",
    "https://tse1.mm.bing.net/th?id=OIP.UYz-JnE98WarOum8LocsNwHaLp&pid=Api&rs=1&c=1&qlt=95&w=77&h=122",
    "https://tse1.mm.bing.net/th?id=OIP.19EnKgdS0wHL6NB7c2YoPQHaEo&pid=Api&rs=1&c=1&qlt=95&w=176&h=110",
    "https://tse1.mm.bing.net/th?id=OIP.abDkCtT8wFGgnImb0OFgzgHaLX&pid=Api&rs=1&c=1&qlt=95&w=71&h=110",
    "https://tse1.mm.bing.net/th?id=OIP.aQZdvd_k50NhX9QN4XHCWAHaFj&pid=Api&rs=1&c=1&qlt=95&w=163&h=122",
    "https://tse1.mm.bing.net/th?id=OIP.I9lYxiZUIBeUXd0WC0xJTgHaFj&pid=Api&rs=1&c=1&qlt=95&w=160&h=119",
    "https://tse1.mm.bing.net/th?id=OIP.uyQGOjoSjoTIiwfKmkA1TgD0D_&pid=Api&rs=1&c=1&qlt=95&w=105&h=110",
    "https://tse1.mm.bing.net/th?id=OIP.n-bZxAIX7WWrCM4VFSOryQHaEK&pid=Api&rs=1&c=1&qlt=95&w=196&h=110",
    "https://tse1.mm.bing.net/th?id=OIP.eH6rg84F_TvBMTPdy-cGSAHaHd&pid=Api&rs=1&c=1&qlt=95&w=119&h=119",
    "https://tse2.mm.bing.net/th?id=OIP.R3IAG0Z7SAzTV56Xuvs1LwHaFj&pid=Api&P=0&h=180",
  ];

  const [allPhotos, setAllPhotos] = useState(photoList);
  const [allLikedPhotos, setLikedPhotos] = useState([]);
  const [allDislikedPhotos, setDislikedPhotos] = useState([]);

  // the handleLikePhoto function adds the liked photo to the allLikedPhotos array and removes
  // it from the allPhotos array. This allows the app to keep track of which photos the user
  // has liked and ensures that the liked photo is no longer available for liking.
  const handleLikePhoto = (photoUrl) => {
    // - This line updates the state variable allLikedPhotos by using the setLikedPhotos function.
    // It takes the previous value of allLikedPhotos (previouslyLikedPhotos), 
    // creates a new array with all the previous liked photos using the 
    // spread operator [...previouslyLikedPhotos], and adds the new photoUrl at the end of the array.
    // This ensures that the new liked photo is added to the allLikedPhotos array without mutating the previous state.
    setLikedPhotos((previouslyLikedPhotos) => [...previouslyLikedPhotos, photoUrl]); 
    setAllPhotos((previouslyAllPhotos) => previouslyAllPhotos.filter((photo) => photo !== photoUrl)
);
  };

  const handleDislikePhoto = (photoUrl) => {
    setDislikedPhotos((previouslyDislikedPhotos) => [...previouslyDislikedPhotos,photoUrl,]);
    setAllPhotos((previouslyAllPhotos) => previouslyAllPhotos.filter((photo) => photo !== photoUrl));
  };

  return (
    <div className="App" style={{ border: "2px solid blue"}}>
      <h1>My Pic App</h1>

      <div className="mainContainer">
        <Container
          allPhotos={allPhotos}
          handleLikePhoto={handleLikePhoto}
          handleDislikePhoto={handleDislikePhoto}
        />

        <div className="secContainer">
          <hr />
          <h1>Liked Photos</h1>
          <LikedPhotos
            allLikedPhotos={allLikedPhotos}
          />
          <hr />
          <h1>Disliked Photos</h1>
          <DislikedPhotos dislikedPhotos={allDislikedPhotos} />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
