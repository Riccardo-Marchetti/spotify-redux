export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";

export const AddToFavouriteAction = (song) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: song,
  };
};

export const deleteFromFavouriteAction = (i) => {
  return {
    type: DELETE_FROM_FAVOURITES,
    payload: i,
  };
};

export const DetailSongPlayer = (song) => {
  return {
    type: ADD_TO_PLAYER,
    payload: song,
  };
};
// export const searchFetchAction = () => {
//   return async (dispatch, getState) => {
//     try {
//       let response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/deezer/search?q= ` +
//           artistName
//       );
//       if (response.ok) {
//         let { data } = await response.json();
//         setSongs(data);
//         console.log(data);
//       } else {
//         throw new Error("errore");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
