import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Online from './Online';
import Presencial from './Presencial';

const abasServicos = {
  0: (props) => <Online {...props} />,
  1: (props) => <Presencial {...props} />,
  // 2: (props) => <InCompany {...props} />,
};

const carouselItems = [
  {
    imageSrc: 'assets/nr-1.jpg',
    description:
      'NR 01: DISPOSIÇÕES GERAIS E GERENCIAMENTO DE RISCOS OCUPACIONAIS',
  },
  {
    imageSrc: 'assets/nr-5.jpg',
    description: 'NR 05: COMISSÃO INTERNA DE PREVENÇÃO DE ACIDENTES (CIPA)',
  },
  {
    imageSrc: 'assets/nr-10-basico.jpg',
    description:
      'NR 10: SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE (BÁSICO)',
  },
  {
    imageSrc: 'assets/nr-10-sep.jpg',
    description:
      'NR 10: SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE (SEP)',
  },
  {
    imageSrc: 'assets/nr-11.jpg',
    description:
      'NR 11: TRANSPORTE, MOVIMENTAÇÃO, ARMAZENAGEM E MANUSEIO DE MATERIAIS',
  },
  {
    imageSrc: 'assets/nr-12.jpg',
    description: 'NR 12: SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS',
  },
  {
    imageSrc: 'assets/nr-20.jpg',
    description:
      'NR 20: SEGURANÇA E SAÚDE NO TRABALHO COM INFLAMÁVEIS E COMBUSTÍVEIS',
  },
  {
    imageSrc: 'assets/nr-23.jpg',
    description: 'NR 23: PROTEÇÃO CONTRA INCÊNDIOS',
  },
  {
    imageSrc: 'assets/nr-35.jpg',
    description: 'NR 35: TRABALHO EM ALTURA',
  },
];

export default function Servicos() {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeInClass, setFadeInClass] = useState('');

  const handlePageChange = (page) => {
    setActiveTab(page);
    setFadeInClass('fade-out');
    setTimeout(() => {
      setFadeInClass('fade-in');
    }, 150);
  };

  return (
    <div
      className="servicos position-relative w-100 d-flex flex-column"
      style={{ gap: '40px' }}
      id="servicos"
    >
      <div className="nav-servicos-button d-flex justify-content-around align-items-center w-100">
        <div
          className="button-nav-servicos d-flex justify-content-center p-1 rounded"
          style={{ gap: '5px', width: '25%' }}
        >
          <Button
            onClick={() => handlePageChange(0)}
            className={`${activeTab === 0 && 'active-button'} w-50`}
          >
            Online
          </Button>
          <Button
            onClick={() => handlePageChange(1)}
            className={`${activeTab === 1 && 'active-button'} w-50`}
          >
            Presencial
          </Button>
        </div>
      </div>
      {abasServicos[activeTab]({ carouselItems, fadeInClass })}
    </div>
  );
}
