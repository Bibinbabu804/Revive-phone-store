import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

   const statusHandler = async (event,orderId) =>{
    try {

      const response =await axios.post(backendUrl + '/api/order/status',{orderId,status:event.target.value},{headers:{token}})
      if (response.data.success) {
        await fetchAllOrders()
        
      }
      
    } catch (error) {

      console.error(error);
      toast.error(response.data.message);
      
    }


   }




  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <h3 className="text-2xl font-semibold mb-6 text-center">Order Page</h3>
      <div className="space-y-6">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="flex items-start gap-4 w-full md:w-1/2">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/022/597/173/small_2x/3d-order-online-shop-png.png"
                  alt="Parcel Icon"
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">Items:</h4>
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-gray-700">
                      {item.name} x {item.quantity} <span>({item.size})</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-4 md:mt-0 w-full md:w-1/3">
                <p>
                  <span className="font-semibold">Customer:</span> {order.address.firstName} {order.address.lastName}
                </p>
                <p>
                  <span className="font-semibold">Address:</span> {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {order.address.phone}
                </p>
              </div>
              <div className="text-sm text-gray-600 mt-4 md:mt-0 w-full md:w-1/4">
                <p>
                  <span className="font-semibold">Items:</span> {order.items.length}
                </p>
                <p>
                  <span className="font-semibold">Payment Method:</span> {order.paymentMethod}
                </p>
                <p>
                  <span className="font-semibold">Payment Status:</span> {order.payment ? 'Done' : 'Pending'}
                </p>
                <p>
                  <span className="font-semibold">Order Date:</span> {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col items-end mt-4 md:mt-0 w-full md:w-1/5">
                <p className="text-lg font-semibold text-gray-800">
                  {currency} { "Price: "+order.amount}
                </p>
              </div>
              {/* Order Status moved here */}
              <div className="text-sm text-gray-600 mt-4 md:mt-0 w-full md:w-1/4">
                <p>
                  <span className="font-semibold">Order Status:</span>
                </p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="border rounded px-2 py-1 mt-1 w-full">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
