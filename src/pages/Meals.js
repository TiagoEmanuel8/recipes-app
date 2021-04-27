import React from 'react';
import { Header, SearchBar, Footer } from '../components';

function Meals() {
  return (
    <section>
      <Header title="Comidas" search />
      <SearchBar />
      <Footer />
    </section>
  );
}

export default Meals;