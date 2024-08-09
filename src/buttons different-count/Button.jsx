import { useEffect, useState } from "react"

export const Button=()=>{
    return(
<>
<ClickFn/>
<ClickFn/>
</>
    )
}
export const ClickFn=()=>{
    const [count,setcount]=useState(0);
    function Clickme(){
        setcount(count+1);
    }
    return(
        <button onClick={Clickme}>Count is {count}</button>
    )
}