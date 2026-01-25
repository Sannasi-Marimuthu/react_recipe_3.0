import React, { useEffect, useState } from "react";
import { fetchRecipes } from "./utils";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await fetchRecipes();
      console.log("FINAL DATA:", data);
      setRecipes(data); // data is array
      setLoading(false);
      }
      catch(err){
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recipe App</h1>

{loading ? <h2>Data is Loading</h2> :   recipes.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
  

{/* condi ? true : false  */}

    
    </div>
  );
};

export default App;
