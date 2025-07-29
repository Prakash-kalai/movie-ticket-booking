import React from "react";


const Hero = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent p-10 flex flex-col justify-center space-y-4">
        <h2 className="text-lg text-red-500 font-semibold">MARVEL STUDIOS</h2>
        <h1 className="text-5xl font-bold">Guardians of the Galaxy</h1>
        <p className="text-gray-300">
          Action | Adventure | Sci-Fi | 2018 | 2h 8m
        </p>
        <p className="max-w-lg text-sm text-gray-300">
          In a post-apocalyptic world where cities ride on wheels and consume
          each other to survive, two people meet in London and try to stop a
          conspiracy.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full w-fit">
          Explore Movies →
        </button>
      </div>
    </section>
  );
};

export default Hero;
