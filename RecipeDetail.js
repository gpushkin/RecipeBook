import React from "react";

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return <div>Select recipe to see the details.</div>;
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <p>
        <strong>Category:</strong>
        {recipe.category}
      </p>
      <p>
        <strong>Preparation Time:</strong>
        {recipe.prepTime}minutes
      </p>
      <p>
        <strong>Servings:</strong>
        {recipe.servings}
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
