import React, { useState } from "react";
import axios from "axios";
import { dummyShowsData } from "../../assets/assets";
const AddShows = () => {
  const [selectedMoveie, setSelectedMovie] = useState(null);
  const [formData, setFormData] = useState({
    movieName: "",
    poster: null, // image file
    date: "",
    time: "",
    price: "",
    language: "",
    theater: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, poster: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("movieName", formData.selectedMoveie);
      form.append("date", formData.date);
      form.append("time", formData.time);
      form.append("price", formData.price);
      form.append("language", formData.language);
      form.append("theater", formData.theater);
      if (formData.poster) {
        form.append("poster", formData.poster);
      }

      const res = await axios.post("http://localhost:3000/api/admin/add-show", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Show added successfully!");
      console.log("Response:", res.data);

      // Reset
      setFormData({
        movieName: "",
        poster: "",
        date: "",
        time: "",
        price: "",
        language: "",
        theater: "",
      });
    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to add show.");
    } finally {
      setLoading(false);
    }
  };

  return (     
    <div className="w-full flex flex-col justify-center  p-10 min-h-screen gap-10 text-white overflow-hidden">

      {/* Horizontally scrollable poster list */}
      <div className="max-w-full overflow-x-auto no-scrollbar flex gap-4 ">
        {dummyShowsData.map((show) => (
          <div key={show.id} className="min-w-[250px] brightness-60  hover:brightness-100 transition-opacity duration-300"
          onClick={() => setSelectedMovie(show.id)}
          >
            <img
              src={show.poster_path}
              alt={show.showName}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold">{show.title}</h3>
            <p className="text-gray-400">{show.vote_count}</p>
            <p className="text-gray-400">{show.vote_average}</p>
            <div className="flex items-center justify-between absolute top-1 left-2 right-2 ">
              {selectedMoveie === show.id && (
                <input type="checkbox" className="mt-2 w-5 h-5" checked={selectedMoveie === show.id} readOnly />  

              )}
              </div>                  
            </div>
        ))}
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg w-full bg-gray-900 max-w-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-pink-500">
          Add New Show
        </h2>

        <div>
          <label className="block text-sm mb-1">Movie Name</label>
          <input
            type="text"
            name="movieName"
            value={formData.movieName}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Poster (optional)</label>
          <input
            type="file"
            name="poster"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Date</label>
            <input
               type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Language</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Theater</label>
          <input
            type="text"
            name="theater"
            value={formData.theater}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 hover:bg-pink-600 p-2 rounded text-white font-semibold"
        >
          {loading ? "Submitting..." : "Add Show"}
        </button>
      </form>
    </div>
  );
};


export default AddShows;
