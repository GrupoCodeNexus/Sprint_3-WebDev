import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="rodape">
        <div class="c-left">
            <h2 id="title-left">Links Úteis</h2>
            <ul>
                <li><a href="./home">Home</a></li>
                <li><a href="./problema">Problema</a></li>
                <li><a href="./solucao">Nossa Solução</a></li>
            </ul>
        </div>
        <div class="c-right">
            <h2 id="title-right">Desenvolvedores do projeto</h2>
            <ul>
                <li><a href="https://www.linkedin.com/in/franciscovargas7/"><img src="./src/assets/linkedin.png"/></a><a>Francisco Vargas</a></li>
                <li><a href="https://www.linkedin.com/in/"><img src="./src/assets/linkedin.png"/></a><a>Matheus Irizawa</a></li>
                <li><a href="https://www.linkedin.com/in/kayque-carvalho-49a190283/"><img src="./src/assets/linkedin.png"/></a><a>Kayque Carvalho</a></li>
                <li><a href="https://www.linkedin.com/in/"><img src="./src/assets/linkedin.png"/></a><a>Marcelo Affonso</a></li>
            </ul>
        </div>
        <div class="c-mid">
            <h2>Empresa Parceira</h2>
            <ul>
                <li><a>Hospital Infantil Sabará</a></li>
            </ul>
        </div>
    </footer>
    
    </>
  )
}

export default Footer
