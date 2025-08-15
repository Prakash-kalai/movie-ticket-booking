import React, { useState } from "react";
import axios from "axios";

const AddShows = () => {
  const [formData, setFormData] = useState({
    movieName: "",
    poster: null,
    date: "",
    time: "",
    price: "",
    language: "",
    theater: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.poster) {
      alert("Please select a poster image");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Upload the poster image
      const imageForm = new FormData();
      imageForm.append("file", formData.poster);
      // Step 2: Send the full show data to your backend
      console.log(imageForm);
      
      const showData = {
        movieName: formData.movieName,
        poster: imageForm.url,
        date: formData.date,
        time: formData.time,
        price: formData.price,
        language: formData.language,
        theater: formData.theater,
      };

      const saveRes = await axios.post("http://localhost:3000/api/admin/add-show", showData)
      .then((response) => response.data);
      alert("Show added successfully!");
      console.log("Show Saved:", saveRes.data);

      // Reset form
      setFormData({
        movieName: "",
        poster: null,
        date: "",
        time: "",
        price: "",
        language: "",
        theater: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong while adding the show.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen text-white">
      <div className="flex p-10 w-full flex-col">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Add <span className="text-pink-500">New Show</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1b1b1b] p-8 rounded-lg max-w-xl space-y-6 w-full"
        >
          <div className="min-w-[450px]">
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

          <div>
            <label className="block text-sm mb-2">Poster</label>
            <input
              type="file"
              name="poster"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, poster: e.target.files[0] })
              }
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
            disabled={loading}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
          >
            {loading ? "Uploading..." : "Add Show"}
          </button>
        </form>
      </div>

      <div className="w-1/2 p-10">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Shows</h2>
        <div className="bg-gradient-to-br from-[#2f0c20] to-[#3f0b2c] rounded-lg p-6">
          <p className="text-gray-300">No shows added yet.</p>
        </div>
      </div>
    </div>
  );
};

export default AddShows;
