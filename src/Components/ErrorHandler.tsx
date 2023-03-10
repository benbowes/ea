import React, { ReactElement } from "react";
import "./ErrorHandler.css";

export const ErrorHandler: React.FC<{ children: ReactElement }> = ({
  children,
}) => (
  <div className="alert">
    <p>{children}</p>
    <br />
    <button className="reload-button" onClick={() => window.location.reload()}>
      Refresh page
    </button>
  </div>
);
