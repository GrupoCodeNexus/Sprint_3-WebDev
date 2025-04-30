import React from 'react'
import dash from '../assets/dash.png'
import future from '../assets/future.png'

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
            <button class="btn-perso">Conferir a solução</button>
          </div>
        </div>
      </div>

      <div class="c-desafio"> {/*container desafio, dentro dele tem 3 cards*/}
        <div class="content-problema size scale-card">
          <img src={future} alt='desafio-proposto'/>
          <p>des</p>
          <a href='google.com.br'><button>Saiba mais</button></a>
        </div>
        <div class="content-dados size scale-card">
          <img src={dash} alt="dados-icon"/>
          <p>Dashboards & Relatórios</p>
          <a href='google.com.br'><button>Saiba mais</button></a>
        </div>
        <div class="content-solucao size scale-card">
          <img src={future} alt='future-icon'/>
          <p>Projeção Futura: Integração Sistema + Carrinho</p>
          <a href='google.com.br'><button>Saiba mais</button></a>
        </div>
      </div>
    </main>
    


    </body>
    </>
  )
}

export default Home
