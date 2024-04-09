import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
import PizzaL from "./pages/PizzaL";
import Login from "./pages/login";
import "./App.css";
import AddClient from "./pages/creation";
import CongratulationsModal from "./components/congratulations";

const App = () => {
  useTranslation();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    AuthenticationService.isAthenticated()
  );

  

  return (
    <div className="App">
      <Header setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
         />
      <main>
      
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/pizzaL" element={ <PizzaL />} />
          <Route path="/" element={<Navigate replace to={isAuthenticated ? "/pizzaL" : "/login"} />} />
          <Route path="/add" element={<AddClient addClient={AddClient} />} />
          <Route path="/modal" element={<AddClient addClient={AddClient} />} />
          <Route path="/CongratulationsModal" element={<CongratulationsModal open={undefined} handleClose={undefined}  />} />
        </Routes>
        
        
      </main>
    </div>
  );
};

export default App;
