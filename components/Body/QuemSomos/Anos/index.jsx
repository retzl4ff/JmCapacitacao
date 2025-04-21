import { CardBody, CardHeader } from 'reactstrap';

export default function Anos() {
  return (
    <div className="card-section">
      <CardHeader className="border-0 d-flex justify-content-center">
        <span className="header-card" style={{ color: '#00084d' }}>
          Sendo referência em cursos e treinamentos{' '}
          <span className="gradient-blue"> há 15 anos </span>
        </span>
      </CardHeader>
      <CardBody className="mb-4">
        <p className="m-0">
          <span
            style={{
              fontSize: '19px',
              color: 'white',
              fontWeight: '400',
            }}
          >
            Desde 2009, somos referência em cursos e treinamentos de Normas
            Regulamentadoras, ajudando empresas a se adequarem às legislações
            vigentes e promovendo ambientes de trabalho mais seguros. Ao longo
            desses anos, tivemos a oportunidade de atender inúmeras organizações
            dos mais variados segmentos, sempre com o foco em proporcionar
            soluções de alta qualidade que atendam às necessidades específicas
            de cada cliente. <br />
            <br /> Nossa trajetória é marcada pelo compromisso com a qualidade,
            inovação e, acima de tudo, com a proteção da vida, o que nos tornou
            uma escolha de confiança para empresas que buscam melhorar suas
            práticas de segurança. Capacitar sua equipe com a gente é investir
            em segurança, eficiência e no desenvolvimento de uma cultura
            preventiva que beneficia tanto os colaboradores quanto os resultados
            da empresa.
          </span>
        </p>
      </CardBody>
    </div>
  );
}
