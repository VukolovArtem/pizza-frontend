import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { PizzaLoadingBlock } from "../components";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
//import { addPizzaToCart } from "../redux/actions/cart";

const arrCategoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const arrSortPopup = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(sortBy, category);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategories = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortPopup = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: "ADD_PIZZA_CART",
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          selectCategory={category}
          onClickCategories={onSelectCategories}
          items={arrCategoryNames}
        />
        <SortPopup
          selectSortPopup={sortBy.type}
          items={arrSortPopup}
          onClickSortPopup={onSelectSortPopup}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                inCartCount={
                  cartItems[obj.id] && cartItems[obj.id].items.length
                }
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
