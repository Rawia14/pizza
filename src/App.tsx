import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import AuthenticationService from "./services/AuthenticationService";
import PizzaL from "./pages/PizzaL";
import Login from "./pages/login";
import "./App.css";
import AddClient from "./pages/creation";
import CongratulationsModal from "./components/congratulations";
import Commandeok from "./components/commandeOKmodal";

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
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/pizzaL" element={ <PizzaL />} />
          <Route path="/add" element={<AddClient addClient={AddClient} />} />
          <Route path="/CongratulationsModal" element={<CongratulationsModal open={undefined} handleClose={undefined}  />} />
          <Route path="/Commandeok" element={<Commandeok open={undefined} handleClose={undefined}  />} />
        </Routes>
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
    
      </main>
    </div>
  );
};

export default App;
