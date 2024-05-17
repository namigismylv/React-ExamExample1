import React, { useContext } from "react";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import MainContext from "../../../Context/Context";
import axios from "axios";
import { Helmet } from "react-helmet";
const Add = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <div className="formik">
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", title: "", price: "" }}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:8080/products", { ...values })
            .then((res) => {
              setData([...data, res.data]);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              placeholder="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <input
              type="number"
              name="price"
              placeholder="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
