import React, { useMemo, useState } from "react";
import axios from "axios";
import { dummyShowsData } from "../../assets/assets";
import { se } from "date-fns/locale";
const API_BASE = "http://localhost:3000"; // change if needed

export default function AddShows() {
  
  
  const [posterFile, setPosterFile] = useState(null);
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [movieId, setMovieId] = useState("");
  const [movieName, setMovieName] = useState("");
  const [img,setImg]=useState("");

  const [form, setForm] = useState({
    movieId: movieId || "",
    movieName: movieName || "",
    posterUrl: "", // optional if you upload a file
    language: "Tamil",
    theatre: "",
    screen: "",
    price: "",
    totalSeats: "",
    dateTimes: [], // ISO strings
  });

  const posterPreview = useMemo(() => {
    if (posterFile) return URL.createObjectURL(posterFile);
    if (form.posterUrl) return form.posterUrl;
    return "";
  }, [posterFile, form.posterUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addDateTime = () => {
    if (!dateTimeInput) return;
    // Interpret local value and store UTC ISO
    const iso = new Date(dateTimeInput).toISOString();
    setForm((prev) =>
      prev.dateTimes.includes(iso)
        ? prev
        : { ...prev, dateTimes: [...prev.dateTimes, iso] }
    );
    setDateTimeInput("");
  };

  const removeDateTime = (iso) => {
    setForm((prev) => ({
      ...prev,
      dateTimes: prev.dateTimes.filter((d) => d !== iso),
    }));
  };

  const canSubmit = useMemo(() => {
    return (
      form.movieId.trim() &&
      form.movieName.trim() &&
      (posterFile || form.posterUrl.trim()) &&
      form.language.trim() &&
      form.theatre.trim() &&
      form.screen.trim() &&
      Number(form.price) > 0 &&
      Number(form.totalSeats) > 0 &&
      form.dateTimes.length > 0 &&
      !submitting
    );
  }, [form, posterFile, submitting]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
   
      const payload = {
        movieId: form.movieId.trim(),
        movieName: form.movieName.trim(),
        poster: poster,
        language: form.language.trim(),
        theatre: form.theatre.trim(),
        screen: form.screen.trim(),
        price: Number(form.price),
        dateTime: form.dateTimes,
        seats: {
          totalSeats: Number(form.totalSeats),
          bookedSeats: [],
        },
      };
      console.log(payload);
      
      //const res = await axios.post(`${API_BASE}/api/shows`, payload);
      setMessage("Show created successfully ✅");

      // reset
      setPosterFile(null);
      setForm({
        movieId: "",
        movieName: "",
        posterUrl: "",
        language: "Tamil",
        theatre: "",
        screen: "",
        price: "",
        totalSeats: "",
        dateTimes: [],
      });
    } catch (err) {
      console.error(err);
      setMessage(err?.response?.data?.message || "Failed to create show");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  text-white p-6">
            <div className="max-w-full overflow-x-auto no-scrollbar flex gap-4 ">
        {dummyShowsData.map((show) => (
          <div
            key={show.id}
            className={`min-w-[250px] cursor-pointer brightness-60 hover:brightness-100 transition-opacity duration-300 p-2 rounded-lg `}
            onClick={() => {setMovieId(show.id), setMovieName(show.title); setImg(show.poster_path);               
              window.scrollTo({bottom: 0, behavior: 'smooth'});}}
                >
            <img
              src={show.poster_path}
              alt={show.showName}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold">{show.title}</h3>
            <p className="text-gray-400">{show.vote_count}</p>
            <p className="text-gray-400">{show.vote_average}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add Show (Admin)</h1>

        {/* Info */}
        <div className="text-sm text-gray-300 mb-6">
          <p>
            Times are saved as <span className="font-semibold">UTC ISO</span>.
            Your local picks are converted automatically.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6 items-start">
          {/* Poster */}
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-4 shadow">
              <div className="aspect-[3/4] w-full bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center">
                {!posterPreview ? (
                  <img src={img} alt="poster" className="w-full h-full object-contain" />
                ) : (
                  <img src="https://www.pexels.com/photo/serene-coastal-landscape-at-sunset-33419928" alt="poster" className="w-full h-full object-contain" />
                )}
              </div>
              <label className="block mt-4 text-sm">Upload Poster (optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPosterFile(e.target.files?.[0] || null)}
                className="mt-2 block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-gray-700 file:text-white hover:file:bg-gray-600"
              />
              <label className="block mt-4 text-sm">or Poster URL</label>
              <input
                type="url"
                name="posterUrl"
                value={form.posterUrl}
                onChange={handleChange}
                placeholder="http://localhost:3000/uploads/xyz.png"
                className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Form fields */}
          <div className="md:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-4 shadow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Movie ID</label>
                  <input
                    name="movieId"
                    value={form.movieId || movieId}
                    onChange={handleChange}
                    placeholder="66d2f9d1a84d3f1234567890"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Movie Name</label>
                  <input
                    name="movieName"
                    value={form.movieName || movieName}
                    onChange={handleChange}
                    placeholder="Jailer"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Language</label>
                  <select
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Tamil</option>
                    <option>English</option>
                    <option>Telugu</option>
                    <option>Hindi</option>
                    <option>Kannada</option>
                    <option>Malayalam</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Theatre</label>
                  <input
                    name="theatre"
                    value={form.theatre}
                    onChange={handleChange}
                    placeholder="PVR Cinemas - Chennai"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Screen</label>
                  <input
                    name="screen"
                    value={form.screen}
                    onChange={handleChange}
                    placeholder="Screen 2"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    min={1}
                    placeholder="180"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Total Seats</label>
                  <input
                    type="number"
                    name="totalSeats"
                    value={form.totalSeats}
                    onChange={handleChange}
                    min={1}
                    placeholder="100"
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Date-Time picker */}
              <div>
                <label className="block text-sm mb-1">Add Show Date & Time</label>
                <div className="flex gap-3 items-center">
                  <input
                    type="datetime-local"
                    value={dateTimeInput}
                    onChange={(e) => setDateTimeInput(e.target.value)}
                    className="bg-gray-900 border border-gray-700 rounded-xl p-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={addDateTime}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500"
                  >
                    Add
                  </button>
                </div>

                {/* Pills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {form.dateTimes.map((iso) => (
                    <span
                      key={iso}
                      className="inline-flex items-center gap-2 bg-gray-700 rounded-full px-3 py-1 text-sm"
                    >
                      {new Date(iso).toLocaleString()}
                      <button
                        type="button"
                        onClick={() => removeDateTime(iso)}
                        className="ml-1 rounded-full px-2 py-0.5 bg-red-600 hover:bg-red-500"
                        aria-label="Remove date time"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="px-6 py-2 rounded-2xl bg-green-600 hover:bg-green-500 disabled:bg-gray-700"
                >
                  {submitting ? "Saving..." : "Create Show"}
                </button>
                {message && <span className="text-sm text-gray-300">{message}</span>}
              </div>
            </div>
          </div>
        </form>

        {/* Debug (optional) */}
        {/* <pre className="mt-6 text-xs text-gray-400">{JSON.stringify(form, null, 2)}</pre> */}
      </div>
    </div>
  );
}
