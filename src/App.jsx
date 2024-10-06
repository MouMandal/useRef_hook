
import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputvalue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  })

  function buttonClick(e) {
    setInputvalue(e.target.value);
  }

  return (
    <>
      <input type='text' value={inputValue} onChange={buttonClick} />
      <h1>Render Count: {count.current}</h1>
    </>
  )
}

export default App
