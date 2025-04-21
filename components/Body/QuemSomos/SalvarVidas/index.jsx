import { CardBody, CardHeader } from 'reactstrap';

export default function SalvarVidas() {
  return (
    <div className="card-section">
      <CardHeader className="border-0 d-flex justify-content-center">
        <span className="header-card" style={{ color: '#00084d' }}>
          Capacitamos pessoas{' '}
          <span className="gradient-blue">para salvar vidas </span>
        </span>
      </CardHeader>
      <CardBody className="flex-column mb-4">
        <p className="m-0">
          <span
            style={{
              fontSize: '19px',
              color: 'white',
              fontWeight: '400',
            }}
          >
            Nossa missão vai além da prevenção de acidentes. Nós capacitamos
            pessoas com conhecimento prático, equipamentos adequados, técnicas
            de segurança e treinamentos especializados para garantir que, em
            cada ambiente de trabalho, a vida seja sempre prioridade. Através de
            cursos, palestras e treinamentos práticos, oferecemos as ferramentas
            necessárias para que cada colaborador seja capaz de agir com
            autonomia, segurança e responsabilidade em qualquer situação
            <br />
            <br /> Nosso objetivo é capacitar profissionais para que, além de
            seguir procedimentos, tenham confiança para tomar decisões rápidas e
            acertadas, mesmo em momentos de alta pressão. Acreditamos que,
            quando as pessoas são preparadas com as habilidades certas e o
            mindset adequado, elas não só evitam riscos, mas também se tornam
            protagonistas de um ambiente de trabalho mais seguro e consciente. E
            é por isso que nosso objetivo como empresa é &quot;Capacitar para
            Salvar&quot;.
          </span>
        </p>
      </CardBody>
    </div>
  );
}
