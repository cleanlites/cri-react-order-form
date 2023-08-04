import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import AppContextProvider, { AppContext } from "../AppContext";

test("renders learn react link", () => {
  const { container } = render(
    <AppContextProvider>
      <App />
    </AppContextProvider>,
  );
  const headerElem = container.querySelector("div.order-form-title h2");
  expect(headerElem).toBeInTheDocument();
  expect(headerElem.innerHTML).toEqual("Online Order Form");
});
