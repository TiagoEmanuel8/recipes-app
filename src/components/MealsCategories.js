import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { fecthByCategory, fetchCategories, fecthForName } from '../services/api';

function MealsCategories() {
  const { setSearchResult } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [toggleClick, setToggleClick] = useState({});
  const maxArrayLength = 5;

  const getCategories = async () => {
    const result = await fetchCategories(true);
    setCategories(result.meals);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleClick = async ({ target: { value, name } }) => {
    if (toggleClick[name] || name === 'All') {
      setSearchResult(await fecthForName('', true));
    } else setSearchResult(await fecthByCategory(value, true));
    setToggleClick({ [name]: !toggleClick[name] });
  };

  const createButton = (name) => (
    <button
      data-testid={ `${name}-category-filter` }
      key={ name }
      type="button"
      value={ name }
      name={ name }
      onClick={ handleClick }
    >
      { name }
    </button>
  );

  return (
    <section>
      <button
        data-testid="All-category-filter"
        type="button"
        value=""
        name="All"
        onClick={ handleClick }
      >
        All
      </button>
      { !categories.length ? null
        : categories.map(({ strCategory }, index) => (
          index < maxArrayLength ? createButton(strCategory) : false
        ))}
    </section>
  );
}

export default MealsCategories;
