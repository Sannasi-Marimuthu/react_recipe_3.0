

//   const getAllRecipes = "https://api-recipe.vercel.app/recipes/"
//   const getRecipeById = "https://api-recipe.vercel.app/recipes/10"
  const BASE_URL = "https://api-recipe.vercel.app/"
  const END_POINTS = {
    recipes : "recipes/",
    recipesByID : "recipes/10",

  }
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData(BASE_URL + END_POINTS.recipesByID);

// axios