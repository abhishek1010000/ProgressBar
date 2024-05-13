import { useEffect, useState } from "react";
import "./ProgressBar.css"

function ProgressBar( {value} ){
    const [percent, setPercent] = useState(0)
    const [msg, setMsg] = useState("")
    useEffect(()=>{
        if(percent < 100){
            setTimeout(()=>{
                setPercent(percent+1)
                setMsg("Loading...")
            },50)
        }else{
            setMsg("Complete!")
        }
    },[percent])
    return (
        <>
          <div>
            <div className="bar" style={{width:`${percent}%`}}>{percent}%</div>
            <p>{msg}</p>
          </div>
        </>
    )
}

export default ProgressBar;
