import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../../Header";

export default function Inicio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoHeight, setVideoHeight] = useState(1920);
  const videoRef = useRef();
  const buttonRef = useRef(null);

  const updateVideoHeight = () => {
    if (window.innerWidth > videoHeight) {
      setVideoHeight(window.innerWidth);
    }
  };

  useEffect(() => {
    updateVideoHeight();

    window.addEventListener("resize", updateVideoHeight);
    return () => window.removeEventListener("resize", updateVideoHeight);
  }, []);

  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div id="inicio" className="position-relative">
      <div style={{ height: `${videoHeight * 0.5625}px`, overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ objectFit: "cover", width: `${videoHeight}px` }}
          onLoadedData={handleVideoLoaded}
          ref={videoRef}
        >
          <source src="assets\JM CAPACITACAO.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="position-absolute" style={{ top: "30%", width: "100%" }}>
        <div className="banner-text container d-flex flex-column mb-3">
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontStyle: "normal",
              color: "white",
            }}
          >
            Precisa de qualificação <br></br> na área de Normas
            Regulamentadoras?
          </span>
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontStyle: "normal",
              color: "rgb(246, 184, 0)",
            }}
          >
            Então você está no lugar certo!
          </span>
        </div>
        <div
          className="banner-actions d-flex justify-content-center flex-wrap"
          style={{ gap: "60px" }}
        >
          <button
            className="button"
            onClick={() => scrollToSection("servicos")}
          >
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
                fontStyle: "normal",
                color: "white",
              }}
            >
              Conheça nossos serviços
            </span>
          </button>
          <button className="button" ref={buttonRef}>
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
                fontStyle: "normal",
              }}
            >
              Entre em contato
            </span>
          </button>
        </div>
      </div>
      <div className="separator" />
    </div>
  );
}
