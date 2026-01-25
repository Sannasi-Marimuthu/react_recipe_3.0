  const BASE_URL = "https://api-recipe.vercel.app/"
  const END_POINTS = {
    recipes : "recipes/",
    recipesByID : "recipes/:id",

  }


export const fetchRecipes = async () => {
  const url = `${BASE_URL}${END_POINTS.recipes}`; 
  const response = await fetch(url);
  if(!response.ok){
    console.error("API Error");
  }
  const data = await response.json();
  console.log("RAW API RESPONSE:", data);
  return data;
}

export const fetchRecipesById = async (id) => {
  // const url = `${BASE_URL}${END_POINTS.recipesByID}`; 
  const url = `${BASE_URL}${END_POINTS.recipesByID.replace(":id",id)}`; 
  const response = await fetch(url);
  if(!response.ok){
    console.error("API Error");
  }
  const data = await response.json();
  console.log("RAW API RESPONSE:", data);
  return data;
}


// export const fetchRecipesById = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}${END_POINTS.recipesByID}`);

//     if (!response.ok) {
//       throw new Error("API Error");
//     }

//     const data = await response.json();
//     console.log("RAW API RESPONSE:", data);

//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.error("fetchRecipes error:", error);
//     return [];
//   }
// };


