import React from "react";
import "./recipeList.scss";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="recipeList">
      <h3 className="title">Check out these Recipes</h3>

      <div className="list">
        {recipes.map((item) => (
          // <a href="./" />
          <Link to={`/recipe/${item.id}`} className="linkItem" key={item.id}>

            <div  className="cardContainer">
              <div className="cardHeader">{item.title}</div>

              <div className="recipeInfo">
                <span className="tag level"> {item.level} </span>
                <span className="tag time"> {item.time} </span>
                <span className="tag veg">
                  {" "}
                  {item.isVeg ? "Veg" : "non-veg"}{" "}
                </span>
              </div>

              <img src={item.image} alt={item.title} className="image" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
