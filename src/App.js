import React, { useEffect, useState } from "react";
import { fetchRecipes } from "./utils";
import Loader from "./loader";
import Header from "./header/Header";
import RecipeList from "./recipeList/RecipeList";

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
      <Header  title={"My App"} />

{loading ? <Loader name={"recipes are loading"} /> : 


<RecipeList recipes={recipes}/>


}
  

{/* condi ? true : false  */}

    
    </div>
  );
};

export default App;
