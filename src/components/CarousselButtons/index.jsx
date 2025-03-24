/* eslint-disable react/prop-types */
export default function CarousselButtons({ onClick, clickedButton }) {
  return (
    <div className="caroussel-buttons d-flex justify-content-center mb-5">
      <button
        onClick={() => onClick(0)}
        className={`d-flex justify-content-around button-carousel ${clickedButton === 0 && 'active'}`}
      >
        <img src="src\assets\heartbeat.png" />
        Capacitação
      </button>
      <button
        onClick={() => onClick(1)}
        className={`d-flex justify-content-between button-carousel ${clickedButton === 1 && 'active'}`}
      >
        <img src="src\assets\graduation-hat.png" />
        Conhecimento
      </button>
      <button
        onClick={() => onClick(2)}
        className={`d-flex justify-content-around button-carousel ${clickedButton === 2 && 'active'}`}
      >
        <img src="src\assets\calendar (1).png" />
        Desde 2009
      </button>
    </div>
  );
}
