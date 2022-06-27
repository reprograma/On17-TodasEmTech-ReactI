function Relogio(){
  const horario = new Date().toLocaleTimeString()
  
  return (
    <h2>{horario}</h2>
  )
}

export default Relogio