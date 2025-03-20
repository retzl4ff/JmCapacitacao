import { Card, CardBody, CardHeader } from 'reactstrap';

export default function QuemSomos() {
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
        style={{ paddingTop: '75px' }}
      >
        <div className="">
          <p style={{ color: 'rgb(57 177 255)' }}>Você merece voltar</p>
          <p style={{ color: 'rgb(57, 177, 255)' }}>
            para casa em{' '}
            <span style={{ color: '#00084d' }}>
              <u>segurança.</u>
            </span>
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <span
            className="slogan-message-description text-center p-3"
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
            <CardHeader className="border-0">
              <span className="header-card" style={{ color: '#242424' }}>
                Capacitamos{' '}
                <span className="gradient-blue">
                  pessoas para salvar vidas{' '}
                </span>
              </span>
            </CardHeader>
            <CardBody className="d-flex align-items-center justify-content-center mb-4">
              <p className="m-0">
                <span style={{ fontSize: '17px', color: 'black' }}>
                  Nossa missão vai além da prevenção de acidentes. Nós
                  capacitamos pessoas com conhecimento prático, equipamentos
                  adequados, técnicas de segurança e treinamentos especializados
                  para garantir que, em cada ambiente de trabalho,{' '}
                  <b>a vida seja sempre prioridade. </b>
                  <br />
                  <br />
                  Através de cursos, palestras e treinamentos práticos,
                  oferecemos as ferramentas necessárias para que cada
                  colaborador seja capaz de agir com autonomia, segurança e
                  responsabilidade <b>em qualquer situação.</b>
                </span>
              </p>
            </CardBody>
            <CardHeader className="border-0">
              <span className="header-card" style={{ color: '#242424' }}>
                Sendo referência em cursos{' '}
                <span className="gradient-blue">e treinamentos há 15 anos</span>
              </span>
            </CardHeader>
            <CardBody className="d-flex align-items-center justify-content-center mb-4">
              <p className="m-0">
                <span style={{ fontSize: '17px', color: 'black' }}>
                  Desde 2009, <b>somos referência</b> em cursos e treinamentos
                  de Normas Regulamentadoras, ajudando empresas a se adequarem
                  às legislações vigentes e promovendo ambientes de trabalho
                  mais seguros. Nossa trajetória é marcada pelo compromisso com
                  a qualidade, inovação e, acima de tudo, com a proteção da
                  vida. Capacitar sua equipe com a gente é investir em segurança
                  e na construção de um futuro mais seguro para todos.
                </span>
              </p>
            </CardBody>
            <CardHeader className="border-0">
              <span className="header-card" style={{ color: '#242424' }}>
                Tornamos o conhecimento{' '}
                <span className="gradient-blue">
                  acessível e fácil de entender!
                </span>
              </span>
            </CardHeader>
            <CardBody className="d-flex align-items-center justify-content-center mb-4">
              <p className="m-0">
                <span style={{ fontSize: '17px', color: 'black' }}>
                  Na JM Capacitação, acreditamos que a verdadeira segurança
                  começa com um conhecimento acessível. Enquanto outros
                  complicam, <b>nossos instrutores descomplicam!</b>{' '}
                  Transformamos normas complexas em um aprendizado simples e
                  prático, tornando cada conceito{' '}
                  <b>fácil de entender e aplicar. </b>
                  Com a nossa abordagem, cada colaborador sai dos treinamentos
                  não só preparado, mas confiante em saber que domina o que
                  realmente importa: proteger vidas com segurança. Aqui, o
                  aprendizado não é só técnico, é transformador!
                </span>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div>
        <img src="src\assets\banner_wave.png" alt="Banner-wave" />
      </div>
    </div>
  );
}
