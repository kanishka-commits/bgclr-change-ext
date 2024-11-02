import { useState } from 'react'
import logo from './Icon.png'

import './App.css'

function App() {
  const [color,setColor]= useState(document.body.style.backgroundColor)

 const onclick = async () => {
  let [tab]= await chrome.tabs.query({active: true});
 //"'await' expressions are only allowed within async functions", thus we use async func
  chrome.scripting.executeScript<string[],void>({
    target: {tabId: tab.id!},
    args:[color],
    func: (color) => {
      document.body.style.backgroundColor = color;
    }
  })

 
} 
  return (
    <>
      <div>
        <img src={logo} className="logo react" alt="React logo" />
        
      </div>
      <h1>Kanishka's Extension</h1>
      <div className="card">
        <input type="color" onChange={(e)=>setColor(e.currentTarget.value)}></input>
        <br></br>
        <button onClick={onclick}>
          Set the color
        </button>
        
      </div>
  
    </>
  )
}

export default App


