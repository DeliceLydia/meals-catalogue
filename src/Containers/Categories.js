import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCategories from '../Actions/AllCategories';
import Category from '../Components/Category';
import {
  getProductsError, getCategoriesList, categoryName, categoryDetails, categoryImage,
} from '../Selectors/Index';

const AllCategories = (props) => {
  const { getCategories, categories } = props;
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <div className="title-div">
        <h1 className="title roboto">Click on your favorite type of food to be able to choose from different choices!</h1>
      </div>
      <div className="container">
        {categories.map((val) => <Link key={val.idCategory} to={`/category/${val.strCategory}`}><Category name={categoryName(val)} description={categoryDetails(val)} src={categoryImage(val)} /></Link>)}
      </div>
    </div>
  );
};

AllCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getCategories,
};

const mapStateToProps = (state) => {
  const { categories } = state;
  return (
    {
      error: getProductsError(categories),
      categories: getCategoriesList(categories),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
