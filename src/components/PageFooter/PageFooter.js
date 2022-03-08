import React from "react";
import Button from "../Button";

import "./PageFooter.scss";

function PageFooter({ children, ...props }) {
  return (
    <footer className="Footer bg-dark text-white mt-5" {...props}>
      <Button>NEXT</Button>
      <Button>PREVIOUS</Button>
    </footer>
  );
}

export default PageFooter;
