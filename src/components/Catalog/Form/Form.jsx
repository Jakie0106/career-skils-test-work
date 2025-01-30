import { useState } from "react";
import { Formik, Form, Field } from "formik";
import FilterOptions from "../FilteredOptions/FilterOptions.jsx";
import s from "./Form.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/slice.js";

const SearchForm = () => {
  const dispatch = useDispatch();
  const vehicleEquipment = [
    { value: "ac", label: "AC", iconId: "wind" },
    { value: "kitchen", label: "Kitchen", iconId: "cup-hot" },
    { value: "tv", label: "TV", iconId: "tv" },
    { value: "bathroom", label: "Bathroom", iconId: "shower" },
  ];

  const vehicleType = [
    { value: "van", label: "Van", iconId: "van" },
    { value: "alcove", label: "Alcove", iconId: "alcove" },
    { value: "fullyIntegrated", label: "Fully Integrated", iconId: "fully" },
  ];
  const [selectedBodyType, setSelectedBodyType] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [location, setLocation] = useState("Kyiv, Ukraine");

  const formatLocation = (location) => {
    const parts = location.trim().split(/\s*,\s*/);
    if (parts.length === 2) {
      return `${parts[1].replace(/\s+/g, "%20")},%20${parts[0].replace(
        /\s+/g,
        "%20"
      )}`;
    }
    return location.replace(/\s+/g, "%20");
  };

  const resetFilters = () => {
    setSelectedBodyType([]);
    setSelectedEquipment([]);
    setLocation("Kyiv, Ukraine");
  };

  const handleFormSubmit = (values) => {
    resetFilters();
    const formattedLocation = formatLocation(values.location);
    const decodedLocation = decodeURIComponent(formattedLocation);

    const filters = {
      ...values,
      location: decodedLocation,
      form: selectedBodyType,
      AC: selectedEquipment.includes("ac") ? true : undefined,
      kitchen: selectedEquipment.includes("kitchen") ? true : undefined,
      TV: selectedEquipment.includes("tv") ? true : undefined,
      bathroom: selectedEquipment.includes("bathroom") ? true : undefined,
    };
    dispatch(setFilters(filters));
  };

  return (
    <Formik
      initialValues={{ location, vehicleType: [], vehicleEquipment: [] }}
      onSubmit={handleFormSubmit}
    >
      {({ setFieldValue, values }) => (
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
                value={values.location}
                onChange={(e) => {
                  setFieldValue("location", e.target.value);
                  setLocation(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={s.filterEquip}>
            <label className={s.optionsLabel}>Vehicle equipment</label>
            <FilterOptions
              options={vehicleEquipment}
              selected={selectedEquipment}
              onClick={(value) => {
                const newEquipment = selectedEquipment.includes(value)
                  ? selectedEquipment.filter((c) => c !== value)
                  : [...selectedEquipment, value];
                setSelectedEquipment(newEquipment);
                setFieldValue(newEquipment);
              }}
            />
          </div>

          <div className={s.filterOptionsContainer}>
            <span className={s.filterText}>Filters</span>

            <div className={s.filterEquip}>
              <label className={s.optionsLabel}>Vehicle type</label>
              <FilterOptions
                options={vehicleType}
                selected={selectedBodyType}
                onClick={(value) => {
                  setSelectedBodyType(value);
                  // setFieldValue(value);
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
