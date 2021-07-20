import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchMeal from '../Actions/singleFood';
import Image from '../Components/FoodImg';
import FoodDetails from '../Components/MealsDetails';
import { resetSelected } from '../Actions/Index';
import {
  getImg, getArea, getInstructions, getIngredient, getName, categoryName, getProductsPending,
} from '../Selectors/Index';

const MealDetails = (props) => {
  const {
    img, area, ingredients, match, fetchMeal, name, category, resetSelected,
  } = props;
  const { id } = match.params;
  useEffect(() => {
    fetchMeal(id);
  }, [fetchMeal, id]);

  return (
    <div className="details-container">
      <div className="">
        <Image className="img" src={img} name={name} />
        <div>
          <FoodDetails category={category} className="ingredents" area={area} ingredients={ingredients} />
          <div>
            <Link to="/">
              <button type="button" onClick={resetSelected} className="btn">Home</button>
            </Link>
            <Link to={`/category/${category}`}>
              <button type="button" onClick={resetSelected} className="btn">Return</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { singleMeal } = state;
  const { details } = singleMeal;
  return (
    {
      img: getImg(details),
      area: getArea(details),
      instructions: getInstructions(details),
      ingredients: getIngredient(details),
      name: getName(details),
      category: categoryName(details),
      pending: getProductsPending(details),
    }
  );
};

const mapDispatchToProps = {
  fetchMeal,
  resetSelected,
};

MealDetails.defaultProps = {
  img: '',
  name: '',
  category: '',
  area: '',
  ingredients: [''],
};

MealDetails.propTypes = {
  img: PropTypes.string,
  area: PropTypes.string,
  fetchMeal: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(String),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  name: PropTypes.string,
  category: PropTypes.string,
  resetSelected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
