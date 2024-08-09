import { useState } from "react"
    export const Buttons=()=>{
        const [count,setcount]=useState(0);
        function Clickme(){
            setcount(count+1);
            console.log(count);
        }
    return(
<>
<ClickFn count={count} onClick={Clickme}/>
<ClickFn count={count} onClick={Clickme}/>
</>
    )
}
export const ClickFn=({count,onClick})=>{
    return(
        <button onClick={onClick}>Count is {count}</button>
    )
}