import { useState } from 'react'
import './App.css'

const LoreIpsum = () => {
  return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, mollitia laboriosam maiores rem explicabo omnis voluptate ab. Natus quae nihil quasi nam autem repudiandae minus?</p>
}
const TituloLore = () => {
  return <h2>Titulo Loreipsum</h2>
}

function App() {
  return (
    <div>
      <TituloLore />
      <LoreIpsum/>
    </div>
  )
}

export default App
