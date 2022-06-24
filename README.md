# On17 - ReactJS | Aula 01
![image](https://media.giphy.com/media/3o7btUrUUiljkVzDBS/giphy.gif)

## Recebam minhas boas vindas!

✅ Chamada

✅ Acordos

✅ Apresentação das monitoras

<br>
<br>

______

## Prazer, Simara!

<img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

- Ex-aluna reprograma, fiz migração de carreira após os 30 anos e vindo de uma área diferente
- Desenvolvedora de software na Thoughtworks 
- Criadora do podcast e canal quero ser dev 
- LinkedIn Creator
- #50HackersToFollow pela Gama Academy 
- Professora de programação para pessoas iniciantes em instituições que ajudam a reduzir o gap de gênero e de raça no mercado de tecnologia(reprograma, pretaLab, Movimento Black Money e outras)

<br>
<br>


---

# 🚀 Vambora pra o conteúdo?

> ⚠️ Após essa aula você estará preparada com a base conceitual para realização de um projeto utilizando ReactJS. O objetivo específico da aula é facilitar  o entendimento dos pilares do ReactJS (state, componentes e props) e ser capaz de criar uma aplicação em React do zero. 



| `Conteúdos da aula:`                     |  |
| --------------------------- | ------------------ |
| O que é e quem usa react?             
| Preparando o ambiente e "Olá, Mundo!"
| Componentes
| Props



# 🧠 Visão geral: O que é e quem usa react?  

Já imaginou se você pudesse aprender a programar com a tecnologia que o Facebook, Instagram, WhatsApp, Twitter, Netflix, Airbnb, Notion, Trello, Tiktok e muitas outras gigantes usam? O que mudaria de possibilidades e oportunidades para sua carreira? Já parou pra refletir sobre isso?

Pois bem, react é uma biblioteca JavaScript usada para criar interfaces para pessoas usuárias.

Já quero abrir um parenteses aqui pra explicar que bibliotecas são conjuntos de funcionalidades criadas por outras pessoas desenvolvedoras que passaram por grandes problemas, criaram soluções e resolveram deixar a solução disponível em pacotes para que outras pessoas possam usar. Boazinhas, né? Eu amooo!rs

E que interfaces de usuários são aquelas telas lindas e cheias de funções que as pessoas usuárias podem interagir. No Instagram por exemplo: a tela de login, o feed onde os posts aparecem, o explorar, os stories, cada pequeno botão de curtir, compartilhar, comentar enfim.

Sim, react e á uma das tecnologias que essas empresas que eu falei e muitas outras do Brasil e do mundo usam. Eu mesma trabalho com essa tecnologia dentro da Thoughtworks. :)

A grande vantagem é que trabalhar com React torna a vida da pessoa desenvolvedora mais fácil, pois a gente consegue criar soluções complexas de uma maneira mais simples e em menos tempo.

Além disso tudo, é importante saber também que com React é possível criar SPA. Um acrônimo para Single Page Application que é uma única página web com super poderes para lidar com diferentes dados a partir das interações das pessoas usuárias.

Na prática, quando alguém clica num botão para abrir uma página nova, o que acontece por debaixo dos panos é a atualização de uma pequena parte de nossa única tela, em vez de atualizar a página inteira para mostrar o esperado.

Eu sei que ainda tá muito abstrato pra visualizar, mas daqui a pouquinho vai fazer mais sentido. Confia em mim e vamos que vamos!

`Acesse a documentação oficial`: [ReactJS](https://pt-br.reactjs.org/)          

<br>

# 😎 Preparando o ambiente e "Olá, Mundo!"

Criando e entendendo meu primeiro projeto reactjs, render, estrutura de pastas, apagando arquivos padrão)

Eu sou uma pessoa supersticiosa e me contaram que toda vez que a gente está aprendendo alguma tecnologia nova, dá sorte começar com um hello world! Então vamos nessa! rs

Para essas aulas, vamos usar o editor de códido, vs code. No meu computador eu tenho também o NodeJS instalado na versão LTS e também o gerenciador de pacotes npm.

