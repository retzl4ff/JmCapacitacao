import { Button } from "reactstrap";
import React from "react";
import CarouselDate from "./CarouselDate";

function Presencial({ fadeInClass }) {
  return (
    <>
      <div
        className="servicos-section d-flex flex-column"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="header-servicos d-flex justify-content-center mb-1">
          <span className="text-center">
            &quot;Mas o meu curso precisa ser presencial...&quot;
          </span>
        </div>
        <div className="descricao-servicos d-flex justify-content-center text-center w-100">
          <div className="w-75">
            <p style={{ fontSize: "18px" }}>
              Não tem problema! Para isso contamos com{" "}
              <b className="gradient-blue">duas modalidades</b> para atender
              você:
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-wrap">
        <div
          className={`carousel-servicos-section ${fadeInClass}`}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "50px",
            width: "85%",
            padding: "0px 50px",
          }}
        >
          <div className="px-5 pb-2">
            <h3 className="gradient-blue-2 w-50">Turmas Abertas</h3>
            <span
              style={{ color: "#00084d", fontSize: "17px", fontWeight: "400" }}
            >
              Se você não possui uma turma com colaboradores suficientes para
              preencher uma turma fechada, essa modalidade é para você!
            </span>
            <div>
              <p
                className="text-center pt-3 py-1 px-3"
                style={{
                  color: "#00084d",
                  borderRadius: "13px",
                  fontSize: "17px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <span style={{ fontWeight: "500" }}>
                  <b className="gradient-blue-2">Clique</b> em uma das datas
                  abaixo e verifique a disponibilidade com o nosso time:
                </span>
              </p>
            </div>
          </div>
          <CarouselDate />
        </div>
        <div
          className={`carousel-servicos-section ${fadeInClass}`}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "45%",
            padding: "0px 50px",
          }}
        >
          <div className="px-5">
            <h3 className="gradient-blue" style={{ width: "55%" }}>
              Turmas Fechadas
            </h3>
            <span
              style={{ color: "#00084d", fontSize: "17px", fontWeight: "400" }}
            >
              E para você que já conta com o número necessário de colaboradores
              para realizar um treinamento: <br />
              <br />
            </span>
            <div className="d-flex justify-content-around flex-wrap">
              <Button className="button">
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    fontStyle: "normal",
                  }}
                >
                  Enviar mensagem
                </span>
              </Button>
              <Button className="button">
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    fontStyle: "normal",
                  }}
                >
                  Enviar E-mail
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Presencial);
