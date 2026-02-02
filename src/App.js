import React, { useEffect, useState } from "react";
import { fetchRecipes, fetchRecipesById } from "./utils";
import Header from "./header/Header";
import RecipeList from "./recipeList/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchRecipesData();
  }, []);

  return (
    <div>
      <Header title={"Recipe App"} />

      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;