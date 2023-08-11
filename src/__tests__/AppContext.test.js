import React, { useContext } from "react";
import { render } from "@testing-library/react";
import AppContextProvider, { AppContext } from "../AppContext";

describe("<AppContextProvider />", () => {
  test("Initializes with inputs", () => {
    const { container } = render(
      <AppContext.Consumer>{(state) => state}</AppContext.Consumer>,
    );
    expect(container).toBeDefined();
  });
});
