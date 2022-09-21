import React from "react";
import "../../static/css/sidebar.css";

const Sidebar = (props) => {
  const { listOfCategories, currentCategory, onCategoryChange } = props;

  const renderSidebar = listOfCategories.map((category) => {
    return (
      <li
        key={category.id + 1}
        className={`${currentCategory.name === category.name ? "active" : ""}`}
        onClick={() => onCategoryChange(category)}
      >
        {category.name}
      </li>
    );
  });

  return (
    <div className="sidebar">
      <ul>{renderSidebar}</ul>
    </div>
  );
};

export default Sidebar;
