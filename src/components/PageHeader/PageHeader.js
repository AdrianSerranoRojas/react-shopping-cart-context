import React from "react";

// import "./AppHeader.scss";

function PageHeader({ ...props }) {
  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">HOla</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
