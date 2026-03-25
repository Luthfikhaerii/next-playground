import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("input updates correctly", () => {
  render(<LoginForm />);

  const input = screen.getByPlaceholderText("email");

  fireEvent.change(input, {
    target: { value: "test@mail.com" },
  });

  expect(screen.getByText("test@mail.com")).toBeInTheDocument();
});