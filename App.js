import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Load recipes from local storage on mount
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  // Save recipes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, { ...newRecipe, id: Date.now() }];
    setRecipes(updatedRecipes);
    setIsEditing(false);
  };

  const handleEditRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
    setIsEditing(false);
  };

  const handleDeleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="app">
      <h1>Recipe Book</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="recipe-container">
        <RecipeList
          recipes={filteredRecipes}
          onRecipeSelect={setSelectedRecipe}
          onDeleteRecipe={handleDeleteRecipe}
        />
        <div className="recipe-detail-container">
          {isEditing ? (
            <RecipeForm
              onSubmit={selectedRecipe ? handleEditRecipe : handleAddRecipe}
              initialRecipe={selectedRecipe}
            />
          ) : (
            <>
              <RecipeDetail recipe={selectedRecipe} />
              <button onClick={() => setIsEditing(true)} className="edit-btn">
                {selectedRecipe ? 'Edit Recipe' : 'Add Recipe'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

