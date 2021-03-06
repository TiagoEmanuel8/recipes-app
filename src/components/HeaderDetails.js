import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { arrayOf, string, func, bool } from 'prop-types';
import { FavoriteButton } from './index';
import shareIcon from '../images/shareIcon.svg';
import arrowLeft from '../images/arrowLeftIcon.svg';
import '../css/HeaderDetails.css';
// import Loading from './Loading';

function HeaderDetails({ data, querys, isMealPage, setCopy }) {
  const { pathname } = useLocation();
  const { id } = useParams();

  const share = () => {
    const { location: { origin } } = window;
    navigator.clipboard.writeText(`${origin}/${pathname.split('/')[1]}/${id}`);
    setCopy(true);
  };

  // if (data) return <Loading />;
  return (
    <header>
      <div className="top-icons-container">
        <Link to={ `/${pathname.split('/')[1]}` } className="square-icon">
          <img src={ arrowLeft } alt="go Back" className="arrow" />
        </Link>
      </div>
      <div className="thumb-container">
        <div className="gradient-thumb" />
        <img
          data-testid="recipe-photo"
          src={ data[`str${querys[1]}Thumb`] }
          alt="recipe"
          className="thumb-recipe"
        />
      </div>
      <div className="title-container">
        <div className="text">
          <h2 data-testid="recipe-title" className="title">{data[`str${querys[1]}`]}</h2>
          <p data-testid="recipe-category">
            { `Category: ${isMealPage ? data.strCategory : data.strAlcoholic}` }
          </p>
        </div>
        <FavoriteButton data={ data } id={ id } query={ querys[1] } />
        <button data-testid="share-btn" type="button" onClick={ share }>
          <img src={ shareIcon } alt="share icon" />
        </button>
      </div>
    </header>
  );
}

HeaderDetails.propTypes = {
  querys: arrayOf(string),
  isMealPage: bool,
  setCopy: func,
}.isRequired;

export default HeaderDetails;
