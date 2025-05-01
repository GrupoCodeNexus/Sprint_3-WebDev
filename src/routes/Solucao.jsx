import React from 'react'
import sistema from '../assets/sistema.png'
import carrinho from '../assets/carrinho1.png'

const Solucao = () => {
  return (
      <>
        <div className='c-sistema'>
          <div className='sistema'>
            <h2>Sistema de cadastros de tratamentos</h2>
            <p>Cadastre seus pacientes e acompanhe o andamento.</p>
            <img src={sistema} alt='sistema-tratamentos'/>
          </div>
        </div>

        <div className='c-projecao'>
          <div className='projecao'>
            <h2>Projeção Futura</h2>
            <small>Integração do carrinho com o sistema & Upgrades</small>
            <img src={carrinho}/>
          </div>
        </div>

      
      </>
  )
}

export default Solucao
