import React from "react";

import { Link, useParams } from "react-router-dom";
import { foodData } from "../../data/foodData";

import "../../static/css/food_details.css";

const commentData = [
  {
    name: "Lou Baloyskie",
    time: "3:00PM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi iste excepturi repellat neque dolores quis, quidem nobis cumque placeat.",
    rating: 4.6,
  },
  {
    name: "Kaels Plat 3",
    time: "1:23AM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi iste excepturi repellat neque dolores quis, quidem nobis cumque placeat.",
    rating: 4.9,
  },
  {
    name: "Bei Bei Dapskie",
    time: "4:16PM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi iste excepturi repellat neque dolores quis, quidem nobis cumque placeat.",
    rating: 4.4,
  },
  {
    name: "Aser Smasher",
    time: "11:11PM",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi iste excepturi repellat neque dolores quis, quidem nobis cumque placeat.",
    rating: 5,
  },
];

// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi iste excepturi repellat neque dolores quis, quidem nobis cumque placeat.",
const FoodDetail = (props) => {
  const { foodId } = useParams();
  const foundFood = foodData.find((food) => food.id === parseInt(foodId));

  const randomSold = () => {
    return Math.floor(Math.random() * 40);
  };

  console.log(foundFood);
  return (
    <section id="food_detail">
      <div className="container">
        <div className="d-flex">
          <div className="food_detail">
            <div className="card_img">
              <img src={foundFood.image} alt="" />
            </div>
            <div className="food_detail_content">
              <div className="d-flex food_name_price">
                <h3>{foundFood.name}</h3>
                <p className="food_price">
                  <span>&#8369;</span> {foundFood.price}
                </p>
              </div>
              <div className="food_desc">
                <p>{foundFood.desc}</p>
              </div>
              <div className="food_rating">
                <i className="fa-solid fa-star"></i>
                <p>{foundFood.rating} / 5 Ratings</p>
              </div>
              <div className="food_stock">
                <p>
                  <i className="fa-solid fa-box-open"></i>
                  {foundFood.stock} Stocks
                </p>
              </div>
              <div className="food_sold">
                <i className="fa-solid fa-basket-shopping"></i>
                <p>{randomSold()} Sold </p>
              </div>

              <div className="food_buttons">
                <Link className="navBtn" id="buyBtn">
                  Buy Now
                </Link>
                <Link className="navBtn">Add to Cart</Link>
              </div>
            </div>
          </div>
          <div className="food_review">
            {commentData.map((comm) => {
              return (
                <div className="review_box">
                  <div className="d-flex name_time">
                    <p className="name">{comm.name}</p>
                    <p className="time">{comm.time}</p>
                  </div>
                  <div className="user_review">
                    <p>{comm.comment}</p>
                  </div>
                  <p>
                    <i className="fa-solid fa-star"></i> {comm.rating} / 5 Stars
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="go_back">
          <Link to="/menu" className="navBtn">
            Go Back To Men
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodDetail;
