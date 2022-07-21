import './Projetos.css'

function Projetos (props) {
    return (
        <div className="div-projetos">
    <h1>O que aprendi no Reprograma {props.project}</h1>
    <h2>Git e Github</h2>
    <h2>HTML e CSS</h2>
    <h2>Javascript</h2>
    <h2>React</h2>
    </div>        
    )
}

export default Projetos