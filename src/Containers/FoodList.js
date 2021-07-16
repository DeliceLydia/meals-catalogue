import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchAllMeals from '../Actions/AllFoods';
import { getProductsError, getProducts, getProductsPending } from '../Selectors/Index';
import { UPDATE_CATEGORY } from '../Actions/Index';

const MealsList = (props) => {
  const { products, fetchAllMeals, category } = props;
}

useEffect(() => {
  fetchAllMeals(category);
}, [category, fetchAllMeals]);

return (

)
