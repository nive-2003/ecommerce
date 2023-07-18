import axios from 'axios'
import React,{ useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import cartadd from '../images/cartadd.jpg';
 import "../css/CartAdd.css";
 
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function CartAdd() {

    let navigate = useNavigate()
   
    const [user,setUser] = useState({
        id:"",
        url:"",
        productname:"",
       product_cost:"",
        productquantity:"",
    })

  const{id,url,productname,product_cost,productquantity}=user 

 const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
 }

const onSubmit=async (e)=>{
  e.preventDefault();
toast.success("successfully regeistered")
 await axios.post("http://localhost:8080/savecart",user)
 navigate("/carthome")
}

  return (
    <div className='container'>
       <img src={cartadd} className='cartadd' alt="logo"/> 


        <div className='col-md-6'>
          <h2 className='text-center m-4'>Register User</h2> 
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Id' className='form-label'>
                Id
            </label>
            <input
            type={"number"}
            className='form-control'
            placeholder='Enter your id'
            name='id'
            value={id}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Image' className='form-label'>
                Image
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your image url'
            name='url'
            value={url}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='productname' className='form-label'>
                Product Name
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your product name'
            name='productname'
            value={productname}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='product_cost' className='form-label'>
               Product Cost
            </label>
            <input
            type={"number"}
            className='form-control'
            placeholder='Enter your product cost'
            name='product_cost'
            value={product_cost}
            onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='productquantity' className='form-label'>
            Product Quantity
            </label>
            <input
            type={"number"}
            className='form-control'
            placeholder='Enter your product quantity'
            name='productquantity'
            value={productquantity}
            onChange={(e)=>onInputChange(e)}
            />
          </div>         
          <button type="submit" className='csubmit'>Submit</button>
          <Link  to="/carthome"><button className='ccancel'>Cancel</button></Link>
          </form> 
        </div>
    </div>
  )
}

export default CartAdd