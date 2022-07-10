import './App.css'
import Repositorio from './componentes/Repositorio'
import Apresentação from './componentes/apresentacao'
import Projetos from './componentes/Projetos'
import Cabecalho from './componentes/cabecalho'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho />
        <div className='meus-projetos'>
            <Projetos project="Projeto 1" />
            <Projetos project="Projeto 2"/>
            <Projetos project="Projeto 3"/>
            <Projetos project="Projeto 4"/>
        </div>
              <div className='Apresentacao'>
              <Apresentação />
              </div>

              <div className='Projetos'>
              <Repositorio />
              </div>

      </header>
    </div>
  )
}

export default App
