import React from "react";
import { fetchData } from "./utils";

// https://api-recipe.vercel.app/recipes/ - all recipes
// https://api-recipe.vercel.app/recipes/10 - recipe by id

const App = () => {
  // fetch(getAllRecipes).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))

  //  async, await, try, catch
  fetchData()

  return <div>App home page</div>;
};

export default App;
