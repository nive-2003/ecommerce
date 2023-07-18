import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../css/DetailsHome.css"
import editdetails from "../images/editdetails.jpg"
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
export default function EditUser() {

  let navigate = useNavigate()
  
 const {id} = useParams()

  const [user,setUser] = useState({
    id:"",
    first_name:"",
    last_name:"",
    streetName:"",
    pincode:0,
    city:"",
    mobileNumber:0,
    dob:""

  })

  const{
    first_name,
    last_name,
    streetName,
    pincode,
    city,
    mobileNumber,
    dob}=user

    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})

    }
    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async(e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/updatedetails/${id}`,user)
     navigate("/home")
    }
    const loadUser=async()=>{
        const result = await axios.get(`http://localhost:8080/getdetailsbyid/${id}`)
        setUser(result.data)
      }
  return (
    <div className='decontainer'>
      <img src={editdetails} className='editdetails'/>
      <div className='row'>
       <h2 className='text-centerd'>Edit User</h2>
      <div className='col shadow'>

       <form onSubmit={(e)=>onSubmit(e)}>
       <div className='mb-3'>
        <label htmlFor='Id' className='form-label'>
          Id
        </label>
        <input type ="number"
         className="form-control"
          placeholder='Enter ur id'
           name='id'
           value={id}
           onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='first_name' 
        className='form-label'>
          First Name
        </label>
        <input type ="text" 
        className="form-control" 
        placeholder='Enter your first_name' 
        name='first_name'
        value={first_name}
        onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='  last_name' className='form-label'>
        Last Name
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your  last_name'
           name='last_name'
           value={last_name} onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='streetName' className='form-label'>
        Street Name
        </label>
        <input type ="text"
         className="form-control"
          placeholder='Enter your streetName' 
          name='streetName'
          value={streetName}
          onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor=' pincode' className='form-label'>
       Pincode
        </label>
        <input type ="number" 
        className="form-control" 
        placeholder='Enter your pincode'
         name='pincode'
         value={pincode}
         onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor='city' className='form-label'>
       City
        </label>
        <input type ="text" 
        className="form-control" 
        placeholder='Enter your city' 
        name='city'
        value={city}
        onChange={(e)=>onInputChange(e)}/>   
       </div> 
       <div className='mb-3'>
        <label htmlFor=' mobileNumber' className='form-label'>
       Mobile Number
        </label>
        <input type ="number" 
        className="form-control"
         placeholder='Enter your mobileNumber'
          name='mobileNumber'
          value={mobileNumber}
          onChange={(e)=>onInputChange(e)}/>   
       </div>
       <div className='mb-3'>
        <label htmlFor=' dob'
         className='form-label'>
       Date of Birth
        </label>
        <input type ="date" 
        className="form-control" 
        placeholder='Enter your dob'
         name='dob'
         value={dob}
         onChange={(e)=>onInputChange(e)}/>   
       </div>
       
       <Link to="/detailshome"><button type='submit' className='desub'>Submit</button></Link>
       <Link to="/detailshome"><button type='submit' className='decan'>Cancel</button></Link>
       {/* <button type='submit' className='btn btn-outline-danger mx-3'>Cancel</button> */}
      </form>
      </div>
      
      </div>
        
    </div>
  )
}
