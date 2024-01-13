import React from "react";

export const Recipe = ({ recipe }) => {
  return (
    /*<article>
      <h1>{recipe.name}</h1>
      <h2>Ingredients:</h2>
      <span>{recipe.ingredients}</span>
      <h2>Instructions:</h2>
      <span>{recipe.instructions}</span>
      <img src={recipe.image} alt="Recipe" />
    </article>*/
    <article>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredients) => (
          <li key={ingredients}>{ingredients}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ul>
        {recipe.instructions.map((instructions) => (
          <li key={instructions}>{instructions}</li>
        ))}
      </ul>
      <img src={recipe.image} alt="Recipe" style={{ width: "50%" }} />
    </article>
  );
};
