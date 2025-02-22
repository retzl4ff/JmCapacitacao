import { useNavigate } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();

  return (
    <>
      <div>Aqui será o login</div>
      <button
        onClick={() => {
          history('/');
        }}
      >
        Voltar
      </button>
    </>
  );
}
