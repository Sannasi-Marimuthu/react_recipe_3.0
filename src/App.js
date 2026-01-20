import React, { useEffect, useState } from "react";
import { fetchRecipes } from "./utils";

const App = () => {
  const [recipes, setRecipes] = useState([]); // ✅ default array
useEffect(() => {
  const fetchRecipesData = async () => {
    const data = await fetchRecipes();
    console.log("API DATA:", data); // 👈 THIS
    setRecipes(data ?? []);
  };

  fetchRecipesData();
}, []);

  return (
    <div>
      Recipe App
      {recipes.length === 0 && <p>Loading...</p>}
{
    recipes.map((data,index) => (
        <h3 key={index} >{data.title}</h3>
      ))}
    </div>
  );
};

export default App;
