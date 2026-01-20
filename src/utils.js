

//   const getAllRecipes = "https://api-recipe.vercel.app/recipes/"
//   const getRecipeById = "https://api-recipe.vercel.app/recipes/10"
  const BASE_URL = "https://api-recipe.vercel.app/"
  const END_POINTS = {
    recipes : "recipes/",
    recipesByID : "recipes/7",

  }

  
//  export const fetchRecipes  = async () => {
//    const url = `${BASE_URL}${END_POINTS.recipes}`;
//     const response = await fetch(url)
    
//     if(!response.ok){
//       console.log("Error fetching recipes")
//     }
//     const data = await response.json();
//     console.log(data)
//   }


export const fetchRecipes = async () => {
  try {
    const response = await fetch(`${BASE_URL}recipes/`);

    if (!response.ok) {
      throw new Error("API Error");
    }

    const data = await response.json();

    console.log("RAW API RESPONSE:", data);

    // ✅ API returns { recipes: [...] }
    if (Array.isArray(data.recipes)) {
      return data.recipes;
    }

    return [];
  } catch (error) {
    console.error("fetchRecipes error:", error);
    return [];
  }
};

  
 export const fetchRecipesById  = async () => {
   const url = `${BASE_URL}${END_POINTS.recipesByID}`;
    const response = await fetch(url)
    if(!response.ok){
      console.log("Error fetching recipes")
    }
    const data = await response.json();
    console.log(data)
  }






// export async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData(BASE_URL + END_POINTS.recipes);
// fetchData(BASE_URL + END_POINTS.recipesByID);

// axios