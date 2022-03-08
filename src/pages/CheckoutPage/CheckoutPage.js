import React from "react";

import PageStructure from "../../hoc/PageStructure";
import withLayout from "../../hoc/withLayout";

function CheckoutPage({ ...props }) {
  return (
    <>
      <div {...props}>Checkout Page</div>
    </>
  );
}

export default withLayout(PageStructure(CheckoutPage));
