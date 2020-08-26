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

  // "절대 state를 직접 변경하지 말 것!"
  // => 우리가 setState function을 호출하면 react는 매우 똑똑하기 때문에 우리가 언제
  // setState를 호출할지를 알고 또한 우리가 view를 refresh 하길 원하는 걸 알며
  // render function을 refresh하길 원하는 걸 앎
  // 우리는 우리의 state를 바꾸고 싶지만 또한 react가 어떤 것이든 refresh 해주길 원함
  add = () => {
    // this.state.count = 1; // react는 render function을 refresh하지 않기 때문
    // => 매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원한다는 의미

    // this.setState({ count: this.state.count + 1 }); // 그닥 좋은 방법이 아님!

    this.setState((current) => ({ count: current.count + 1 })); // state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법)
    // setState : 새로운 State를 취해야 함
    // state는 object! => setState는 새로운 state를 받아야 함
    // 만약 우리가 setState를 호출하면 react는 state를 refresh 하고
    // 또한 render function을 호출할 것임
    // setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않을 것임!

    // 우리는 virtual DOM을 가지고 있기 때문에 react는 매우 빠르게 변경할 수 있고
    // 깜박거리지도 않음

    // 우리가 하고 싶은 건 현재 state를 얻고 싶음. react가 우리에게 줄 것임
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
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
