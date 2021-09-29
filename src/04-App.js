import Potato from "./Potato"
import PropType from "prop-types"

const foodLike = [
  {
    id: 1,
    name: "chicken",
    image: "https://t1.daumcdn.net/cfile/tistory/243E943A58EC695726",
    rating: "5.0"
  },

  {
    id: 2,
    name: "hamburger",
    image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRQS6z_3CiF9nQZWmgNGLRNHrDYWHtzZWHjZ2vOZ-zBSELSq9s_AxzeFlyFchDkYz1wyOt3Fzx7oysQhWruX80",
    rating: "4.5"
  }
]

// // function renderFood(dish) {
// //   return (
// //     <Food name={dish.name} picture={dish.image} />
// //   )
// // }

// const renderFood = dish => <Food name={dish.name} picture={dish.image} />

function App() {
  return (
    <div>
      {
        foodLike.map(dish => <Food
            id= {dish.id}
            name= {dish.name}
            picture= {dish.image} 
            rating= {dish.rating} 
          />)
      }
    </div>
  )
}

function Food({id, name, picture, rating}) {
  // const { name } = props
  return (
    <div>
      <h1>I like {name}.</h1>
      <img src={picture} alt={name} />
      <p>{rating}</p>
    </div>
  )
    
    
      

  
}

export default App
