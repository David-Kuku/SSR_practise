import React from "react";
import { renderToString } from "react-dom/server";

import App from "../shared/App";

module.exports = function render(initialState) {
  // render the App store static markup ins content variable
  let content = renderToString(<App />);

  // Get a copy of store data to create the same store on client side
  const preloadedState = {};

  return { content, preloadedState };
};
