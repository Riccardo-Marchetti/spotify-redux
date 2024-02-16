import { useEffect, useState } from "react";

import { Alert, Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddToFavouriteAction, DetailSongPlayer } from "../redux/actions";

// eslint-disable-next-line react/prop-types
const AlbumSong = ({ artistName }) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const dispatch = useDispatch();

  const fetchSong = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q= ` +
          artistName
      );
      if (response.ok) {
        let { data } = await response.json();
        setSongs(data);
        console.log(data);
        setisLoading(false);
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
      setisError(true);
    }
  };
  useEffect(() => {
    fetchSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading && (
        <Spinner
          className="ms-4 mt-2"
          animation="border"
          variant="success"
        ></Spinner>
      )}
      {isError && (
        <Alert variant="danger">Impossibile caricare il contenuto </Alert>
      )}
      {songs.slice(0, 4).map((song) => {
        return (
          <div key={song.id}>
            <div className="col text-center">
              <img
                className="img-fluid"
                src={song.album.cover_medium}
                alt="track"
              />
              <p
                className="text-white"
                onClick={() => {
                  dispatch(DetailSongPlayer(song));
                }}
              >
                Track: {song.title}
                <br />
                Artist: {song.artist.name}{" "}
              </p>
              <Button
                className=" favourite"
                onClick={() => {
                  dispatch(AddToFavouriteAction(song));
                }}
              >
                <i className="bi bi-heart fill "></i>
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default AlbumSong;
