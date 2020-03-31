import React, { Component } from 'react';

class CocktailInfo extends Component {
  render() {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const data = {
        ingredient: this.props.cocktail[`strIngredient${i}`],
        measurement: this.props.cocktail[`strMeasure${i}`]
      };
      if (data.ingredient) {
        ingredients.push(data);
      } else break;
    }
    console.log(this.props);
    const data = this.props.cocktail;
    console.log(ingredients);
    return (
      <div className='row justify-content-center'>
        <div className='col-sm-10 col-md-6 col-lg-5 cocktail-wrapper'>
          <h1 className='header-text'>{data.strDrink}</h1>
          <h3 className='secondary-text'>{data.strAlcoholic}</h3>
          <h3 className='secondary-text'>Serve in : {data.strGlass}</h3>
          <div className='row'>
            <div className='col'>
              <h3 className='header-text'>Ingredients</h3>
              <ul>
                {ingredients.map((ingredient, key) => (
                  <li key={key} className='secondary-text'>
                    {ingredient.ingredient} : {ingredient.measurement}
                  </li>
                ))}
              </ul>
            </div>
            <div className='col'>
              <img src={data.strDrinkThumb} />
            </div>
          </div>
          <h3 className='header-text'>Instructions</h3>
          <p className='secondary-text'>{data.strInstructions}</p>
        </div>
      </div>
    );
  }
}

export default CocktailInfo;
