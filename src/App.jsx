//import { useState } from 'react'

//import viteLogo from '/vite.svg'
import './App.css'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

    let User = 'Kesavan'
    return(
        <>
           <Header User = {User}/>
           <Content></Content>
           <Footer User = 'Murugesan'></Footer>
        </>
    )
    
}

export default App
