import axios from "axios";
import { useEffect } from "react"

export const Axious=()=>{
    useEffect(()=>
        {
            axios
            .post(`${process.env.REACT_APP_MYSERVER}/api/login/postmethod`,{
                name:"Sara",
                age:21
            })

            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
        },[])
    return(
        <p>axios </p>
    )
    
}