Como saber se tenho o node instalado? Abra um terminal e digite o comando abaixo:

``node -v``

Seu retorno positivo será um número parecido com esse, que é a versão correspondente: v14.17.0

Se seu retorno não for do modo acima, é porque você ainda não tem, acesse o link abaixo para instalar.

Node: https://nodejs.org/en/

Depois de instalar, rode o comando novamente e tenha certeza que instalou direitinho.

Agora sim, vamos ao nosso hello world em React.


# Criando seu primeiro projeto React com vite 

O que é e como usar vite:

`- Acesse a documentação oficial`: [Vite](https://vitejs.dev/guide/)    

`- Acesse um fio que fiz no twitter`: [Twitter da profa](https://twitter.com/SimaraConceicao/status/1529800875144781825?s=20&t=2KZjH-NL3eMEORI166W79w)  

`- Acesse um reels que fiz no instagram`: [Insta da profa](https://www.instagram.com/reel/CeBTbEoDUTM/)  

`- Siga o passo a passo aqui embaixo`
1) Lembra que eu falei que react é uma biblioteca e que a gente pode acessar e usar? Vamos fazer isso, no terminal rode o comando abaixo. Ele vai criar uma pasta contendo algumas outras pastas e arquivos dentro. Não se assuste! Demora um pouco até ficar pronto, rs.
      
``npm create vite@latest nome-do-app --template react``

Terminou e deu tudo certo, quando aparecer no terminal: ``Done. now run!``

2) Ainda no terminal, ele nos dá uma sugestão de entrar na pasta de nosso projeto ``cd nome-do-app``

Baixar as dependências com ``npm install``

Depois rodar com ``npm run dev``

Vamos fazer isso! 

3) Ele irá abrir um navegador sozinho usando a porta localhost:3000 e é lá que você consegue ter uma prévia de como sua página está ficando.

4) Perceba que ele rodou uma págima pronta! A gente só precisou rodar alguns pequenos comandos no terminal, certo? 

Vamos trocar esse conteúdo pelo nosso hello world. 

Vá até src > App.jsx 

 - Apague a div e tudo que está dentro dela e escreva no lugar <h1>Hello, World!</h1> 
 - Salve e volte para o navegador! 
 - Uhullllll, agora vamos começar com tudooo a entender todas essas pastas, arquivos e como estamos escrevendo num arquivo javascript/JSX e fazendo aparecer no html. <3

5) Entenda as pastas e arquivos
> node_modules

> index.html

> .gitignore

> package.json

> package-lock.json

> vite.config.js

> src
  >> app.jsx
  >> main.jsx
  >> outros arquivos que não nos interessam agora


# ❤️ Componentes


Em react tudo é componente!
Pequenas partes onde podemos encapsular/guardar códigos e reutilizar sempre que necessário.

Se liga aqui no Instagram. Deve existir lá no código deles um componente chamado perfil. Olha como todos são exatamente iguais. 
tem o nome, a imagem, a quantidade de seguidores, seguindo, publicações, a Bio. Só o conteúdo muda de uma usuária pra outra, certo?

Se alguma funcionalidade muda, então fica muito mais fácil fazer uma manutenção, você sabe exatamente onde o código vai estar. Basta ir no componente e mudar onde a lógica está encapsulada.

Vamos aprender a criar um componente react.

Existem duas formas de criar componentes: classes e funcões.

Aqui, vamos focar somente em funções, pois em 2018 o time que criou o react introduziu uma forma de 
resolver problemas onde antes somente componentes com classes poderiam fazer. 

Eu chamo isso de React moderninho! haha
Você vai curtir, mas na próxima aula!

Um componente é justamente uma função que retorna um HTML. e quando temos javascript misturado com html chamamos de jsx. 

Vamos à prática:
Crio um arquivo com extensão jsx ou js iniciando o nome com letra maiuscula.

Dentro do arquivo crio e exporto uma função. Que poderei importar e usar em qualquer outro componente no meu projeto.

```
function SayHello() {
  return(
    <h1>Hello</h1>
  )
}

export default SayHello
```

