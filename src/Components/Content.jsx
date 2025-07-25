 import React from 'react';
import styled from 'styled-components';
 
  let headingstyle = {
        backgroundColor : 'red',
        color : 'grey',
        boxShadow : '10px 10px 3px brown'
    }

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