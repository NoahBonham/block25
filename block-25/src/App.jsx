import { useState } from 'react'
import './App.css'
import Dog from './components/dog'

function App() {
  const [favDog, setFavDog] = useState(null)
  console.log(favDog);
  
  return (
    <>
    <h1>Props Demo</h1>

{favDog && <h3>{favDog} is my favorite dog.</h3>}

    <Dog dogname="Logan" breed="itaian greyhound" age={13} setFavDog={setFavDog} />
    <Dog dogname="Henny" breed="choclate lab" age={3} setFavDog={setFavDog} />
    <Dog dogname="Hershey" breed="pointer pitbull" age={8} setFavDog={setFavDog} />

    </>
  )
}

export default App