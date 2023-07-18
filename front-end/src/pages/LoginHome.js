import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "../css/LoginHome.css";
import loginhome from '../images/loginhome.jpg';
import Swal from 'sweetalert2'
function LoginHome() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
   loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/getsignup")
    setUsers(result.data);
  }
  const deleteUser = async(id)=>{ Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
    }
    loadUsers();
})
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/deletesignup/${id}`).then((response) => {
        console.log(response);
    })
}
  return (
    <div>
      
      <table className="table">
      <img src={loginhome} className='loginhome' alt="logo"/>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Confirm password</th>
      <th scope="col">Actions</th>
    </tr>

  </thead>
  <tbody>
    {users.map((user,index) => (
      <tr>
     <th scope="row" key={index}>
      {index+1}
     </th>
     <td>{user.id}</td>
     <td>{user.email}</td>
     <td>{user.password}</td>
     <td>{user.mobile_Number}</td>
     <td>{user.confirm_password}</td>

      <Link to={`/viewuser/${user.id}`} ><button className="lviewuser">
         View
       </button></Link>
     <td>
      <Link
     to={`/edituser/${user.id}`}>
     <button className="ledit">Edit</button></Link></td>


     <td><button className='ldelete'
     onClick={()=>deleteUser(user.id)}
     >Delete</button></td>
      </tr>

    ))}
    
  
  </tbody>
</table>
<Link to="/adduser"><button className='ladduser'>Add User</button></Link>

    </div>
   
  )
}

export default LoginHome