```
function Title() {
  return(
    <h1>Eu sou um título lindão</h1>
  )
}

export default Title
```


| Exemplo | Descrição |
| --- | --- |
| `Relogio` |  Vamos criar um componente que retorna nosso horário local|

# Props

Lembra do componente de perfil que a gente tá supondo que o instagram deve ter?
Como será que eles fazem pra mudar os conteúdos sempre que identificam que estamos mudando de perfil ao acessar?

Uma das soluções para fazer isso seria usando as props, ou propriedades.
Vamos à prática.
Temos o componente Title que para cada página esse título irá mudar. A gente não precisa criar um h1 toda vez e criar todo estilo novamente. Vamos encapsular em um componente e permitir que por props ele receba conteúdos diferentes para o mesmo componente.

```
function Title(props) {
  return(
    <h1>{props.text}</h1>
  )
}

export default Title
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Title"

function App() {
  return(
    <div>
      <Title text="Home"/>
    </div>
  )
}
```

Dentro das props também existem o children e basicamnete em vez de usar dentro de atributos em tags de autofechamento usaríamos como conteúdo em componentes de fechamento e de abertura. Assim:

```
function Name(props) {
  return(
    <p>{props.children}</p>
  )
}

export default Name
```
Ao usar esse componente, por exemplo no App.js ficaria dessa forma:

```
import Title from "caminho para o arquivo Name"

function App() {
  return(
    <div>
      <Name>Simara Conceição</Name>
    </div>
  )
}
```


**Exercícios:**

| Exemplo | Descrição |
| --- | --- |
| `UpperCase` |  Agora vamos criar um componente UpperCase que transforma em CapsLock qualquer texto passado por props. |

| Exemplo | Descrição |
| --- | --- |
| `LowerCase` |  Agora vamos criar um componente LowerCase que transforma em minúsculo qualquer texto passado por props.|


# Vamos praticar mais um pouco

### `Mais exercícios pra sala`  

| Exemplo | Descrição |
| --- | --- |
| `Hello, Reprograma` |  Agora vamos criar um componente de título que deverá receber o conteúdo via props quando ele for usado. Usar o conteúdo 3x no App.jsx com os textos: `Hello Reprograma`, `Hello React`, `Hello World` |

| Exemplo | Descrição |
| --- | --- |
| `Imagem` |  Vamos aprender como trabalhar com imagens, criando um componente que recebe um nome e uma imagem. E depois renderizar na tela esse card.|

| Exemplo | Descrição |
| --- | --- |
| `Imagem props` |  Vamos aprender a criar um componente imagem que recebe o src por props. |

| Exemplo | Descrição |
| --- | --- |
| `Página` |  Vamos criar um componente página que recebe outros pequenos componentes|


### `Entregavel da semana` 
Vamos criar um projetinho react do zero com direito a componetização e uso de props.

O Projetinho será: "Meu diário da reprograma"

Faça uma sessão se apresentando.

Escolha 4 temas que aprendeu na reprograma para falar sobre em outra sessão. 

`- Eu fiz o meu, vem aqui entender melhor e se inspirar`: [Meu diário da reprograma](exemplo-diario.netlify.app) 

> Passo a passo:
1) Crie um projeto react com vite
2) Apague as informações default
3) Crie um componente Title que recebe o título por props ou children
3) Crie um componente Text que recebe o paragrafo por props ou children
3) Crie um componente Image que recebe o src por props ou children
4) Import no App.jsx os componentes criados para montar o seu diário, perceba os erros/warnings que o terminal/console mostra, resolva e faça todos os componentes renderizar na tela 
5) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou nesta primeira aula. E suba no classroom.
6) Tente fazer em tempo hábil pra aproveitar a aula de quinta e as monitorias pra tirar dúvidas.
7) Arraseee! E qualquer coisa, me chama!

---

_Foi incrível iniciar essa jornada com você! Qualquer dúvida ou sugestão, chama no contatinho!_

### Vamos nos conectar!

- [youtube](https://www.youtube.com/queroserdev)
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)

<br>
Feito com 💜 por Simara Conceição
