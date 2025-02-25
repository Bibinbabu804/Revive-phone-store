import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";



const PlaceOrder = () => {

  const {navigate,backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,products}=useContext(ShopContext)

  const [method,setMethod]=useState('cod')
  const [formData,setFormData] =useState({

    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:'',

    



  })

  const onchangeHandler = (event) =>{
    const name= event.target.name
    const value =event.target.value
    setFormData(data => ({...data,[name]:value}))


  }

    
  const initpay =(order) =>{
    const options= {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt:order.receipt,
      handler: async (response) =>{
        console.log(response);
        

      }


    }
    const rzp = new window.Razorpay(options)
    rzp.open()

  }





  const onSubmitHandler =async (event) =>{
    event.preventDefault()

    try {

      let orderItems= []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0) {
            const itemInfo =structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size == item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)

            }

          }
        }
      }
      

       let orderData ={
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee




       }

       switch (method){

        //api calls for cod
        case 'cod':

        const response = await axios.post(backendUrl +"/api/order/place",orderData,{headers:{token}})

       
        
        if(response.data.success){
          setCartItems({})
          navigate('/orders')

        }else{

          toast.error(response.data.message)
        }
        console.log(response.data);

        break;

        case 'razorpay' :

        const responseRazorpay = await axios.post(backendUrl +"/api/order/razorpay",orderData,{headers:{token}})
        if(responseRazorpay.data.success){
          initpay(responseRazorpay.data.order);
          
        }



        break;

        default:
          break;




       }
      



      
    } catch (error) {
      console.log(error);

      toast.error(error.message)

      
      
    }



  }


  return (
    <form onSubmit={onSubmitHandler} className=" flex felx-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* left side  */}

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3">
          <h2> DELIVERY INFORMATION</h2>
        </div>
        <div className="flex gap-3">
          <input onChange={onchangeHandler} name="firstName" value={formData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
            type="text"
            required
          />

          <input onChange={onchangeHandler} name="lastName" value={formData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
            type="text"
            required
          />
        </div>

        <input onChange={onchangeHandler} name="email" value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address"
          type="email"
          required
        />

        <input onChange={onchangeHandler} name="street" value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Address (Area & Street)"
          type="text"
          required
        />

<div className="flex gap-3">

        <input onChange={onchangeHandler} name="city" value={formData.city}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="City"
          type="text"
          required
        />

        <input onChange={onchangeHandler} name="state" value={formData.state}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="State"
          type="text"
          required
        />
        </div>


        <div className="flex gap-3">

        <input onChange={onchangeHandler} name="zipcode" value={formData.zipcode}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Zipcode"
          type="number"
          required
        />

        <input onChange={onchangeHandler} name="country" value={formData.country}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Country"
          type="text"
          required
        />
         </div>

         
        <input onChange={onchangeHandler} name="phone" value={formData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
          type="number"
          required
        />



      </div>

      {/* right side ? */}


      <div className=" mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>

        </div>


        <div className="mt-8">
          <h2> PAYEMENT METHOD </h2>

          {/* PAYMENT METHOD  */}
        

          <div className="flex gap-3 flex-col lg:flex-row">

        



            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">

<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}  `} ></p>
<img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />

</div>

<div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">

<p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`} ></p>
<p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>

</div>


          </div>

           <div className="w-full text-end mt-8 ">
            <button type="submit"  className=" text-white px-16 py-3 tet-sm bg-blue-500 rounded-xl">PLACE ORDER</button>


           </div>




        </div>

      </div>



    </form>
  );
};

export default PlaceOrder;
