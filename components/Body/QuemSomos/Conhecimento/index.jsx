import { CardBody, CardHeader } from 'reactstrap';

export default function Conhecimento() {
  return (
    <div className="card-section">
      <CardHeader className="border-0 d-flex justify-content-center">
        <span className="header-card" style={{ color: '#00084d' }}>
          Tornamos o conhecimento{' '}
          <span className="gradient-blue">acessível e fácil de entender! </span>
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
            Na JM Capacitação, acreditamos que a verdadeira segurança começa com
            um conhecimento acessível. Enquanto outros complicam, nossos
            instrutores descomplicam Transformamos normas complexas em um
            aprendizado simples e prático, tornando cada conceito fácil de
            entender e aplicar. Com a nossa abordagem, cada colaborador sai dos
            treinamentos não só preparado, mas confiante em saber que domina o
            que realmente importa: proteger vidas com segurança. Aqui, o
            aprendizado não é só técnico, é transformador!
            <br />
            <br />
            Nosso compromisso vai além de ensinar normas. Queremos criar uma
            cultura sólida de segurança, onde o conhecimento se converte em
            atitudes e práticas que salvam vidas diariamente. Cada conteúdo é
            pensado para impactar diretamente o dia a dia dos profissionais,
            proporcionando uma capacitação completa que une teoria e prática de
            forma eficaz.
          </span>
        </p>
      </CardBody>
    </div>
  );
}
