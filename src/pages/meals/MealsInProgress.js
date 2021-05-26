import React, { useEffect, useState, useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { fetchRecipeDetails } from '../../services/api';
import { Context } from '../../context';
import { IngredientsContainer } from '../../components';
import { updateLocalStorage }
  from '../../services/localStorageService';
import { verifyItemInFavorite } from '../../services/functionsApi';
import HeaderDetails from '../../components/HeaderDetails';
import '../../css/RecipeInProgress.css';

function MealsInProgress() {
  const { id } = useParams();
  const { disableButton, setFavoriteRecipe } = useContext(Context);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [data, setData] = useState([]);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const getData = async () => setData(await fetchRecipeDetails(id, true));
    setFavoriteRecipe(verifyItemInFavorite(id));
    getData();
  }, [id, setFavoriteRecipe]);

  const handleClick = () => {
    const doneRecipe = {
      id,
      type: 'comida',
      area: data.strArea,
      category: data.strCategory,
      name: data.strMeal,
      image: data.strMealThumb,
      doneDate: new Date().toLocaleDateString(),
      tags: data.strTags.split(','),
    };
    updateLocalStorage('doneOrFavoriteRecipes', 'doneRecipes', doneRecipe);
    setShouldRedirect(true);
  };

  if (shouldRedirect) return <Redirect to="/receitas-feitas" />;

  return (
    <section className="recipe-details">

      <HeaderDetails
        data={ data }
        querys={ ['meals', 'Meal'] }
        isMealPage
        setCopy={ setCopy }
      />

      <IngredientsContainer data={ data } />

      <section className="wrapper-instructions-in-progress">
        <h3 className="title-section">Instruções</h3>
        <p
          data-testid="instructions"
          className="instructions-paragraph"
        >
          {data.strInstructions}
        </p>
      </section>
      <button
        data-testid="finish-recipe-btn"
        type="button"
        className="btn-recipe"
        onClick={ handleClick }
        disabled={ disableButton }
      >
        Finalizar Receita
      </button>
      { copy && <span>Link copiado!</span> }
    </section>
  );
}

export default MealsInProgress;
