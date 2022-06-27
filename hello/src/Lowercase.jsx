function Lowercase(props) {
  const textoInserido = props.text
  const textoFormatado = textoInserido.toLowerCase()

  return(
    <p>{textoFormatado}</p>
  )
}

export default Lowercase