import { getIcons } from "../Catalog/CatalogItem/getIcon.js";
import s from "./FeaturesComponent.module.css";

const FeaturesComponent = ({ camper }) => {
  const icons = getIcons(camper);

  // const capitalizeFirstLetter = (str) => {
  //   if (!str) return "N/A";
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };

  const camelCaseToTitleCase = (str) => {
    if (!str) return "N/A";

    const result = str.replace(/([A-Z])/g, " $1");
    const titleCase =
      result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

    return titleCase;
  };

  return (
    <div>
      <div className={s.featuresContainer}>
        <ul className={s.iconList}>
          {icons.map((icon, index) => (
            <li key={index} className={s.iconListItem}>
              <svg className={s.icon}>
                <use href={`/sprite.svg#${icon.icon}`} />
              </svg>
              <span>{icon.label}</span>
            </li>
          ))}
        </ul>
        <div>
          <p className={s.detailsText}>Vehicle details</p>

          <ul className={s.paramsCampList}>
            <li className={s.paramsCampItem}>
              <p>Form</p>
              <p>{camelCaseToTitleCase(camper.form)}</p>
            </li>
            <li className={s.paramsCampItem}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={s.paramsCampItem}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={s.paramsCampItem}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={s.paramsCampItem}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={s.paramsCampItem}>
              <p>Consuption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
