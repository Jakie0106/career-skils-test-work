import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import { useEffect, useState } from "react";
import { fetchCampers } from "../../../redux/operations.js";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectFilters,
} from "../../../redux/selectors.js";
import s from "./CatalogList.module.css";

const CatalogList = () => {
  const { items } = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch, filters]);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!items || items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <div className={s.catalogListBox}>
      <ul className={s.paramList}>
        {items.slice(0, visibleItems).map((item) => (
          <li key={item.id}>
            <CatalogItem
              name={item.name}
              price={item.price}
              photo={item.gallery[0]}
              rating={item.rating}
              location={item.location}
              description={item.description}
              reviews={item.reviews.length}
              item={item}
            />
          </li>
        ))}
      </ul>
      {visibleItems < items.length && (
        <button onClick={loadMoreItems} className={s.loadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogList;
// id={item.id} name={item.name} price={item.price}
// key={item.id}
