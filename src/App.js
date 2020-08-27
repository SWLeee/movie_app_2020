import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  // 미래에 쓰고자하는 state를 선언하는 건 필수가 아님
  state = {
    isLoading: true,
    movies: [],
  };

  /* componentDidMount에서 data를 fetch함
  API로부터 data fetching이 완료되면 "we are ready" 대신에 movie를 
  Render 하고 map을 만들고 movie를 render 하는 것임 */

  // axios가 느리기 때문에 componentDidMount에게 약간 시간이 걸릴 수 있다는 표현으로
  // 1) getMovies = () => {}

  /* 비동기 : "너는 이걸 기다려야 해"
     async await를 하는 이유 : 우리가 기본적으로 JavaScript에게 
     getMovies function에게 조금 시간이 필요하고 우리는
     그걸 기다려야만 한다는 것을 말하는 것 */

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  // 2) async 사용
  //async componentDidMount() {
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
