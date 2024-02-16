import "./App.css";
import SideBar from "./components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import SpotifyPlayer from "./components/SpotifyPlayer";
import MainSection from "./components/MainSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourite from "./components/Favourite";

function App() {
  return (
    <BrowserRouter>
      <Container className="container-fluid m-0">
        {" "}
        <Row>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SideBar />
                  <MainSection />
                  <SpotifyPlayer />
                </>
              }
            />
            <Route path="favourite" element={<Favourite />} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
