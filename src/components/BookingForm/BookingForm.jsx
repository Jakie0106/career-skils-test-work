import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  return (
    <div className={s.formContainer}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form className={s.formBox}>
          <div className={s.formControl}>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              className={s.inputField}
            />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>

          <div className={s.formControl}>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              className={s.inputField}
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>

          <div className={s.formControl}>
            <Field
              type="text"
              id="bookingDate"
              name="bookingDate"
              placeholder="Booking date*"
              className={s.inputField}
            />
            <ErrorMessage
              name="bookingDate"
              component="div"
              className={s.error}
            />
          </div>

          <div className={s.formControl}>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              placeholder="Comment"
              className={s.inputField}
            />
            <ErrorMessage name="comment" component="div" className={s.error} />
          </div>

          <button type="submit" className={s.submitButton}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
