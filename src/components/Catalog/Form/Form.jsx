import { useState } from "react";
import { Formik, Form, Field } from "formik";
import FilterOptions from "../FilteredOptions/FilterOptions.jsx";
import s from "./Form.module.css";

const SearchForm = () => {
  const bodyTypes = [
    { value: "ac", label: "AC", iconId: "wind" },
    { value: "automatic", label: "Automatic", iconId: "diagram" },
    { value: "kitchen", label: "Kitchen", iconId: "cup-hot" },
    { value: "tv", label: "TV", iconId: "tv" },
    { value: "bathroom", label: "Bathroom", iconId: "shower" },
  ];

  const criteriaOptions = [
    { value: "ac", label: "Van", iconId: "van" },
    { value: "kitchen", label: "Fully Integrated", iconId: "fully" },
    { value: "wifi", label: "Alcove", iconId: "alcove" },
  ];

  const [selectedBodyType, setSelectedBodyType] = useState("");
  const [selectedCriteria, setSelectedCriteria] = useState([]);

  return (
    <Formik initialValues={{ location: "", bodyType: "", criteria: [] }}>
      {({ setFieldValue }) => (
        <Form>
          <div className={s.locationContainer}>
            <label className={s.locLabel} htmlFor="location">
              Location:
            </label>

            <div className={s.locInputCont}>
              <svg className={s.locIcon}>
                <use href="/public/sprite.svg#LocMap"></use>
              </svg>
              <Field
                className={s.locInput}
                id="location"
                name="location"
                type="text"
                value="Kyiv, Ukraine"
              />
            </div>
          </div>

          <div className={s.filterOptionsContainer}>
            <span className={s.filterText}>Filters</span>
            <div className={s.filterEquip}>
              <label className={s.optionsLabel}>Vehicle equipment</label>
              <FilterOptions
                options={bodyTypes}
                selected={selectedBodyType}
                onClick={(value) => {
                  setSelectedBodyType(value);
                  setFieldValue("bodyType", value);
                }}
              />
            </div>

            <div className={s.filterEquip}>
              <label className={s.optionsLabel}>Vehicle type</label>
              <FilterOptions
                options={criteriaOptions}
                selected={selectedCriteria}
                onClick={(value) => {
                  const newCriteria = selectedCriteria.includes(value)
                    ? selectedCriteria.filter((c) => c !== value)
                    : [...selectedCriteria, value];
                  setSelectedCriteria(newCriteria);
                  setFieldValue("criteria", newCriteria);
                }}
              />
            </div>
          </div>

          <div>
            <button className={s.formBtn} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
