import s from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  return (
    <div>
      <div className={s.detailsContainer}>
        <div className={s.infoTextBlock}>
          <h2 className={s.camperTitle}>{camper.name}</h2>

          <div className={s.ratingLocationBlock}>
            <div className={s.rating}>
              <svg className={s.iconRating}>
                <use href="/public/sprite.svg#star"></use>
              </svg>
              <span>{`${camper.rating}(${camper.reviews.length} Reviews)`}</span>
            </div>
            <div className={s.location}>
              <svg className={s.iconLoc}>
                <use href="/public/sprite.svg#LocMap"></use>
              </svg>
              <span>{camper.location}</span>
            </div>
          </div>

          <div className={s.priceBlock}>
            <p className={s.priceNum}>€ {camper.price}</p>
          </div>
        </div>

        <div className={s.photosDescriptionBlock}>
          <div className={s.photosBlock}>
            {camper.gallery.map((photo, index) => (
              <div
                key={index}
                className={s.photo}
                style={{ backgroundImage: `url(${photo.thumb})` }}
              ></div>
            ))}
          </div>
        </div>
        <div className={s.descriptionBlock}>
          <p>{camper.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
