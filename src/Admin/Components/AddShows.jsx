// File: src/pages/AddShow.jsx

import React, { useState } from "react";

const AddShows = () => {
  const [formData, setFormData] = useState({
    movieName: "",
    date: "",
    time: "",
    price: "",
    language: "",
    theater: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // TODO: Submit to backend
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Add <span className="text-pink-500">New Show</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1b1b1b] p-8 rounded-lg max-w-xl space-y-6"
        >
          <div>
            <label className="block text-sm mb-2">Movie Name</label>
            <input
              type="text"
              name="movieName"
              value={formData.movieName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Language</label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Theater</label>
            <input
              type="text"
              name="theater"
              value={formData.theater}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
          >
            Add Show
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddShows;
