import { useState } from "react";
import Login from "./components/loginpage/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Admin from "./components/dashboard/adminPanel/Admin";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="w-full font-raleway">
        <main>
          <Admin />
        </main>
      </div>
    </>
  );
}

export default App;
