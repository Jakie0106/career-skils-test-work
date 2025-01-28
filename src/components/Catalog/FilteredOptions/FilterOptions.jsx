import s from "../Form/Form.module.css";

const FilterOptions = ({ options, selected, onClick }) => {
  return (
    <div className={s.filterContainer}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${s.filterOption} ${
            selected === option.value ? "selected" : ""
          }`}
          onClick={() => onClick(option.value)}
        >
          <svg className={s.iconItem}>
            <use xlinkHref={`/public/sprite.svg#${option.iconId}`} />
          </svg>
          <span className={s.labelText}>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
