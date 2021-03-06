import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SongBar.css";

function SongCard({ prop }) {
  const [show, setShow] = useState(false);
  const link = prop.youtube_link
    .replace("watch?v=", "embed/")
    .split("&list")[0];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="songBar">
      <div className="left">
        <Button variant="danger" onClick={handleShow}>
          Play
        </Button>
        <Modal show={show} onHide={handleClose}>
          <div className="youTubeModal">
            <iframe
              src={link}
              style={{ width: "60vw", height: "60vh", frameBorder: "0" }}
              allow="accelerometer; autoplay; encrypted-media"
              title="iframe"
              allowFullScreen
            />
          </div>
        </Modal>
      </div>
      <Link style={{ color: "white" }}    className="center" to={`/songs/${prop.id}?album=${prop.albumId}`}>
        {prop.name}
      </Link>
      <Link
        style={{ color: "white" }}
        className="right"
        to={`/artists/${prop.artistId}`}
      >
        <div className="artist">{prop.Artist.name}</div>
      </Link>
     
    </div>
  );
}

export default SongCard;
