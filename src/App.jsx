//import { useState } from 'react'


//import viteLogo from '/vite.svg'
import './App.css'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'


function App() {

  //let user = 'Kesava'
  return(
    <div className='app'>
      <Header/>
      <Content/>
      <Footer User = 'muruga'/>
   </div>
  )
  

}






export default App
