import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Dashboard.css'; // Import your custom CSS file

const YourDataEntryForm = () => {
  const [data, setData] = useState({
    image: '',
   
    price: '',
    description: '',
    modelInfo: '',
    location: '',
    Category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      const response = await axios.post("http://localhost:3001/user/data", data);

      if (response.status === 200) {
        toast.success('Listing added successfully!');
      } else {
        toast.error('Failed to add listing');
      }
    setData({
        image: '',
       
        price: '',
        description: '',
        modelInfo: '',
        location: '',
        category: '',
    }
    )
  };

  return (
   
    <div className="custom-container mt-5">
        <h2 className='text'>Product Form</h2>
      <form onSubmit={handleSubmit} className="custom-form">
      <div className="custom-form-group">
          <input
            type="text"
            className="custom-form-control"
            name="image"
            value={data.price}
            onChange={handleInputChange}
            placeholder="image"
          />
        </div>

        <div className="custom-form-group">
          <input
            type="text"
            className="custom-form-control"
            name="price"
            value={data.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
        </div>

        <div className="custom-form-group">
          <textarea
            className="custom-form-control"
            name="description"
            value={data.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </div>

        <div className="custom-form-group">
          <input
            type="text"
            className="custom-form-control"
            name="modelInfo"
            value={data.modelInfo}
            onChange={handleInputChange}
            placeholder="Model Info"
          />
        </div>

        <div className="custom-form-group">
          <input
            type="text"
            className="custom-form-control"
            name="location"
            value={data.location}
            onChange={handleInputChange}
            placeholder="Location"
          />
        </div>

        <div className="custom-form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="Category"
            className="custom-form-control"
            value={data.category}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Tablet">Tablet</option>
            <option value="Equipment">Equipment</option>
            <option value="Plot">Plot</option>
            <option value="House">House</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        <button type="submit" className="custom-btn custom-btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default YourDataEntryForm;
