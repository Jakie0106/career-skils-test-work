import { useDispatch, useSelector } from "react-redux";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import { useEffect } from "react";
import { fetchCampers } from "../../../redux/operations.js";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../../redux/selectors.js";
import s from "./CatalogList.module.css";

const CatalogList = () => {
  const { items } = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!items || items.length === 0) {
    return <p>No items found.</p>;
  }

  console.log("xyu", items);

  return (
    <div>
      <ul className={s.paramList}>
        {items.map((item) => (
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
    </div>
  );
};

export default CatalogList;
// id={item.id} name={item.name} price={item.price}
// key={item.id}
