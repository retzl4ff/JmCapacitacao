import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const [header] = document.getElementsByClassName('header-component');
    const [body] = document.getElementsByClassName('body-component');
    body.style.paddingTop = `${header.offsetHeight}px`;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const [header] = document.getElementsByClassName('header-component');
    const [body] = document.getElementsByClassName('body-component');

    if (window.scrollY > 100) {
      setIsScrolled(true);
      body.style.paddingTop = `${header.offsetHeight}px`;
    } else {
      setIsScrolled(false);
      body.style.paddingTop = `${header.offsetHeight}px`;
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`header header-component d-flex align-items-center justify-content-center ${isScrolled ? 'showed' : ''}`}
    >
      <div className="logo">JM LOGO</div>
      <ul className="menu d-flex">
        <li onClick={() => scrollToSection('inicio')}>
          <span>Início</span>
        </li>
        <li onClick={() => scrollToSection('servicos')}>
          <span>Serviços</span>
        </li>
        <li onClick={() => scrollToSection('quem')}>
          <span>Quem somos</span>
        </li>
        <li onClick={() => scrollToSection('contato')}>
          <span>Contato</span>
        </li>
      </ul>
      <button
        onClick={() => {}}
        className="login-button rounded border-0 py-2 px-3 position-absolute"
        style={{ right: '5.2rem' }}
      >
        <span
          style={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 500,
            fontStyle: 'normal',
          }}
          onClick={() => {
            history('/login');
          }}
        >
          Entrar
        </span>
      </button>
    </nav>
  );
}
