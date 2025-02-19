import React , { useState } from "react";

const RecipeForm = ({onSubmit, initialRecipe}) => {
    const[recipe, setRecipe] = useState(
        initialRecipe || {
            id: null,
            name: '',
            category: '',
            prepTime: '',
            servings: '',
            ingredients: [],
            instructions: '',
        }
    );

    const handleChange = (e) => {
      const {name, value } = e.target;
      setRecipe({...recipe, [name]: value}); 
    };

    const handleIngredientChange = (e,index) => {
        const newIngredients = [...recipe.ingredients];
        newIngredients[index] = e.target.value;
        setRecipe({...recipe, ingredients: newIngredients});

    };

    const addIngredient = () => {
        setRecipe({...recipe, ingredients: [...recipe.ingredients,''] });
    };

    const handleSubmit = (e) => {
       e.preventDefault();
       onSubmit(recipe);
    };
    
    
    
    return(
        <form onSubmit={handleSubmit} className="recipe-form">
            <label>
                Name:
                <input type="text" name="name" value={recipe.name} onChange={handleChange} required></input>
            </label>

            <label>
                Category:
                <input type="text" name="category" value={recipe.category} onChange={handleChange} required></input>
            </label>

            <label>
                Preparation time(minutes):
                <input type="number" name="prepTime" value={recipe.prepTime} onChange={handleChange} required></input>
            </label>

            <label>
                Servings:
                <input type="number" name="servings" value={recipe.servings} onChange={handleChange} required></input>
            </label>

            
                <h3>Ingredients:</h3>
                {recipe.ingredients.map((ingredient, index) =>(
                    <input
                    key={index}
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(e, index)}
                    required
                     />
                ))}
                <button type="button" onClick={addIngredient}>Add Ingredient</button>
            <label>
                Instructions:
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required></textarea>
            </label>
            <button type="submit">Save Recipe.</button>


        </form>
    );
};

export default RecipeForm;