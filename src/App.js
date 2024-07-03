import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import Initialize from "./pages/initialize";
import Report from "./pages/report";
import Header from "./components/header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  let loggedinUser = localStorage.getItem("loggedinUser");
  let isLoggedIn =
    loggedinUser !== undefined && loggedinUser !== null && loggedinUser !== "";

  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Index />} />
            {/* <Route path="/" element={isLoggedIn ? <Index /> : <Home />} /> */}
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Home /> : <Index />}
              // element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/initialize"
              element={isLoggedIn ? <Initialize /> : <Navigate to="/" />}
            />
            <Route
              path="/report"
              element={isLoggedIn ? <Report /> : <Navigate to="/" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
