import React from "react";

const FoodCard = ({ foods }) => {
  const renderFoods = foods.map((food) => {
    return (
      <div className="menu_food_box" key={food.id}>
        <div className="food_img">
          <img src={food.image} alt="" />
        </div>

        <h3>{food.name}</h3>
        <div className="rating_stock">
          <p className="rating">
            <i className="fa-solid fa-star"></i>
            {food.rating} / 5
          </p>
          <b>|</b>
          <p className="stock">
            <i className="fa-solid fa-box-open"></i>
            {food.stock}
          </p>
        </div>

        <div className="d-flex price_mins">
          <p className="price">
            <span>&#8369;</span> {food.price}
          </p>
          <p className="minsToCook">
            <i className="fa-regular fa-clock"></i>
            {food.minutesToCook} Minutes
          </p>
        </div>
      </div>
    );
  });
  return <React.Fragment>{renderFoods}</React.Fragment>;
};

export default FoodCard;
