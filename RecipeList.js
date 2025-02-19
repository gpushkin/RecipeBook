import React from "react";

const RecipeList = ({ recipes, onRecipeSelect, onDeleteRecipe}) => {
    return(
        <div className="recipe-list">
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id} className="recipe-item">
                        <div onClick={() => onRecipeSelect(recipe)}>
                            <h3>{recipe.name}</h3>
                            <p><strong>Category:</strong>{recipe.category}</p>
                        </div>
                         <button onClick={() => onDeleteRecipe(recipe.id)} className="delete-btn">
                            Delete
                         </button>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default RecipeList;
