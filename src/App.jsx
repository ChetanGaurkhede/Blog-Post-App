import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authServise from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authServise.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <h1>Hello from Home</h1>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="text-3xl ">Loading...</div>
  );
}

export default App;
