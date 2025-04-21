import React, { useEffect, useState } from "react";

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <nav
      className={`header header-component d-flex align-items-center justify-content-center ${
        isScrolled ? "showed" : ""
      }`}
    >
      <div className="menu-header">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.location.reload()}
        >
          <img src="assets\JM.png" />
        </div>
        <ul className="menu d-flex">
          <li onClick={() => scrollToSection("inicio")}>
            <span>Início</span>
          </li>
          <li onClick={() => scrollToSection("quem")}>
            <span>Quem somos</span>
          </li>
          <li onClick={() => scrollToSection("servicos")}>
            <span>Serviços</span>
          </li>
          <li onClick={() => scrollToSection("contato")}>
            <span>Contato</span>
          </li>
        </ul>
        <button
          onClick={() => {
            history("/login");
          }}
          className="login-button rounded border-0 py-2 px-3"
        >
          <span
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            Entrar
          </span>
        </button>
      </div>
    </nav>
  );
}
