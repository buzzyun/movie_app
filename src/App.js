import React from 'react';

function Food(props){

  return (
    <h3>I Like {props.favorite}</h3>
  );

}

function App() {
  return (
    <div >
      <h1>Hello!!</h1>   
      <Food favorite = "kimchi"/>   
      <Food favorite = "chicken"/>
      <Food favorite = "buger"/>
    </div>    
  );
}

export default App;
