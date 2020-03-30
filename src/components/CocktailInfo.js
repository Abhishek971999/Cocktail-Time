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
      <div>
        <h1>{data.strDrink}</h1>
        <h2>Is alcoholic:{data.strAlcoholic}</h2>
        <h4>Drink in {data.strGlass}</h4>
        <p>Instructions:{data.strInstructions}</p>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, key) => (
            <li key={key}>
              {ingredient.ingredient}:{ingredient.measurement}
            </li>
          ))}
        </ul>
        <img src={data.strDrinkThumb} style={{ height: 200, width: 200 }} />
      </div>
    );
  }
}

export default CocktailInfo;
