import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import SpotifyPlayer from "./SpotifyPlayer";
import { deleteFromFavouriteAction } from "../redux/actions";
import { Link } from "react-router-dom";
import { DetailSongPlayer } from "../redux/actions";

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();

  return (
    <>
      <SideBar />
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
            <Link
              className="favourite-list text-decoration-none "
              to={"/favourite"}
            >
              FAVOURITE SONG
            </Link>
          </Col>
        </Row>
        <Row>
          {favourite.length !== 0 ? (
            favourite.map((song, i) => {
              return (
                <>
                  <Col
                    xs={12}
                    sm={6}
                    lg={4}
                    xl={3}
                    className="mt-5 text-center"
                  >
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
                      variant="danger"
                      onClick={() => {
                        dispatch(deleteFromFavouriteAction(i));
                      }}
                    >
                      <i className="bi bi-trash-fill "></i>
                    </Button>
                  </Col>
                </>
              );
            })
          ) : (
            <Container className="cont-preferiti mt-5 w-100 mx-0">
              <Row className="justify-content-center mt-5 w-100 mx-0">
                <h1 className="text-center text-white mt-5 w-100 mx-0">
                  {" "}
                  Nessun brano tra i preferiti
                </h1>
              </Row>
            </Container>
          )}
        </Row>
      </Col>
      <SpotifyPlayer />
    </>
  );
};
export default Favourite;
