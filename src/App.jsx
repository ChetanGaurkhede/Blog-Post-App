import { useState } from "react";
import { Header, Footer } from "./components";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(false);

  return !isLoading ? (
    <div>
      <Header />
      <main>
        <h1>Hello from Home</h1>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="text-3xl ">Loading...</div>
  );
}

export default App;
