<<<<<<< HEAD
 import React from 'react';
import styled from 'styled-components';
 
  let headingstyle = {
=======
import React from 'react';
import styled from 'styled-components';


let headingstyle = {
>>>>>>> a08713e (second commits)
        backgroundColor : 'red',
        color : 'grey',
        boxShadow : '10px 10px 3px brown'
    }

<<<<<<< HEAD
  let Button = styled.button`
 background-color: blue;
 color: white;
 height:60px;
 width: 100px;
`

let NewButton = styled.button`
background-color: green;
box-shadow : 10px 10px 10px black;
`


 const Content = () => {

  
 
   return (
     <main>
        <h1 style={headingstyle}>Main Content</h1>
        <Button> Click me! </Button>
        <br/><br/>
        <NewButton> Duplicate </NewButton>
        
     </main>
   );
 };
 
 export default Content;
=======
let Button = styled.button`
    background-color : lightblue;
    color: black;
    height : 60px;
    width : 100px;
`

let NewButton = styled(Button)`
    background-color : red;
    color: 'black';
`

function printsomething(e){
    console.log( e.target.innerText);
    console.log('hello');
}
function printsomething1(event){
    console.log(event.target.innerText);
    console.log('hello world');
    
    
}

const Content = () => {
  return (
    <main>
        <h1 style = {headingstyle}>Main content</h1>
        <Button onClick={printsomething}> Click me! </Button>
        <NewButton onClick={ (e) =>{printsomething1(e)} }>Reject</NewButton>
    </main>
  )
}

export default Content
>>>>>>> a08713e (second commits)
