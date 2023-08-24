import { useState } from 'react'
import './App.css'

const SimpleColor = () => {
  const [color, setColor] = useState("white");

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

  const handleColorChange = () => {
    let randomNumber = Math.floor(Math.random() * colors.length)
    setColor(colors[randomNumber]);
    document.body.style.backgroundColor = colors[randomNumber]
  }

  return (
    <main>
      <h2>
        Background Color: {color} 
      </h2>      
      <div className="card">
        <button onClick={handleColorChange}>
          Change Color
        </button>
      </div>
    </main>
  );
}

const HexColor = () => {
  const [color, setColor] = useState("#fff");
  const handleColorChange = () => {
    let charArr = "0123456789ABCDEF".split("");
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
      let randomChar = charArr[Math.floor(Math.random() * charArr.length)];
      hexColor += randomChar
    }
    setColor(hexColor);
    document.body.style.backgroundColor = hexColor;
  }

  return (
    <main>
      <h2>
        Background Color: {color} 
      </h2>      
      <div className="card">
        <button onClick={handleColorChange}>
          Change color
        </button>
      </div>
    </main>
  );
}

function App() {
  const [isSimpleColor, setIsSimpleColor] = useState(true)

  const handleIsSimpleColor = () => {
    document.body.style.backgroundColor = "white"
    setIsSimpleColor(true)
  }
  const handleIsHexColor = () => {
    document.body.style.backgroundColor = "#fff"
    setIsSimpleColor(false)
  }
  
  return (
    <>
      <nav className='nav'>
        <div className="wrap">
          <h1>Color Flipper</h1>
          <ul className='list-wrap'>
            <li><a href="#" className='simple-color' onClick={handleIsSimpleColor}> Simple </a></li>
            <li><a href="#" className='hex-color' onClick={handleIsHexColor}> Hex </a></li>
          </ul>
        </div>
      </nav>

      {
        isSimpleColor ? 
        ( <SimpleColor /> ) :
        ( <HexColor /> )
      }

      <div>
        <p><strong>Note: See repo link below</strong> GitHub link for grading purpose. <br /> I will remove it from here after grading, kindly forgive and accept it.<br />I evetually submitted hosted link in place of repo link</p>
        <a href="https://github.com/OladokunLT/color-changer">Github Repo Link: https://github.com/OladokunLT/color-changer</a>
      </div>
    </>
  )
}

export default App
