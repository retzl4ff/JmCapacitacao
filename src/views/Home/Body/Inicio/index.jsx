import { useEffect, useRef, useState } from 'react';

export default function Inicio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (isLoaded && videoRef.current != null) {
      // videoRef.current.currentTime = 6;
    }
  }, [isLoaded]);

  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div id="inicio">
      <video
        autoPlay
        muted
        loop
        className="w-100"
        style={{ objectFit: 'cover', height: '90%' }}
        onLoadedData={handleVideoLoaded}
        ref={videoRef}
      >
        <source src="src\assets\JM CAPACITACAO.mp4" type="video/mp4" />
      </video>
      <div className="position-absolute" style={{ top: '33%', width: '100%' }}>
        <div className="banner-text container d-flex flex-column mb-3">
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              color: 'white',
            }}
          >
            Precisa de qualificação <br></br> na área de Normas
            Regulamentadoras?
          </span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontStyle: 'normal',
              color: 'rgb(246, 184, 0)',
            }}
          >
            Então você está no lugar certo!
          </span>
        </div>
        <div
          className="banner-actions d-flex justify-content-center flex-wrap"
          style={{ gap: '60px' }}
        >
          <button className="button">
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 500,
                fontStyle: 'normal',
                color: 'white',
              }}
              onClick={() => {
                history('/login');
              }}
            >
              Conheça nossos serviços
            </span>
          </button>
          <button className="button">
            <span
              style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 500,
                fontStyle: 'normal',
              }}
              onClick={() => {
                history('/login');
              }}
            >
              Entre em contato
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
