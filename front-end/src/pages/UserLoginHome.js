import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import "../css/LoginHome.css";
import loginhome from '../images/loginhome.jpg';

function UserLoginHome() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
   loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/getlogin")
    setUsers(result.data);
  }

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/deletelogin/${id}`)
    loadUsers()
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
    
      <Link to={`/viewuser/${user.id}`} ><button className="lviewuser">
         View
       </button></Link>

      </tr>

    ))}
    
  
  </tbody>
</table>

    </div>
   
  )
}

export default UserLoginHome