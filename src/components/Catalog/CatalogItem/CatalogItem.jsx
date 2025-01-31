import { useNavigate } from "react-router-dom";
import s from "./CatalogItem.module.css";
import { getIcons } from "./getIcon.js";

const CatalogItem = ({
  name,
  price,
  photo,
  rating,
  location,
  reviews,
  description,
  item,
}) => {
  const navigate = useNavigate();
  const requiredIcons = ["diagram", "cup-hot", "fuel", "wind"];
  const icons = getIcons(item).filter((icon) =>
    requiredIcons.includes(icon.icon)
  );

  const handleShowMore = () => {
    navigate(`/campers/${item.id}`);
  };

  return (
    <div>
      <div className={s.catalogContainer}>
        <div className={s.photoBox}>
          <img className={s.catalogImg} src={photo.thumb} alt="" />
        </div>
        <div className={s.infoContainer}>
          <div className={s.priceLocContainer}>
            <div className={s.priceBox}>
              <h3 className={s.nameCamp}>{name}</h3>
              <div className={s.priceIconBox}>
                <p className={s.priceNum}>€ {price}</p>
                <svg className={s.priceIcon}>
                  <use href="/public/sprite.svg#heart"></use>
                </svg>
              </div>
            </div>
            <ul className={s.ratingList}>
              <li className={s.ratingItem}>
                <svg className={s.iconRating}>
                  <use href="/public/sprite.svg#star"></use>
                </svg>
                <span>{`${rating}(${reviews} Reviews)`}</span>
              </li>
              <li className={s.ratingItem}>
                <svg className={s.iconLoc}>
                  <use href="/public/sprite.svg#LocMap"></use>
                </svg>
                <span>{location}</span>
              </li>
            </ul>
          </div>

          <div className={s.descrBox}>
            <p className={s.descrText}>{description}</p>
          </div>
          <ul className={s.iconParamList}>
            {icons.map((icon, index) => (
              <li className={s.paramItem} key={index}>
                <svg className={s.iconParam}>
                  <use href={`/public/sprite.svg#${icon.icon}`} />
                </svg>
                <span>{icon.label}</span>
              </li>
            ))}
          </ul>
          <button className={s.infoBtn} onClick={handleShowMore}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
