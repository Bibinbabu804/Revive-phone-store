import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null]); // Store multiple images in an array
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Apple');
  const [subCategory, setSubCategory] = useState('Phone');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      images.forEach((image, index) => {
        if (image) formData.append(`image${index + 1}`, image);
      });

      const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } });

      if (response.status === 201) {
        toast.success(response.data.message);
        // Reset form
        setName('');
        setDescription('');
        setPrice('');
        setImages([null, null, null, null]);
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-4">
        <div className="mb-4">
          <p className="text-lg font-semibold">Upload Images</p>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <label key={index} htmlFor={`image${index + 1}`} className="cursor-pointer border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center w-24 h-24">
                <img className="w-full h-full object-cover" src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                <input onChange={(e) => handleImageChange(index, e.target.files[0])} type="file" id={`image${index + 1}`} hidden />
              </label>
            ))}
          </div>
        </div>

        <div className="w-full">
          <p className="text-lg font-semibold">Product Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} className="w-full max-w-md px-4 py-2 border rounded-md" type="text" placeholder="Type Here" required />
        </div>

        <div className="w-full">
          <p className="text-lg font-semibold">Product Description</p>
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full max-w-md px-4 py-2 border rounded-md" placeholder="Write content here" required />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div>
            <p className="text-lg font-semibold">Product Category</p>
            <select onChange={(e) => setCategory(e.target.value)} className="w-full max-w-md px-4 py-2 border rounded-md">
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Pixel">Pixel</option>
            </select>
          </div>

          <div>
            <p className="text-lg font-semibold">Sub Category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className="w-full max-w-md px-4 py-2 border rounded-md">
              <option value="Phone">Phone</option>
              <option value="Tablet">Tablet</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>

          <div>
            <p className="text-lg font-semibold">Product Price</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} className="w-full max-w-[120px] px-4 py-2 border rounded-md" type="number" placeholder="XXXXXXX" />
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Product Storage</p>
          <div className="flex gap-4 flex-wrap">
            {['64GB', '128GB', '256GB', '512GB', '1TB'].map((size) => (
              <div key={size} onClick={() => setSizes((prev) => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                <p className={`${sizes.includes(size) ? "bg-red-200" : "bg-gray-200"} px-4 py-2 rounded-md cursor-pointer hover:bg-red-300 transition`}>{size}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input onChange={() => setBestseller((prev) => !prev)} checked={bestseller} type="checkbox" id="bestseller" className="cursor-pointer" />
          <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
        </div>

        <button className="w-28 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition" type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
