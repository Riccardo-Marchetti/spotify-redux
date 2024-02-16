import { Col, Container, Row } from "react-bootstrap";
import next from "../assets/next.png";
import play from "../assets/play.png";
import prev from "../assets/prev.png";
import repeat from "../assets/repeat.png";
import shuffle from "../assets/shuffle.png";
import { useSelector } from "react-redux";

const SpotifyPlayer = () => {
  const song = useSelector((state) => {
    return state.details.det;
  });
  console.log(song);
  const lastSong = song && song.length > 0 ? song[song.length - 1] : null;
  return (
    <Container className="container-fluid fixed-bottom bg-container pt-1">
      <Row className=" h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className=" h-100 flex-row justify-content-between align-items-center">
            <Col xs={1}>
              <div>
                <p></p>
              </div>
            </Col>
            <Col xs={6} md={4} className="playerControls ">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="col text-center d-flex flex-row">
                <p className="text-white">
                  Track: {lastSong ? lastSong.title : ""}
                  <br />
                  Artist:{" "}
                  {lastSong && lastSong.artist ? lastSong.artist.name : ""}
                </p>
                <img
                  className="img-fluid ms-5"
                  src={lastSong ? lastSong.album.cover_medium : ""}
                  alt="track"
                  style={{ height: "70px" }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SpotifyPlayer;
