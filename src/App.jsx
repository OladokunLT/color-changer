import { useState } from 'react'
import './App.css'
const colors = [
  'red', 'blue', 'orange', 'purple',
  'green', 'yellow', 'brown', 'pink',
  'tomato', 'indigo', `AliceBlue`,
  `AntiqueWhite`,
  `Aqua`,
  `Aquamarine`,
  `Azure`,
  `Beige`,
  `Bisque`,
  `Black`,
  `BlanchedAlmond`,
  `Blue`,
  `BlueViolet`,
  `Brown`,
  `BurlyWood`,
  `CadetBlue`,
  `Chartreuse`,
  `Chocolate`,
  `Coral`,
  `CornflowerBlue`,
  `Cornsilk`,
  `Crimson`,
  `Cyan`,
  `DarkBlue`,
  `DarkCyan`,
];

function App() {
  const [count, setCount] = useState(0);
  // const [like, setLike] = useState(1);
  // const handleLike = () => setLike(like + 1);
  const [color, setColor] = useState("red");
  
  
  let bgColor = document.body
  const handleCount = () => setCount(count + 1);
  const handleColorChange = () => {
    let randomNumber = Math.floor(Math.random() * colors.length)
    setColor(colors[randomNumber]);
    bgColor.style.backgroundColor = colors[randomNumber]
  }
  return (
    <>
      <h1>Vite + React</h1>
      <h2 >Named color</h2>
      <h2>Hex color</h2>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      {/* <div className="card">
        <button onClick={handleLike}>
          like is {like}
        </button>
      </div> */}
      <div className="card">
        <button onClick={handleColorChange}>
          click to change color
        </button>
      </div>
      <p className="">
        {color} {count}
      </p>
    </>
  )
}

export default App
