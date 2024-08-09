import { useState } from "react"

export const Tabledata=({Initialdata})=>{

    const [data, setData] = useState(Initialdata);

    const Deletedata = (index) => {
        const newData = [...Initialdata];
        newData.splice(index, 1);
        setData(newData);
        console.log(newData);
        
    };

    return(
        <div className="a2">
        <table>
            <thead>
                <tr>
                    <th>Fname</th>
                    <th>lname</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {Initialdata.map((item,index)=>(
            <tr key={index}>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.date}</td>
            <td>{item.age}</td>
            {/* <td><button onClick={()=>Handleupdate(index)}>Update</button></td> */}
            <td><button onClick={()=>Deletedata(index)}>Delete</button></td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}