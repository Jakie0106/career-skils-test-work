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
  const icons = getIcons(item);
  console.log(icons);

  return (
    <div>
      <div className={s.catalogContainer}>
        <div className={s.photoBox}>
          <img className={s.catalogImg} src={photo.thumb} alt="" />
        </div>
        <div className={s.infoContainer}>
          <div>
            <div className={s.priceBox}>
              <h3>{name}</h3>
              <div>
                <p>{price}</p>
                <span>icon</span>
              </div>
            </div>
            <ul className={s.ratingList}>
              <li>
                <svg className={s.iconRating}>
                  <use href="/public/sprite.svg#star"></use>
                </svg>
                <span>{`${rating}(${reviews} Reviews)`}</span>
              </li>
              <li>
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
          <button className={s.infoBtn}>Show more</button>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
