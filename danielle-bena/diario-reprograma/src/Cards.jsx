import Titulo from "./Tiulo";
import Img from "./Img";
import Paragrafo from "./Paragrafo";

function Card({ src, titulo, text }) {
  return (
    <div>
      <Titulo texto={titulo} />
      <Img src={src} />
      <Paragrafo textoP={text} />
    </div>
  );
}

export default Card;