import React from 'react';

function App() {
  const name = 'react';
  const style ={
    //background-color is backgroundColor와 같이 - 가 사라지고 카멜 표기법으로 적성된다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWidth: 'bold',
    padding: 16
  };
  return <div style={style} >{name}</div>
}

export default App;
