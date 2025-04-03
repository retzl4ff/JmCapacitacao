import { useState } from 'react';
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
    imageSrc: '../../../../../public/assets/nr-1.jpg',
    description:
      'NR 01: DISPOSIÇÕES GERAIS E GERENCIAMENTO DE RISCOS OCUPACIONAIS',
  },
  {
    imageSrc: '../../../../../public/assets/nr-5.jpg',
    description: 'NR 05: COMISSÃO INTERNA DE PREVENÇÃO DE ACIDENTES (CIPA)',
  },
  {
    imageSrc: '../../../../../public/assets/nr-10-basico.jpg',
    description:
      'NR 10: SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE (BÁSICO)',
  },
  {
    imageSrc: '../../../../../public/assets/nr-10-sep.jpg',
    description:
      'NR 10: SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE (SEP)',
  },
  {
    imageSrc: '../../../../../public/assets/nr-11.jpg',
    description:
      'NR 11: TRANSPORTE, MOVIMENTAÇÃO, ARMAZENAGEM E MANUSEIO DE MATERIAIS',
  },
  {
    imageSrc: '../../../../../public/assets/nr-12.jpg',
    description: 'NR 12: SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS',
  },
  {
    imageSrc: '../../../../../public/assets/nr-20.jpg',
    description:
      'NR 20: SEGURANÇA E SAÚDE NO TRABALHO COM INFLAMÁVEIS E COMBUSTÍVEIS',
  },
  {
    imageSrc: '../../../../../public/assets/nr-23.jpg',
    description: 'NR 23: PROTEÇÃO CONTRA INCÊNDIOS',
  },
  {
    imageSrc: '../../../../../public/assets/nr-35.jpg',
    description: 'NR 35: TRABALHO EM ALTURA',
  },
];

export default function Servicos() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="servicos position-relative w-100 d-flex flex-column"
      style={{ gap: '40px' }}
      id="servicos"
    >
      <div className="nav-servicos-button d-flex justify-content-around align-items-center w-100">
        <div
          className="d-flex justify-content-center p-1 rounded"
          style={{ gap: '5px', width: '20%' }}
        >
          <Button
            onClick={() => setActiveTab(0)}
            className={`${activeTab === 0 && 'active-button'} w-50`}
          >
            Online
          </Button>
          <Button
            onClick={() => setActiveTab(1)}
            className={`${activeTab === 1 && 'active-button'} w-50`}
          >
            Presencial
          </Button>
        </div>
      </div>
      {abasServicos[activeTab]({ carouselItems })}
    </div>
  );
}
