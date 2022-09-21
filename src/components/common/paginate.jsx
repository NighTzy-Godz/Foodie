import React from "react";

import _ from "lodash";

import "../../static/css/paginate.css";

const Paginate = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pageCount = itemsCount / pageSize;
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="pages">
      <ul>
        {pages.map((page) => {
          return (
            <li
              className={`${currentPage === page ? "active" : ""}`}
              onClick={() => onPageChange(page)}
              key={page}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
