import { useEffect, useState } from "react"
import "./Frontpage.css"
import { Tabledata } from "./Tabledata";
import axios from "axios";
export const Frontpage = () => {
    const [inputvalue, setvalue] = useState({

        fname: "",
        lname: "",
        date: "",
        age: null

    });

    // console.log(inputvalue);
    const [isedit, setedit] = useState(false);
    const [editindex, seteditindex] = useState(null);

const fetch=()=>{
    axios.get(`${process.env.REACT_APP_MYSERVER}/get`,
    )
            .then(res => setdata(res.data.data))
        .catch(Error => console.log(Error))

}
useEffect(()=>{
 fetch();
},[]);
    const Change = (e) => {

        // CalculateAge(e);
        setvalue({

            ...inputvalue,
            [e.target.name]: e.target.value,
            // age: age

        });

    }

    const Change1 = (e) => {

        CalculateAge(e);

    }

    const CalculateAge = (e) => {

        const dobdate = e.target.value;
        const dobtime = new Date(dobdate);
        const today = new Date();
        let age = today.getFullYear() - dobtime.getFullYear();
        const monthDiff = today.getMonth() - dobtime.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobtime.getDate())) {

            age--;

        }

        setvalue({

            ...inputvalue,
            [e.target.name]: e.target.value,
            age: age

        });
    }

    const [submitteddata, setdata] = useState([]);

    const Submitted = (e) => {
        e.preventDefault();

        // if (isedit) {

        //     const updatedata = [...submitteddata];
        //     updatedata[editindex] = inputvalue;
        //     // setdata(updatedata);
        //     setedit(false);
        //     seteditindex(null);

        // }


        // else {

        //     setdata([...submitteddata,
        //         inputvalue])

        // }

        // setvalue({

        //     fname: "",
        //     lname: "",
        //     date: ""

        // })

        axios.post(`${process.env.REACT_APP_MYSERVER}/login`,
            inputvalue
        )
        .then(Response =>{
            if(Response.data.code==200){
                fetch();
                console.log(Response)
            }
        } )
            .catch(Error => console.log(Error))
    }
    // console.log(inputvalue);

    const handleEdit = (index) => {

        const editto = submitteddata[index];
        setvalue(editto);
        setedit(true);
        seteditindex(index);

    }

    const handledelete = (index) => {

        const updatedata = [...submitteddata];
        updatedata.splice(index, 1);
        setdata(updatedata);

    }

    return (

        <div className="a1">

            <form onSubmit={Submitted}>

                <div>
                    <label htmlFor="fname">FirstName : </label>
                    <input type="text" name="fname" value={inputvalue.fname} onChange={Change} placeholder="FirstName..." required /></div>

                <div> <label htmlFor="lname">LastName : </label>
                    <input type="text" name="lname" value={inputvalue.lname} onChange={Change} placeholder="LastName..." required /></div>

                <div><label htmlFor="date">Date : </label>
                    <input type="date" name="date" value={inputvalue.date} onChange={Change1} required /></div>

                <div><button type="submit">Submit</button></div>

            </form>

            <Tabledata Initialdata={submitteddata} handleEdit={handleEdit} handledelete={handledelete} />

        </div>
    )
}