import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

test("renders loading indicator", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const loadingElement = screen.getByText(/Loading/);
  expect(loadingElement).toBeInTheDocument();
});
