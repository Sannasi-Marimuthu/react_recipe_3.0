// const getAllRecipeURL = "https://api-recipe.vercel.app/recipes";
// const getRecipeByIdURL = "https://api-recipe.vercel.app/recipes/1";

const BASE_URL = "https://api-recipe.vercel.app/";

const END_POINTS = {
  recipes: "recipes",
  recipesId: "recipes/:id",
};

export const fetchRecipes = async () => {
  const url = `${BASE_URL}${END_POINTS.recipes}`;
  const response = await fetch(url);
  console.log(response)

  if(!response.ok){
    console.log('Response Failed')
  }

  const data = await response.json()
  
  return data;
};


export const fetchRecipesById = async (id) => {
  const url = `${BASE_URL}${END_POINTS.recipesId.replace(':id',id)}`;
 
   const response = await fetch(url);
  
  if(!response.ok){
    console.log('Response Failed')
  }

  const data = await response.json()
  
  return data;

};