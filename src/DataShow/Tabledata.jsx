export const Tabledata = ({ Initialdata,handleEdit,handledelete }) => {
  const Fun = (index) => {
    handledelete(index);
  }
  const Del=(index)=>{
    handleEdit(index);
  }
  return (
    <div className="a2">
      <table>
        <thead>
          <tr>
            <th>Fname</th>
            <th>Lname</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Initialdata.map((item, index) => (
            <tr key={index}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.date}</td>
              <td>{item.age}</td>
              <td><button onClick={() => Del(index)}>Update</button></td>
              <td><button onClick={() => Fun(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
