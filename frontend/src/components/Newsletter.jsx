import React from 'react'

const Newsletter = () => {
  return (
    <div>

<div className=" py-4 px-6  d text-center">
  <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
  <p className="text-gray-600 mb-4">Stay updated with our latest offers and products!</p>
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 border border-gray-400 rounded-md w-1/4"
  />
  <button className="bg-black text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">
    Subscribe
  </button>
</div>

    </div>
  )
}

export default Newsletter