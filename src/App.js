import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  },
];

// function renderFood(dish) {
//   //console.log(dish);
//   return <Food name={dish.name} picture={dish.image} />;
// }

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>;
      <img src={picture} alt={name} />
      {
        // image element는 alt prop이 반드시 있어야 한다고 함
        // 시각 장애인들을 위한 것. 이런 종류의 중요한 정보를 create-react-app이
        // 제공해주고 있음
      }
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {
        foodILike.map((dish) => (
          <Food key={dish.id} name={dish.name} picture={dish.image} />
          // key prop는 사용하지 않기 때문에 Food로 전달되지 않음
          // 단지 react 내부에서 사용하기 위한 것
        ))
        /* {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)} */
      }
    </div>
  );
}

export default App;
