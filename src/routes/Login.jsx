// import logo from '../assets/loog.png';
import { useNavigate } from 'react-router-dom';
import users from '../Data/users.json'
import { useState } from 'react';

const Login = () => {

  const [usuario, setUsername] = useState ('');
  const [senha, setPassword] = useState ('');
  const navigate = useNavigate ();

  // Metodo para verificar se o login está correto, caso seja verdade redireciona o usuario para Home
  const verificarLogin = (usuario, senha) => {
    return users.some(
      (user) => user.usuario === usuario && user.senha === senha
    );
  };
    const handleSubmit = (e) => {
      e.preventDefault(); // evita o input 
      if (verificarLogin(usuario, senha)) {
          localStorage.setItem("Usuário", usuario); //Armazena o nome do usuario ao localstorage
          navigate("/Home") //Redireciona para a página Home
      } else {
        console.log("Usuário ou senha incorretos ");  //usar setError depois
      }
    };


  return (
    // Estrutura do formulário
    <div className='c-login'>
      <form className='login' onSubmit={handleSubmit}>
      <h1>Login</h1>   
            <label htmlFor="username">Nome de Usuário:</label>
            <input type="text" placeholder='Digite seu usuário' id="username" value={usuario} onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="password">Senha:</label>
            <input type="password" placeholder='Digite sua senha' id="password" value={senha} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Entrar</button>    
            {/* APRESENTA MENSAGEM DE ERRO - ainda em desenvolvimento  */}
            {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
            {/* LEMBRETE: Adicionar um alert para o usuário quando ele logar no site */}
      </form>
    </div>
  );
};

export default Login;
