import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";

import checkoutSchema2 from "./checkout-schema-2";

import CheckoutsContext from "../../context/CheckoutsContext";

function BillingAddressForm(checkout) {
  return {
    id: uuid(),
    ...checkout,
  };
}

function PersonalDetailsForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { saveCheckoutTemp } = useContext(CheckoutsContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: checkoutSchema2,
    onSubmit: (values, { setSubmitting }) => {
      const newCheckout = BillingAddressForm(values);
      saveCheckoutTemp(newCheckout);
      setSubmitting(true);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      {/* <div className="container"> */}
      <div className="col col-7">
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            label="address"
            id="address"
            value={formik.values.address}
            placeholder="address"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.address}
            errorMessage={formik.errors.address}
          />
          <Input
            type="text"
            label="city"
            id="city"
            value={formik.values.city}
            placeholder="city"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.city}
            errorMessage={formik.errors.city}
          />
          <Input
            type="number"
            label="zipCode"
            id="zipCode"
            value={formik.values.zipCode}
            placeholder="zipCode"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.zipCode}
            errorMessage={formik.errors.zipCode}
          />
          <Input
            type="text"
            label="country"
            id="country"
            value={formik.values.country}
            placeholder="country"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.country}
            errorMessage={formik.errors.country}
          />
          <Button
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
      {/* </div> */}
      {hasSubmitted && <Redirect to="/checkout/step-3" />}
    </>
  );
}
export default PersonalDetailsForm;
