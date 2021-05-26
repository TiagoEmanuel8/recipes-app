import React, { useEffect, useState, useContext } from 'react';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import { Context } from '../context';
import { fetchRecipeDetails } from '../services/api';
import HeaderDetails from '../components/HeaderDetails';
import { MealsRecomendations, YoutubePlayer,
  IngredientsContainer, DrinksRecomendations } from '../components';
import { verifyItemInFavorite } from '../services/functionsApi';
import { getItemLocalStorage, updateLocalStorage } from '../services/localStorageService';
import '../css/RecipeDetails.css';

function RecipeDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { setFavoriteRecipe } = useContext(Context);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [data, setData] = useState([]);
  const [copy, setCopy] = useState(false);

  const isMealPage = pathname.includes('comidas');
  const querys = isMealPage ? ['meals', 'Meal'] : ['cocktails', 'Drink'];

  useEffect(() => {
    const getData = async () => setData(await fetchRecipeDetails(id, isMealPage));
    getData();
    setFavoriteRecipe(verifyItemInFavorite(id));
    setDoneRecipe(localStorage.doneRecipes
      && getItemLocalStorage('doneRecipes')
        .some(({ id: idItem }) => idItem === id));
  }, [id, isMealPage, setFavoriteRecipe]);

  const recipeInProgress = localStorage.inProgressRecipes && Object
    .keys(getItemLocalStorage('inProgressRecipes')[querys[0]]).includes(id);

  const handleClick = () => {
    if (!recipeInProgress) {
      updateLocalStorage('inProgressRecipes', querys[0], id, []);
    }
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect to={ `/${pathname.split('/')[1]}/${id}/in-progress` } />;
  }

  return (
    <section className="wrapper-recipe-details">

      <HeaderDetails
        querys={ querys }
        isMealPage={ isMealPage }
        setCopy={ setCopy }
        data={ data }
      />

      <IngredientsContainer data={ data } />

      { isMealPage && <YoutubePlayer url={ data.strYoutube } title={ data.strMeal } /> }

      <section className="wrapper-instructions">
        <h3 className="title-section">Instruções</h3>
        <p
          data-testid="instructions"
          className="instructions-paragraph"
        >
          {data.strInstructions}
        </p>
      </section>

      { !doneRecipe && (
        <button
          data-testid="start-recipe-btn"
          type="button"
          className="btn-recipe"
          onClick={ handleClick }
        >
          { recipeInProgress ? 'Continuar Receita' : 'Iniciar Receita' }
        </button>) }
      <section className="wrapper-recomendations">
        <h3 className="title-section">Recomendações</h3>
        { isMealPage ? <DrinksRecomendations /> : <MealsRecomendations />}
      </section>
      { copy && <p>Link copiado!</p> }
    </section>
  );
}

export default RecipeDetails;
