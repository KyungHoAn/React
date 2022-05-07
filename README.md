# React

### props
  - 컴포넌트 내부의 immutable Data
  - JSX 내부에 {this.props.propsName}
  - 컴포넌트를 사용할 때, <> 괄호 안에 propsName ="value"
  - this.props.children 은 기본적으로 갖고있는 props로서 <Cpnt여기에 있는 값이 들어간다.</Cpnt>

<html>
```
<!-- <h1>👋 Hello World!</h1> -->
<div id="root"></div>
```
  
<JS>
```
 import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class Codelab extends React.Component{
  render(){
    let text='Hi iam Codelab';
    let style={
      backgroundColor:'aqua'
    };
    
    return(
      <div style={style}>{text}</div>
      // <div>{text}</div>
    );
  }
}

class App extends React.Component{
  render(){
    return(
      <Codelab/>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root')); 
```
  
### state
  - 유동적인 데이터
  - 초기값 설정이 필수, 생성자에서 this.state={}으로 설정
