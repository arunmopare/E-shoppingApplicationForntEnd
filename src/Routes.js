import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <switch>
        <Route path='/' exact component={Home} />
      </switch>
    </BrowserRouter>
  );
}
