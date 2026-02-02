import React, { useEffect, useState } from "react";
import { fetchRecipesById } from "../utils";
import { Link, useParams } from "react-router-dom";
import Loader from "../loader";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // useParams = object

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipesById(id);
        setRecipe(data);
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
      ) : (
        <div className="details">
          <Link to="/" className="homeLinl">
            Go Back
          </Link>

          <div className="header">
            <h2>{recipe.title}</h2>
            <button className="favBtn">+ Add to Fav</button>
          </div>

          <div>
            <img src={recipe.image} alt={recipe.title} />

            <div className="recipeInfo">
              <span className="tag level">{recipe.level}</span>
              <span className="tag time">{recipe.time}</span>
              <span className="tag veg">
                {recipe.isVeg ? "Veg" : "Non-Veg"}
              </span>
            </div>

            <div className="tags">
              {recipe.ingredients.map((ingre, index) => (
                <span key={index}> {ingre} </span>
              ))}
            </div>

            <h3>Instructions</h3>

            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}> {instruction} </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;