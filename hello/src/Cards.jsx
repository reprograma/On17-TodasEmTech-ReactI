import Titulo from './Titulo'
import Imagem from './Imagem'
import Paragrafo from './Paragrafo'

function Cards() {
  return(
    <>
      <div className="card">
        <Titulo title="Gretchen"/>
        <Paragrafo>Texto1</Paragrafo>
        <Imagem link="https://33giga.com.br/wp-content/uploads/2018/01/eb9fbd45c981f526f62e8c47d936a679-memes-br-tim-beta.jpg"/>
      </div>

      <div className="card">
        <Titulo title="Joelma"/>
        <Paragrafo>Texto2</Paragrafo>
        <Imagem link="https://img.ibxk.com.br/2019/12/11/11162816745269.jpg"/>
      </div>

      <div className="card">
        <Titulo title="Regina"/>
        <Paragrafo>Texto3</Paragrafo>
        <Imagem link="https://pbs.twimg.com/profile_images/1398328513980153860/esvptsnl_400x400.jpg"/>
      </div>

      <div className="card">
        <Titulo title="Drama"/>
        <Paragrafo>Texto4</Paragrafo>
        <Imagem link="https://2.bp.blogspot.com/-2D4L7sKDbC4/Vt2_j1wWxgI/AAAAAAAAAfI/R4liNaN-rMY/s1600/charge%2B1.jpg"/>
      </div>

      <div className="card">
        <Titulo title="Natasha"/>
        <Paragrafo>Texto5</Paragrafo>
        <Imagem link="https://pbs.twimg.com/profile_images/1360153609288228868/fBEd6p0R_400x400.jpg"/>
      </div>
    </>
  )
}

export default Cards