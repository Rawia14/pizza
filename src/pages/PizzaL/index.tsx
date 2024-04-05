import Pizza from "../../models/pizza";
import PizzaList from "../../components/pizzaList";
import { useState } from "react";
import { mockDataPizzas } from "../../data/MockData";


const PizzaL = () => {
    

    const [pizzaL] = useState<Pizza[]>(mockDataPizzas);  

    return (
        <>
          
          <PizzaList pizzas={pizzaL} />
        </>
      );
    };

export default PizzaL;