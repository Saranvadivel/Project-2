import { useState } from "react"
import "./Frontpage.css"
import { Tabledata } from "./Tabledata";
export const Frontpage = () => {
    const [inputvalue, setvalue] = useState({
        fname: "",
        lname: "",
        date: ""

    });

    const Change = (e) => {


        let age = CalculateAge(e);

        // const {name,value} = e.target;
        setvalue({
            ...inputvalue,
            [e.target.name]: e.target.value,
            age: age

        }

        )
    }

    const CalculateAge = (e) => {

        const dobdate = e.target.value;
        // console.log(dobdate);
        const dobtime = new Date(dobdate);
        // console.log(dobtime);
        const today = new Date();
        // console.log(today);
        let age = today.getFullYear() - dobtime.getFullYear();
        // console.log(age);
        return age;
    }

    const [submitteddata, setdata] = useState([]);
    const Submitted = (e) => {
        e.preventDefault();
        setdata([...submitteddata,
            inputvalue],
        )
        setvalue({
            fname: "",
            lname: "",
            date: ""
        })
    }
    // console.log(submitteddata);
    return (

        <div className="a1">
            <>
                <form onSubmit={Submitted}>
                    <div>
                        <label htmlFor="fname">FirstName : </label>
                        <input type="text" name="fname" value={inputvalue.fname} onChange={Change} placeholder="FirstName..." required /></div>
                    <div> <label htmlFor="lname">LastName : </label>
                        <input type="text" name="lname" value={inputvalue.lname} onChange={Change} placeholder="LastName..." required /></div>
                    <div><label htmlFor="date">Date : </label>
                        <input type="date" name="date" value={inputvalue.date} onChange={Change} required /></div>
                    <div><button type="submit">Submit</button></div>
                </form>
                <Tabledata Initialdata={submitteddata} />
            </></div>
    )
}