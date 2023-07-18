import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import carthome from "../images/carthome.jpg"
import "../css/CartHome.css";
function UserCartHome() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
   loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/getcart")
    setUsers(result.data);
  }

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/deletecart/${id}`)
    loadUsers()
  }

  return (
    <div>
      
      <table className="table">
       <img src={carthome} className='carthome' alt="logo"/> 
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Cost</th>
      <th scope="col">Product Quantity</th>
      <th scope="col">View</th>
    </tr>

  </thead>
  <tbody>
    {users.map((user,index) => (
      <tr>
     <th scope="row" key={index}>
      {/* {index} */}
     </th>
     <td>{user.id}</td>
     <img src={user.url} className='cimg'></img>
     <td>{user.productname}</td>
     <td>{user.product_cost}</td>
     <td>{user.productquantity}</td>

      <Link to={`/cartview/${user.id}`} ><button className="cviewuser">
         View
       </button></Link>
      </tr>

    ))}
    
  
  </tbody>
</table>
    </div>
   
  )
}

export default UserCartHome