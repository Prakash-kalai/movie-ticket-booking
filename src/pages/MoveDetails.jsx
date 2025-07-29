import poster from "../assets/guardians.jpg";

const MovieDetails = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8">
      <img src={poster} alt="Guardians" className="w-72 rounded-xl" />
      <div>
        <p className="text-sm text-red-400 font-bold">ENGLISH</p>
        <h2 className="text-3xl font-semibold mb-2">Guardians of the Galaxy</h2>
        <p className="text-yellow-400 text-sm mb-2">★ 4.5 IMDb Rating</p>
        <p className="text-gray-300 text-sm mb-4 max-w-xl">
          From the Marvel Cinematic Universe comes an epic space adventure...
        </p>
        <p className="text-sm text-gray-500 mb-4">
          2h 19m • Action | Adventure • 1 May, 2025
        </p>
        <div className="flex gap-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            ▶ Watch Trailer
          </button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md" onClick={()}>
            🎟 Buy Tickets
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
