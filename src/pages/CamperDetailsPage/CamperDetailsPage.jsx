import { useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamperDetails,
  selectCamperDetailsError,
  selectCamperDetailsLoading,
} from "../../redux/selectors.js";
import { fetchCamperId } from "../../redux/operations.js";
import { useEffect, useState } from "react";
import FeaturesComponent from "../../components/Features/FeaturesComponent.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import s from "./CamperDetailsPage.jsx.module.css";
import ReviewsComponent from "../../components/ReviewsComponent/ReviewsComponent.jsx";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperDetails);
  const loading = useSelector(selectCamperDetailsLoading);
  const error = useSelector(selectCamperDetailsError);
  const [activeComponent, setActiveComponent] = useState("features");

  console.log(camper);

  useEffect(() => {
    dispatch(fetchCamperId(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Object.keys(camper).length) {
    return <p>No camper details found.</p>;
  }

  return (
    <div className="container">
      <CamperDetails camper={camper} />
      <div className={s.infoCamper}>
        <nav className={s.navLinks}>
          <button
            className={`${s.navButton} ${
              activeComponent === "features" ? s.active : ""
            }`}
            onClick={() => setActiveComponent("features")}
          >
            Features
          </button>
          <button
            className={`${s.navButton} ${
              activeComponent === "reviews" ? s.active : ""
            }`}
            onClick={() => setActiveComponent("reviews")}
          >
            Reviews
          </button>
        </nav>
        <div className={s.detailFormBox}>
          {activeComponent === "features" && (
            <FeaturesComponent camper={camper} />
          )}
          {activeComponent === "reviews" && (
            <ReviewsComponent camper={camper} />
          )}

          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsPage;
