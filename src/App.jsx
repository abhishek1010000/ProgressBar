import { useState, useEffect } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'

function App() {
  const [progress, setprogress] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setprogress(progress+1);
    },100)
  },[])

  return (
    <>
      <div>
        <div>
          <h1>Progress Bar</h1>
          <div>
            <div>
            <ProgressBar></ProgressBar>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
