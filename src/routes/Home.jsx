import React from 'react'

const Home = () => {
  return (
    <>
    <body class="body-home">
    <main>
      <div class="c-content-home"> {/*container content home*/}
        <div class="content-home">
          <img src="https://institutopensi.org.br/wp-content/uploads/2022/11/estagio_2023.jpg" alt='medicos-estagiando'/>
          <h1 id='text-overlay'>Sprint 3 | Challenge Hospital Infantil Sabará</h1>
          <div class="button-overlay">
            <button>Conferir a solução</button>
          </div>
        </div>
      </div>

      <div class="c-desafio"> {/*container desafio, dentro dele tem 3 cards*/}
        <div class="content-problema size">
          <h2>Soluções tecnológicas para o Hospital</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/8242/8242600.png" alt='desafio-proposto'/>
          <p>O desafio que foi entregue tinha como objetivo desenvolvermos alguma solução tecnológica que ajudasse em alguma área do Hospital</p>
        </div>
        <div class="content-dados size">
          <h2>Dados</h2>
          <p>Confira alguns dados</p>
        </div>
        <div class="content-solucao size">
          <h2>Nossa Solução</h2>
          <p>Carrinho de Suprimentos Médicos</p>
          <a href='google.com.br'><button>Saiba mais</button></a>
        </div>
      </div>
    </main>
    


    </body>
    </>
  )
}

export default Home
