function Uppercase(props) {
  const textoInserido = props.text
  const textoFormatado = textoInserido.toUpperCase()

  return(
    <p>{textoFormatado}</p>
  )
}
export default Uppercase

