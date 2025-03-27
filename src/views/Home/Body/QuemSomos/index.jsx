import { Card } from 'reactstrap';
import SalvarVidas from './SalvarVidas';
import CarousselButtons from '../../../../components/CarousselButtons';
import { useState } from 'react';
import Conhecimento from './Conhecimento';
import Anos from './Anos';

const RenderComponent = {
  0: SalvarVidas,
  1: Conhecimento,
  2: Anos,
};

export default function QuemSomos() {
  const [activePage, setActivePage] = useState(0);
  const [fade, setFade] = useState(false);

  const handlePageChange = (page) => {
    setFade(true);
    setTimeout(() => {
      setActivePage(page);
      setFade(false);
    }, 150);
  };

  return (
    <div
      className="slogan position-relative w-100 d-flex flex-column"
      id="quem"
      style={{
        overflow: 'hidden',
      }}
    >
      <div
        className="w-100 slogan-message flex-column text-center d-flex justify-content-center align-items-center"
        style={{ paddingTop: '75px', width: '90%' }}
      >
        <div className="voce-merece">
          <p style={{ color: 'rgb(57 177 255)' }}>Você merece voltar</p>
          <p style={{ color: 'rgb(57, 177, 255)' }}>
            para casa em{' '}
            <span style={{ color: '#00084d' }}>
              <u>segurança.</u>
            </span>
          </p>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: '90%' }}
        >
          <span
            className="levamos-serio slogan-message-description text-center p-3"
            style={{ fontSize: '32px', fontWeight: '500', color: 'white' }}
          >
            E é por esse motivo que nós levamos a sua segurança a sério!
          </span>
        </div>
      </div>
      <div className="card-message w-100 d-flex flex-column justify-content-center">
        <div
          className="d-flex justify-content-center flex-wrap w-100 mb-4"
          style={{ marginTop: '40px', gap: '45px' }}
        >
          <Card className="cards-section">
            <CarousselButtons
              onClick={handlePageChange}
              clickedButton={activePage}
            />
            <div className={`render-section ${fade ? 'fade-out' : 'fade-in'}`}>
              {RenderComponent[activePage]()}
            </div>
          </Card>
        </div>
      </div>
      <div>
        <img src="assets\banner_wave.png" alt="Banner-wave" />
      </div>
    </div>
  );
}
