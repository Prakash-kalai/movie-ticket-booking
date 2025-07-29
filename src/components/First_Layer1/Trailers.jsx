import React from "react";
import { dummyTrailers } from "../../assets/assets";

const Trailers = () => {

  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-semibold mb-4">Trailers</h2>

      {/* Main Trailer */}
      <div className="bg-gray-800 h-100 rounded-xl mb-6 relative flex items-center justify-center">
        {
          dummyTrailers[0].image ? (
            <img src={dummyTrailers[0].image} alt="Main Trailer" className="object-cover h-full w-full rounded-xl" />
          ) : ( 
            <video className="h-full w-full rounded-xl" controls>
              <source src={dummyTrailers[0].videoUrl} type="video/mp4" />
            </video>
          )
        }
        <button className="text-white text-4xl absolute">▶</button>
      </div>

      {/* Thumbnails List */}
      <div className="flex space-x-4 overflow-x-auto justify-center">
        {dummyTrailers.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-700 h-24 w-36 rounded-lg flex items-center justify-center overflow-hidden relative hover:-translate-y-1 duration-300
            transition max-md:-h-60 md:max-h-60 cursor-pointer"
          >
            {/* Image or video thumbnail */}
            {item.image ? (
              <img
                src={item.image}
                alt={`Trailer ${idx}`}
                className="object-cover h-full w-full absolute inset-0"
              />
            ) : (
              <video className="h-full w-full object-cover" controls={false}>
                <source src={item.videoUrl} type="video/mp4" />
              </video>
            )}

            {/* Play icon overlay */}
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center left-0">
              <button className="text-white text-2xl">▶</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trailers;
