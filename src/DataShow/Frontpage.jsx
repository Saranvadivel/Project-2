import { useState } from "react"
import "./Frontpage.css"
import { Tabledata } from "./Tabledata";
export const Frontpage = () => {
    const [inputvalue, setvalue] = useState({

        fname: "",
        lname: "",
        date: "",
        age:null

    });
    

    const [isedit, setedit] = useState(false);
    const [editindex, seteditindex] = useState(null);

    const Change = (e) => {

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

        if (isedit) {

            const updatedata = submitteddata;
            updatedata[editindex] = inputvalue;
            setdata(updatedata);
            setedit(false);
            seteditindex(null);

        }

        else {

            setdata([...submitteddata,
                inputvalue])
        }

        setvalue({

            fname: "",
            lname: "",
            date: ""

        })

    }

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
                    <input type="date" name="date" value={inputvalue.date} onChange={Change} required /></div>

                <div><button type="submit">Submit</button></div>

            </form>

            <Tabledata Initialdata={submitteddata} handleEdit={handleEdit} handledelete={handledelete} />

        </div>
    )
}