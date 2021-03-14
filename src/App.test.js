import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders empty todo app with heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo App React/i);
  expect(linkElement).toBeInTheDocument();
});
