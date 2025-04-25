import React from 'react'
import icone1 from '../assets/icone1.png'
import sistema from '../assets/sistema.png'

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

        <div className='c-solucao'>
          <div className='solucao'>
            <h2>Implementação</h2>
            <p>Carrinho de suprimentos médicos. <a>Leia mais.</a></p>
            <ul>
              <li className='link-img-solucao'><img src='' alt='icone'/><p><b>Segurança</b> a nossa solução garante segurança</p></li>
              <li className='link-img-solucao'><img src={icone1} alt='icone'/><p><b>Agilidade</b> a nossa solução garante agilidade</p></li>
              <li className='link-img-solucao'><img src='' alt='icone'/><p><b>Controle</b> a nossa solução garante controle</p></li>
            </ul>
          </div>
        </div>
      
      
      </>
  )
}

export default Solucao
