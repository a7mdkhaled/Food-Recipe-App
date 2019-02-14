/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View } from 'react-native';

import RecipesHeader from '../components/recipes/recipesHeader';

class Recipe extends Component {
  render() {
    const { food, image } = this.props.navigation.state.params.item;

    return <RecipesHeader title={food} image={image} navigation={this.props.navigation} />;
  }
}

export default Recipe;
