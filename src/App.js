import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // 미래에 쓰고자하는 state를 선언하는 건 필수가 아님
  state = {
    isLoading: true,
    movie: [],
  };

  /* componentDidMount에서 data를 fetch함
  API로부터 data fetching이 완료되면 "we are ready" 대신에 movie를 
  Render 하고 map을 만들고 movie를 render 하는 것임 */
  componentDidMount() {
    setTimeout(() => {
      // setState를 사용할 때 state 안에 default 값들을 선언할 필요는 없음
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
