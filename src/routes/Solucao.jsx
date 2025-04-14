import React from 'react'


const Solucao = () => {
  return (
    <div>
      <>
      <main>
        <div className='c-solucao'>
          <div className='solucao'>
            <h2>Carrinho de Suprimentos Inteligente</h2>
            <p>Descrição breve da ideia. <a>Leia mais.</a></p>
            <ul>
              <li className='link-img-solucao'><img src='' alt='icone'/><p><b>Segurança</b> a nossa solução garante segurança</p></li>
              <li className='link-img-solucao'><img src='' alt='icone'/><p><b>Agilidade</b> a nossa solução garante agilidade</p></li>
              <li className='link-img-solucao'><img src='' alt='icone'/><p><b>Controle</b> a nossa solução garante controle</p></li>
            </ul>
            <img src='' alt='img1'/> {/*a ideia é fazer a img aparecer assim que passar o mouse no primeiro li e assim por diante*/}
            <img src='' alt='img2'/>
            <img src='' alt='img3'/>
          </div>
        </div>
      </main>
      
      
      </>
    </div>
  )
}

export default Solucao
