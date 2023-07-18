import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import "../css/DetailsHome.css"
import detailsview from "../images/detailsview.jpg"
export default function ViewUser() {

    const [user,setUser] = useState({
        id:0,
        first_name:"",
        last_name:"",
        streetName:"",
        pincode:0,
        city:"",
        mobileNumber:0,
        dob:""
    
      })
      const {id}=useParams();
      useEffect(()=>{
      loadUser()
      },[])
      const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/getdetailsbyid/${id}`)
        setUser(result.data)
      }
  return (
   
        <div className='container'>
            <img src={detailsview} alt='detailsview' className='detailsview'/>
      <div className='row'>
      <div className='dcol shadow'>
       <h2 className='dtext-center'>User Details</h2>
       <div className='card'>
        <div className='card-header'>
            Details of user id: {user.id}
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <b>Id:</b>
                    {user.id}
                </li>
                <li className='list-group-item'>
                    <b>First Name:</b>
                    {user.first_name}
                </li>
                <li className='list-group-item'>
                    <b>Last Name:</b>
                    {user.last_name}
                </li>
                <li className='list-group-item'>
                    <b>StreetName:</b>
                    {user.streetName}
                </li>
                <li className='list-group-item'>
                    <b>Pincode:</b>
                    {user.pincode}
                </li>
                <li className='list-group-item'>
                    <b>City:</b>
                    {user.city}
                </li>
                <li className='list-group-item'>
                    <b>Mobile Number:</b>
                    {user.mobileNumber}
                </li>
                 <li className='list-group-item'>
                    <b>Dob:</b>
                    {user.dob}
                </li>
            </ul>
        </div>
       </div>
       <Link className='backbtn' to={"/detailshome"}><button className='backbtn1'>Back to Home</button></Link>
     </div>
     </div>
    </div>
  )
}
