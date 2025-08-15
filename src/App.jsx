import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './components/First_Layer1/Navbar';
import Footer from './components/First_Layer1/Footer';

import Home from './main/Home';
import Movies from './main/Movies';
import MovieDetails from './pages/MoveDetails';
import SeatSelector from './pages/SeatSelector';
import MyBookings from './pages/MyBooking';

import SignIn from './userSigning/SignIn';
import SignUp from './userSigning/SignUp';
import Appadmin from './Admin/Appadmin';

import { isLoginCheck } from './redux/signUp/loginSlice';
import Hero from './Admin/Components/Hero';

const App = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const data = useSelector((state) => state.booking.bookings);

  useEffect(() => {
    dispatch(isLoginCheck());
  }, [dispatch]);

  console.log('Login:', isLogin);
  console.log('Bookings:', data);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hero" element={<Hero />} />

        {/* Admin Section */}
        <Route path="/admin/*" element={<Appadmin />} />

        {/* User Section - Conditional rendering with layout */}
        {isLogin && (
          <>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <Navbar />
                  <Movies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies/:id"
              element={
                <>
                  <Navbar />
                  <MovieDetails />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies/:id/:date"
              element={
                <>
                  <Navbar />
                  <SeatSelector />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies/my-booking"
              element={
                <>
                  <Navbar />
                  <MyBookings />
                  <Footer />
                </>
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
