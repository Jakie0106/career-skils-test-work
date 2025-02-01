import { useNavigate } from "react-router-dom";
import s from "./CatalogItem.module.css";
import { getIcons } from "./getIcon.js";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

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

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = () => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(item.id)
        ? prevFavorites.filter((fav) => fav !== item.id)
        : [...prevFavorites, item.id]
    );
  };

  const isFavorite = favorites.includes(item.id);

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
              <div className={s.nameCampBox}>
                <h3 className={s.nameCamp}>{name}</h3>
              </div>
              <div className={s.priceIconBox}>
                <p className={s.priceNum}>€ {price}</p>
                <span onClick={toggleFavorite} className={s.favoriteIcon}>
                  {
                    <FaRegHeart
                      className={`${s.heartIcon} ${
                        isFavorite ? s.favorite : s.notFavorite
                      }`}
                    />
                  }
                </span>
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
