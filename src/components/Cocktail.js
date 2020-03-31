import React, { Component, Fragment } from 'react';
import CocktailInfo from './CocktailInfo';
import axios from 'axios';
class Cocktail extends Component {
  state = {
    cocktail: []
  };
  componentDidMount() {
    this.getCocktail();
  }
  getCocktail = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    axios.get(url).then(res =>
      this.setState({
        cocktail: res.data.drinks[0]
      })
    );
  };

  render() {
    let data = (
      <Fragment>
        <CocktailInfo cocktail={this.state.cocktail} />
        <button className='btn' onClick={this.getCocktail}>
          Refresh
        </button>
      </Fragment>
    );
    return <div>{data}</div>;
  }
}

export default Cocktail;
