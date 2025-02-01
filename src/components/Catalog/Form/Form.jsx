import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import FilterOptions from "../FilteredOptions/FilterOptions.jsx";
import s from "./Form.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/slice.js";
import { BsMap } from "react-icons/bs";

const SearchForm = () => {
  const dispatch = useDispatch();
  const vehicleEquipment = [
    { value: "ac", label: "AC", iconId: "wind" },
    {
      value: "transmission",
      label: "Transmission",
      iconId: "diagram",
      hasDropdown: true,
      dropdownOptions: [
        { value: "automatic", label: "Automatic" },
        { value: "manual", label: "Manual" },
      ],
    },
    { value: "kitchen", label: "Kitchen", iconId: "cup-hot" },
    { value: "tv", label: "TV", iconId: "tv" },
    { value: "bathroom", label: "Bathroom", iconId: "shower" },
    {
      value: "fuel",
      label: "Fuel",
      iconId: "fuel",
      hasDropdown: true,
      dropdownOptions: [
        { value: "petrol", label: "Petrol" },
        { value: "diesel", label: "Diesel" },
        { value: "hybrid", label: "Hybrid" },
      ],
    },
  ];

  const vehicleType = [
    { value: "van", label: "Van", iconId: "van" },
    { value: "fullyIntegrated", label: "Fully Integrated", iconId: "fully" },
    { value: "alcove", label: "Alcove", iconId: "alcove" },
  ];
  const [selectedBodyType, setSelectedBodyType] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [location, setLocation] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [locationEntered, setLocationEntered] = useState(false);
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");

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
    setLocation("");
    setSelectedTransmission("");
    setSelectedFuel("");
    setIsActive(false);
    setLocationEntered(false);
  };

  const handleFormSubmit = (values, { resetForm }) => {
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
      transmission: selectedTransmission,
      engine: selectedFuel,
    };
    console.log("Filters:", filters);
    dispatch(setFilters(filters));

    resetForm();
    resetFilters();
  };

  useEffect(() => {
    const resetActiveStyles = () => {
      setIsActive(false);
      setLocationEntered(false);
    };
    resetActiveStyles();
  }, [
    selectedBodyType,
    selectedEquipment,
    selectedTransmission,
    selectedFuel,
    location,
  ]);

  return (
    <Formik initialValues={{ location }} onSubmit={handleFormSubmit}>
      {({ setFieldValue, values }) => (
        <Form>
          <div className={s.locationContainer}>
            <label className={s.locLabel} htmlFor="location">
              Location:
            </label>

            <div className={s.locInputCont}>
              <BsMap
                className={`${s.locIcon} ${
                  isActive || locationEntered ? s.isActive : ""
                } ${locationEntered ? s.entered : ""}`}
              />
              <Field
                className={s.locInput}
                id="location"
                name="location"
                type="text"
                value={values.location}
                placeholder="City"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.trim()) {
                    setFieldValue("location", value);
                    setLocation(value);
                    setLocationEntered(!!values.location.trim());
                  } else {
                    setFieldValue("location", "");
                    setLocation("");
                  }
                }}
                onFocus={() => setIsActive(true)}
                onBlur={() => {
                  setIsActive(false);
                  setLocationEntered(!!values.location.trim());
                }}
              />
            </div>
          </div>
          <div className={s.filtersListContainer}>
            <span className={s.filterText}>Filters</span>

            <div className={s.filterEquip}>
              <label className={s.optionsLabel}>Vehicle equipment</label>
              <FilterOptions
                options={vehicleEquipment}
                selected={selectedEquipment}
                onClick={(value) => {
                  if (["automatic", "manual"].includes(value)) {
                    setSelectedTransmission(value);
                  } else if (["petrol", "diesel", "hybrid"].includes(value)) {
                    setSelectedFuel(value);
                  } else {
                    const newEquipment = selectedEquipment.includes(value)
                      ? selectedEquipment.filter((c) => c !== value)
                      : [...selectedEquipment, value];
                    setSelectedEquipment(newEquipment);
                    setFieldValue(newEquipment);
                  }
                }}
              />
            </div>

            <div className={s.filterOptionsContainer}>
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
          </div>

          <div>
            <button className={s.formBtn} type="submit">
              Search
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
