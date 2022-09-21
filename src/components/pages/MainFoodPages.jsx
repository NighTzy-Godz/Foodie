import React, { Component } from "react";

import foodData from "../../data/foodData";
import categories from "../../data/foodCategories";

import FoodCard from "../common/FoodCard";

import Sidebar from "../common/SideBar";
import Paginate from "../common/paginate";

import { paginate } from "../utils/paginate";

import "../../static/css/mainfoodpage.css";

class MainFoodPages extends Component {
  state = {
    foods: [],
    pageSize: 5,
    currentCategory: {},
    categories: [],
    currentPage: 1,
  };

  componentDidMount() {
    const allCategories = [{ name: "All Foods" }, ...categories];

    this.setState({
      foods: foodData,
      categories: allCategories,
      currentCategory: allCategories[0],
    });
  }

  handleCategory = (category) => {
    this.setState({ currentCategory: category, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { foods, currentCategory, currentPage, pageSize, categories } =
      this.state;

    const filteredFoods =
      currentCategory && currentCategory.id
        ? foods.filter((food) => food.category.id === currentCategory.id)
        : foods;

    const paginatedFoods = paginate(filteredFoods, pageSize, currentPage);

    return (
      <div style={{ padding: "0px 20px" }}>
        <div className="main_food">
          <div className="col-3">
            <Sidebar
              listOfCategories={categories}
              currentCategory={currentCategory}
              onCategoryChange={this.handleCategory}
            />
          </div>
          <div className="col-9">
            <div className="food_grid">
              <FoodCard foods={paginatedFoods} />
            </div>
            <Paginate
              itemsCount={filteredFoods.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainFoodPages;
// https://pbs.twimg.com/media/CdHghOHWAAAxsJY?format=jpg&name=4096x4096
