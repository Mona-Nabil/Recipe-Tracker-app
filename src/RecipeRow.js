import React from "react";

function RecipeRow({ singleRecipe, allRecipes, setRecipes }) {

  const deleteRecipe = (e) => {
    e.preventDefault();

    let filteredRecipes = allRecipes.filter(
      (recipe) => recipe !== singleRecipe
    );

    setRecipes(filteredRecipes);
  };

  return (
    <tr key={singleRecipe.name}>
      <td>{singleRecipe.name}</td>
      <td>{singleRecipe.cuisine}</td>
      <td>
        <img src={singleRecipe.photo} />
      </td>
      <td className="content_td">
        <p>{singleRecipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{singleRecipe.preparation}</p>
      </td>
      <td className="content_td">
        <button
          className="btn btn-danger"
          type="delete"
          name="delete"
          onClick={deleteRecipe}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeRow;
