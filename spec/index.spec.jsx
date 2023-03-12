import { render } from "@testing-library/react";
import { App } from "../src/App";

it("проверка корневого узла", () => {
  const view = render(<App />);

  expect(view.getByText("App")).toBeInTheDocument();
});
