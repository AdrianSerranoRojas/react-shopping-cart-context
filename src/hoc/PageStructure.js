import React from "react";

import Main from "../components/Main";
import OverviewSidebar from "../components/OverviewSidebar/OverviewSidebar";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader/PageHeader";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function PageStructure(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <PageHeader />
        <Main className={props.fullWidth ? "container-fluid" : "container"}>
          <WrappedComponent {...props} />
        </Main>
        <OverviewSidebar className="col col-4" />
        <PageFooter />
      </>
    );
  }

  return WrapperComponent;
}

export default PageStructure;
