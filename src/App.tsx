import { useState } from "react";
import { useTranslation } from "react-i18next";
import Pizza from "./models/pizza";
import PizzaList from "./components/pizzaList";
import Header from "./components/header";

import PizzaL from "./pages/PizzaL";
import { mockDataPizzas } from "./data/MockData";


const App = () => {
  // Zone pour faire plein de trucs
  useTranslation();
  
  const [pizzaL] = useState<Pizza[]>(mockDataPizzas);

  

  // Ici on construit l'interface
  return (
    <div className="App">
      <Header  /> 
      <main>
     
      
        <PizzaList pizzas={pizzaL} />
        
        
      </main>
    </div>
  );
};

export default App;
