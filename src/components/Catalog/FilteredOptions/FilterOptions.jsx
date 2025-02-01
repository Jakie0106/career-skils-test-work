import { useEffect, useState } from "react";
import s from "../Form/Form.module.css";

const FilterOptions = ({ options, selected, onClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [highlightedOption, setHighlightedOption] = useState(null);
  const [selectedLabels, setSelectedLabels] = useState({});

  const handleOptionClick = (value, optionHasDropdown) => {
    if (optionHasDropdown) {
      setActiveDropdown((prev) => (prev === value ? null : value));
    } else {
      onClick(value);
      setActiveDropdown(null);
      setHighlightedOption(value);
      setSelectedLabels((prev) => ({
        ...prev,
        [value]: value,
      }));
    }
  };

  useEffect(() => {
    setActiveDropdown(null);
    setHighlightedOption(null);
  }, [selected]);

  return (
    <div className={s.filterContainer}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${s.filterOption} ${
            selected.includes(option.value) ||
            (option.hasDropdown && highlightedOption === option.value)
              ? s.selected
              : ""
          }`}
        >
          <div
            className={s.filterOptionHeader}
            onClick={() => handleOptionClick(option.value, option.hasDropdown)}
          >
            <svg className={s.iconItem}>
              <use xlinkHref={`sprite.svg#${option.iconId}`} />
            </svg>
            <span className={s.labelText}>
              {option.hasDropdown && selectedLabels[option.value]
                ? selectedLabels[option.value]
                : option.label}
            </span>
          </div>
          {option.hasDropdown && (
            <div
              className={`${s.dropdown} ${
                activeDropdown === option.value ? s.activeDropdown : ""
              }`}
            >
              {option.dropdownOptions.map((dropdownOption) => (
                <div
                  key={dropdownOption.value}
                  className={`${s.dropdownOption} ${
                    selected.includes(dropdownOption.value) ? s.selected : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick(dropdownOption.value);
                    setActiveDropdown(null);
                    setHighlightedOption(option.value);
                    setSelectedLabels((prev) => ({
                      ...prev,
                      [option.value]: dropdownOption.label,
                    }));
                  }}
                >
                  {dropdownOption.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterOptions;
