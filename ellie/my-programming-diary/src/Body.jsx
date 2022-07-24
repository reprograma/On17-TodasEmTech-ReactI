import "./App.css";
import Bio from "./Bio";
import Card from "./Card";

function App() {
  return (
    <>
      <div>
        <Bio />
      </div>
      <div className="conteudo">
        <Card
          src="https://stepstone-challenge.digital/pt/wp-content/uploads/game-news/454645979.jpg"
          titulo="Git"
          text="O Git é um sistema para controlar versão de códigos e é usado pela grande maioria das pessoas desenvolvedoras atualmente. Isso significa dizer que usando o git a gente pode esquecer o medo de perder alguma alteração que a gente fez no nosso código. Ou se a gente precisar trabalhar em equipe fica super fácil de identificar quem mexeu em cada linha de código ou como resolver conflitos se as pessoas mexerem nas mesmas linhas."
        />
        <Card
          src="https://dfg.ai/itemimages/982856675-conta-yoimiya-ar10-genshin-impact-B6SK.jpg"
          titulo="Html"
          text="HTML é uma abreviação de Hyper Text Markup Language (linguagem de marcação em hipertexto). Ou seja, não se trata de uma linguagem de programação, pois não tem lógica (algoritmos, processos etc). Ele cria a estrutura de uma página ou aplicação web, determinando a separação de layout e conteúdo."
        />
        <Card
          src="https://trecobox.com.br/wp-content/uploads/2022/06/genshin-impact-trailer-kuki-shinobu.jpg"
          titulo="CSS"
          text="CSS é abreviação de Cascading Style Sheet (folha de estilos em cascata). É a linguagem que define estilos para o HTML, portanto, não se trata de linguagem de programação. CSS tem 'cascata' no nome, devido a sua forma de determinar a propriedade de um elemento - levando em consideração hierarquia de seletores e de chamadas de estilo (inline, internal e external). Para fazer o link de um arquivo .css em um documento .html, devemos inserir a tag no do documento, com o href do caminho do arquivo."
        />
        <Card
          src="https://volsiz.ru/wp-content/uploads/2022/02/yae-mikos-birthday-lore-and-age-in-genshin-impact_62043454dfbba.jpeg"
          titulo="Java"
          text="Segundo o livro Estrutura de dados e algoritmos com javascript, de Loiane Groner: Javascript é uma das linguagens de programação mais populares atualmente, é conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo, sem a instalação de qualquer plugin. Praticamente todos os sites e aplicações web usam javascript, até outras ferramentas que são usadas para web, no fim das contas vão precisar transformar o código em javascript para que o navegador entenda."
        />
      </div>
    </>
  );
}

export default App;
