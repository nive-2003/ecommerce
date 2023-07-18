import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import "../css/DetailsHome.css"
import Swal from 'sweetalert2'
import detailhome from "../images/detailshome.jpg"
export default function Home() {

    const [users,setUsers] = useState([]);

    const {id}=useParams()

    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers=async()=>{
        
        const result = await axios.get("http://localhost:8080/getdetails")
        setUsers(result.data)
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
      axios.delete(`http://localhost:8080/deletedetails/${id}`).then((response) => {
          console.log(response);
      })
  }
     
  return (
    <div className='main'>
    <div className='container'>
      <img src={detailhome} className='detailshome' alt="detailshome" />
    <div className='py-4'>
    <table class="table table-hover shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">First_Name</th>
      <th scope="col">Last_Name</th>
      <th scope="col">StreetName</th>
      <th scope="col">Pincode</th>
      <th scope="col">City</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">dob</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user)=>(
            <tr>
            <th scope="row"></th>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.streetName}</td>
            <td>{user.pincode}</td>
            <td>{user.city}</td>
            <td>{user.mobileNumber}</td>
            <td>{user.dob}</td>
            <td>
              <div className='Action'>
                <Link  to={`/detailsview/${user.id}`}><button className='dview'>View</button></Link>
                <Link 
                to={`/detailsedit/${user.id}`}
                ><button className='dedit'>Edit</button></Link>
                
                <button className='ddelete'
                onClick={()=>deleteUser(user.id)}>Delete</button>
              </div>
            </td>
          </tr>
         

        ))
    }
   
  </tbody>
</table>
<Link to="/detailsadd"><button className='dadduser'>Add User</button></Link>
    </div>
    </div>
    </div>
  )
}
