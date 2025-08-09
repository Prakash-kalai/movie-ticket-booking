import React from "react";
import { Link } from "react-router-dom";
const backroundImage = "src/assets/backgroundImage.png"
const Navbar = () => {
  const SignedIn = true; // This should be replaced with actual authentication logic

  const userData = [
    {
      userId: "user123456",
  name: "Kalai Prakash",
  email: "kalaiprakash@email.com",
  phone: "+91 9876543210",
  gender: "Male",
  dob: "1998-06-15",
  profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
  preferences: {
    genres: ["Action", "Thriller", "Comedy"],
    language: ["Tamil", "English"],
    subtitles: true,
    notifications: {
      email: true,
      sms: false,
    }
}
}]

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-opacity-30 backdrop-blur-md z-50 sticky top-0 bg-transparent"
    >
      <h1 className="text-xl font-bold  text-white">
        <span className="text-red-500">Quick</span>Show
      </h1>
      <ul className="flex space-x-6 text-sm text-white">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/movies"}>Movies</Link>
        </li>
        <li>Theatres</li>
        <li>Releases</li>
        <li>
          <Link to={"/movies/my-booking"}>Favorites</Link>
        </li>
      </ul>
      {SignedIn ? (
        <span className="flex items-center space-x-4  rounded-full  flex-col justify-center w-10 h-10 cursor-pointer">
          <img src={userData[0].profilePic} alt=""  className="rounded-full"/>
          <span className="text-white text-center">{userData[0].name?.slice(0,5)}</span>          
        </span>
      ):(
        <Link to={"/user-signing/sign"}>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Sign In
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
