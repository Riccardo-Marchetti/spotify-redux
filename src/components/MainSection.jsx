import { Col, Row } from "react-bootstrap";
import AlbumSong from "./AlbumSong";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainSection = () => {
  const buttonFavourite = useSelector((state) => {
    return state.favourite.content.length;
  });
  return (
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
            FAVOURITE SONG <span>{buttonFavourite}</span>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col className="col-10">
          <div id="rock">
            <h2 className="text-white">Rock Classics</h2>
            <Row
              className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              <AlbumSong artistName={"queen"} />
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="col-10">
          <div id="pop">
            <h2 className="text-white">Pop Culture</h2>
            <Row
              className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              <AlbumSong artistName={"katyperry"} />
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="col-10">
          <div id="hiphop">
            <h2 className="text-white">HipHop</h2>
            <Row
              className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              <AlbumSong artistName={"eminem"} />
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default MainSection;
