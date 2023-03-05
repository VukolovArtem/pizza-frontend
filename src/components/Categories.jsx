import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(
  ({ selectCategory, items, onClickCategories }) => {
    return (
      <div className="categories">
        <ul>
          <li
            className={selectCategory === null ? "active" : ""}
            onClick={() => onClickCategories(null)}
          >
            Все
          </li>
          {items &&
            items.map((nameCategories, index) => (
              <li
                className={selectCategory === index ? "active" : ""}
                onClick={() => onClickCategories(index)}
                key={`${nameCategories}_${index}`}
              >
                {nameCategories}
              </li>
            ))}
        </ul>
      </div>
    );
  }
);

Categories.propType = {
  //  selectCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategories: PropTypes.func,
};

Categories.defaultProps = {
  selectCategory: null,
  items: [],
};

export default Categories;
