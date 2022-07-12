import Title from './components/Title'
import Text from './components/Text'
import Image from './components/Image'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Title title="My Programming Diary"/>
      <Text text="Hoje aprendi React!"/>
      <Image url="https://http.cat/200"/>
    </div>
  )
}

export default App
