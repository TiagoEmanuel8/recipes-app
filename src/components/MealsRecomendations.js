import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import { fecthByName } from '../services/api';
import 'react-multi-carousel/lib/styles.css';
import '../css/Recomendation.css';

function MealsRecomendations() {
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    const data = await fecthByName('', true);
    const recomendations = 6;
    setMeals(data.meals.slice(0, recomendations));
  };

  useEffect(() => { getMeals(); }, []);

  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  if (!meals.length) return <div>Loading...</div>;

  return (
    <Carousel responsive={ responsive } className="wrapper-carousel">
      { meals.map((meal, index) => (
        <Link to={ `/comidas/${meal.idMeal}` } key={ meal.idMeal } className="link">
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ meal.idMeal }
            className="recomendation-card"
          >
            <img variant="top" src={ meal.strMealThumb } alt={ meal.strMeal } />
            <h3 data-testid={ `${index}-recomendation-title` }>{meal.strMeal}</h3>
            <p>{`Category: ${meal.strCategory}`}</p>
            <p className="preview-instruction">{meal.strInstructions}</p>
          </div>
        </Link>
      )) }
    </Carousel>
  );
}

export default MealsRecomendations;
