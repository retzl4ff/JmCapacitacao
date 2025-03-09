import { Card, CardBody, CardHeader } from 'reactstrap';

export default function Servicos() {
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
          <p>
            para casa em{' '}
            <span style={{ color: '#001376' }}>
              <u>segurança.</u>
            </span>
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <span
            className="slogan-message-description text-center p-3"
            style={{ fontSize: '26px', fontWeight: '500', color: 'black' }}
          >
            E é por esse motivo que nós <u>levamos a sua segurança a sério!</u>
          </span>
        </div>
      </div>
      <div className="card-message w-100 d-flex flex-column justify-content-center">
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ marginTop: '40px', gap: '45px' }}
        >
          <Card className="cards-section mb-3 d-flex justify-content-center">
            <CardBody style={{ background: 'rgba(210, 210, 210, 1)' }}>
              <CardHeader className="text-center border-0">
                <div style={{ marginLeft: '10px' }}>
                  Capacitamos pessoas <br /> para salvar vidas!
                </div>
              </CardHeader>
              <p className="p-3 text-center">
                <span>
                  Nossa missão vai além da prevenção de acidentes. Nós
                  capacitamos pessoas com conhecimento prático, equipamentos
                  adequados, técnicas de segurança e treinamentos especializados
                  para garantir que, em cada ambiente de trabalho,{' '}
                  <b>a vida seja sempre prioridade. </b>Através de cursos,
                  palestras e treinamentos práticos, oferecemos as ferramentas
                  necessárias para que cada colaborador seja capaz de agir com
                  autonomia, segurança e responsabilidade <br />{' '}
                  <u> em qualquer situação.</u>
                </span>
              </p>
            </CardBody>
          </Card>
          <Card className="cards-section d-flex justify-content-center">
            <CardBody style={{ background: 'rgba(210, 210, 210, 1)' }}>
              <CardHeader className="text-center border-0">
                Há 15 anos sendo referência <br /> em cursos e treinamentos!
              </CardHeader>
              <p className="p-3 text-center">
                <span>
                  Desde 2009, <b>somos referência</b> em cursos e treinamentos
                  de Normas Regulamentadoras, ajudando empresas a se adequarem
                  às legislações vigentes e promovendo ambientes de trabalho
                  mais seguros. Nossa trajetória é marcada pelo compromisso com
                  a qualidade, inovação e, acima de tudo, com a{' '}
                  <u>proteção da vida. </u>Capacitar sua equipe com a gente é
                  investir em segurança e na construção de um futuro mais seguro
                  para todos.
                </span>
              </p>
            </CardBody>
          </Card>
          <Card className="cards-section d-flex justify-content-center">
            <CardBody style={{ background: 'rgba(210, 210, 210, 1)' }}>
              <CardHeader className="text-center border-0">
                Tornamos o conhecimento acessível e fácil de entender!
              </CardHeader>
              <p className="p-3 text-center">
                <span>
                  Na JM Capacitação, acreditamos que a verdadeira segurança
                  começa com um conhecimento acessível. Enquanto outros
                  complicam, <b>nossos instrutores descomplicam!</b>{' '}
                  Transformamos normas complexas em um aprendizado simples e
                  prático, tornando cada conceito{' '}
                  <b>fácil de entender e aplicar. </b>
                  Com a nossa abordagem, cada colaborador sai dos treinamentos
                  não só preparado, mas confiante em saber{' '}
                  <u>que domina o que realmente importa</u>: proteger vidas com
                  segurança. Aqui, o aprendizado não é só técnico, é
                  transformador!
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
