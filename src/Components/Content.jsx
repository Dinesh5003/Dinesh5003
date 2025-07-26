
 import React from 'react';
import styled from 'styled-components';
 



let headingstyle = {
 
        backgroundColor : 'red',
        color : 'grey',
        boxShadow : '10px 10px 3px brown'
    }


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

