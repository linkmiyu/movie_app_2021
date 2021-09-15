const foodLik = [
  {
    name: "chicken",
    image: "https://t1.daumcdn.net/cfile/tistory/243E943A58EC695726"
  },
  {
    name: "hamburger",
    image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRQS6z_3CiF9nQZWmgNGLRNHrDYWHtzZWHjZ2vOZ-zBSELSq9s_AxzeFlyFchDkYz1wyOt3Fzx7oysQhWruX80"
  }
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav= "kimch" />
    </div>
  )
}

function Food(props) {
  const { fav } = props
  return <h1>I like {fav}.</h1>
}

export default App
