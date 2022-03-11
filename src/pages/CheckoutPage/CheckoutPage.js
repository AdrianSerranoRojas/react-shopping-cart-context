import React from "react";
import OverviewSidebar from "../../components/OverviewSidebar/OverviewSidebar";
import PageFooter from "../../components/PageFooter";

import PageStructure from "../../hoc/PageStructure";
import withLayout from "../../hoc/withLayout";

function CheckoutPage({ handleRemove, handleChange, children }) {
  return (
    <>
      <div className="row container-sm-row">
        {children}
        <OverviewSidebar
          handleRemove={handleRemove}
          handleChange={handleChange}
          className="col col-4"
        />
        <PageFooter />
      </div>
    </>
  );
}

export default withLayout(PageStructure(CheckoutPage));
