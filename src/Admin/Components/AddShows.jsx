import React, { useState } from "react";
import axios from "axios";
import { dummyShowsData } from "../../assets/assets";

const AddShows = () => {
  const [selectedMoveie, setSelectedMovie] = useState(null);
  const [selectdateTime, setSelectdateTime] = useState([]);
  const [movieId,setMovieId] = useState(null);
  const [formData, setFormData] = useState({
    movieId:'',
    movieName: "",    
    dateTime: [],    
    price: "",
    language: "",    
  });

  const handleDate = (date) => {
    const [dates, time] = date.split("T");     
    formData.date = dates; 
    formData.time = time; 
    return { dates, time };
  };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, poster: e.target.files[0] }));
  };
  console.log(movieId);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData();
      form.append("movieId", movieId);
      form.append("movieName", formData.movieName);
      form.append("date", formData.dateTime.append(selectdateTime));      
      form.append("price", formData.price);
      form.append("language", formData.language);      
        console.log(form);
        

      const res = await axios.post(
        "http://localhost:3000/api/admin/add-show",
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Show added successfully!");
      console.log("Response:", res.data);

      // Reset
      setFormData({
        movieName: "",        
        dateTime: [],        
        price: "",
        language: "",
        theater: "",
      });
      setSelectdateTime([]);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to add show.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center p-10 min-h-screen gap-10 text-white overflow-hidden">
      
      <div className="max-w-full overflow-x-auto no-scrollbar flex gap-4 ">
        {dummyShowsData.map((show) => (
          <div
            key={show.id}
            className="min-w-[250px] brightness-60 hover:brightness-100 transition-opacity duration-300"
            onClick={() => {
              setFormData((prev) => ({
                ...prev,movieName: show.title,}));
              setMovieId(show.id);
              setSelectdateTime((prev) =>
                formData.date ? [...prev, formData.date] : prev
              );
            }}
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
                <input
                  type="checkbox"
                  className="mt-2 w-5 h-5"
                  checked={selectedMoveie === show.id}
                  readOnly
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
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
          />
        </div>

        <div className="flex gap-1">
          <div className="w-1/2 mr-2">
            <label className="block text-sm mb-1">Date & Time</label>
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
            />

            <button
              type="button"
              className="mt-2 bg-pink-600 px-4 py-1 rounded"
              onClick={() => {
                if (formData.date) {
                  setSelectdateTime((prev) => [...prev, formData.date]);
                  setFormData((prev) => ({ ...prev, date: "" }));
                }
              }}
            >
              Add
            </button>
          </div>

          <div className="w-1/2 ml-2">
            {selectdateTime.map((date, index) => {
              const { dates, time } = handleDate(date);
              return (
                <div key={index} className="mb-2">
                  <p className="text-sm text-amber-50">
                    {dates} at {time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
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
