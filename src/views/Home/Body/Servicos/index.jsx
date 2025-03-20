export default function Servicos() {
  return (
    <div
      className="servicos position-relative w-100 d-flex flex-column"
      id="servicos"
      style={{
        overflow: 'hidden',
      }}
    >
      <div className="servicos-section d-flex flex-column">
        <div className="header-servicos d-flex justify-content-center">
          <span>Se capacite sem sair do conforto da sua casa!</span>
        </div>
        <div className="descricao-servicos d-flex justify-content-center text-center">
          <p>
            Com a nossa plataforma de treinamentos online você pode fazer os
            nossos cursos <br /> de normas regulamentadoras de onde você estiver
          </p>
        </div>
      </div>
    </div>
  );
}
