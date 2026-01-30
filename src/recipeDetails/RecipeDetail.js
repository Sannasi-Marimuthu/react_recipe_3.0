import React, { useEffect, useState } from "react";
import { fetchRecipesById } from "../utils";
import { Link, useParams } from "react-router-dom";
import Loader from "../loader";

const RecipeDetail = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipesById(id);
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchRecipesData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) :  (
  <div className="details">
    <Link className="homeLink" to="/">Go Back</Link>

    <div className="header">
      <h2>{recipes.title}</h2>
      <button>+ Add to Favorites</button>
    </div>

    <div className="content">
      <img src={recipes.image} alt={recipes.title} />

      <div className="recipeInfo">
        <span className="tag level">{recipes.level}</span>
        <span className="tag time">{recipes.time}</span>
        <span className="tag veg">
          {recipes.isVeg ? "Veg" : "Non-Veg"}
        </span>
      </div>

      <div className="ingredients">
        {recipes.ingredients?.map((ingredient, index) => (
          <span key={index}>{ingredient}</span>
        ))}
      </div>

      <h3>Instructions</h3>
      <ol className="instruction">
        {recipes.instructions?.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  </div>
)}
    </div>
  );
};

export default RecipeDetail;
