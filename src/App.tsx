import { useState } from "react";
import { useTranslation } from "react-i18next";
import Pizza from "./models/pizza";
import { mockDataPizzas } from "./data/MockData";
import PizzaList from "./components/pizzaList";
import Header from "./components/header";
import AuthenticationService from "./services/AuthenticationService";


const App = () => {
  // Zone pour faire plein de trucs
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    AuthenticationService.isAthenticated()
  );

  const [pizzaL, setPizzaL] = useState<Pizza[]>(mockDataPizzas);

  

  // Ici on construit l'interface
  return (
    <div className="App">
      <Header setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated} /> 
      <main>
        
        <PizzaList pizzas={pizzaL} />
      </main>
    </div>
  );
};

export default App;
