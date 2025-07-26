//import { useState } from 'react'
<<<<<<< HEAD

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

=======
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Content from './Components/Content'


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





>>>>>>> a08713e (second commits)
export default App
