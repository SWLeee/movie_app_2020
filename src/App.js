import React from "react";
import PropTypes from "prop-types";

// function App() : function component
class App extends React.Component {
  // 매번 우리가 component를 만들 때마다 모든 것을 다 구현하고 싶지 않음 => extend from한 이유
  // class react component는 function이 아니기 때문에 return을 가지고 있지 않음
  /* class component와 function component의 차이 
     - Function component : function이고 뭔가를 return하며 screen에 표시됨
     - Class component : class이고 react component로 부터 확장되며 screen에 표시됨 
                        render method 안에 넣어야만 함
  */
  // react는 자동적으로 모든 class component의 render method를 실행하고자 함
  // class component를 이야기 하는 이유는 class component가 가진 우리가 원하는 state 때문임
  // state는 object! component의 data를 넣을 공간이 있고 이 데이터는 변함!
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  // react 코드가 아니고 JavaScript코드임!
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        {/* class 이기 때문에 this.state.count라고 함 
            component의 데이터를 바꾸기 위해서
        */}

        <button onClick={this.add}>Add</button>
        {/* JavaScript에서는 다른 onClick이나 eventListener을 등록해야 하지만
        react에서는 자동적으로 주어진 onClick을 가지고 있음 */}
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
