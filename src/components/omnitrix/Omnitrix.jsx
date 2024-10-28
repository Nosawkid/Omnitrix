import "./omnitrix.css";
import aliensArray from "../../data/aliens";
import { useEffect, useRef, useState } from "react";
import inactive from "../../assets/images/inactive.jpg";
import decativationSound from "../../assets/audio/deactivation-og.mp3";

const Omnitrix = () => {
  const [currentAlienIndex, setCurrentAlienIndex] = useState(0);
  const [chosenIndex, setChosenIndex] = useState(0);
  const currentAlien = aliensArray[currentAlienIndex];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const deactivatedAudio = new Audio(decativationSound);

  const imgRef = useRef(null);

  function reset() {
    deactivatedAudio.play();
    imgRef.current.src = aliensArray[aliensArray.length - 1].alienImage;
    setTimeout(() => {
      setChosenIndex(0);
      setCurrentAlienIndex(0);
    }, 4500);
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  function nextAlien() {
    if (currentAlienIndex < aliensArray.length - 1 && chosenIndex === 0) {
      setCurrentAlienIndex(currentAlienIndex + 1);
    }
    return;
  }

  function previousAlien() {
    if (currentAlienIndex > 0 && chosenIndex === 0) {
      setCurrentAlienIndex(currentAlienIndex - 1);
    }
  }

  const onChoose = () => {
    setChosenIndex(chosenIndex + 1);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <div className="omnitrix-container">
        {currentAlienIndex > 0 && chosenIndex === 0 && (
          <div className="left">
            <i
              onClick={previousAlien}
              style={{
                color: "#b8ee33",
                fontSize: isMobile ? "70px" : "100px",
                cursor: "pointer",
              }}
              className={
                isMobile ? "fa-solid fa-caret-up" : "fa-solid fa-caret-left"
              }
            ></i>
          </div>
        )}
        <div
          onClick={currentAlienIndex > 0 ? onChoose : null}
          className="omnitrix-interface-display"
        >
          <img
            ref={imgRef}
            className={
              chosenIndex === 0 ? "omnitrix-interface" : "omnitrix-chosen"
            }
            src={currentAlien.alienImage[chosenIndex]}
            alt="omnitrix Interface"
          />
        </div>
        {currentAlienIndex < 12 && chosenIndex === 0 && (
          <div className="right">
            <i
              onClick={nextAlien}
              style={{
                color: "#b8ee33",
                fontSize: isMobile ? "70px" : "100px",
                cursor: "pointer",
              }}
              className={
                isMobile ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"
              }
            ></i>
          </div>
        )}
        {chosenIndex === 1 && (
          <div className="inactive">
            <img
              onClick={reset}
              style={{ width: "50px", cursor: "pointer" }}
              src={inactive}
              alt="Inactive watch state"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Omnitrix;
