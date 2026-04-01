import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./RegisterForm";

describe("Register", () => {

  it("should render form", () => {
    render(<Register />);

    expect(screen.getByText(/register/i)).toBeInTheDocument();
  });

  it("should allow input", () => {
    render(<Register />);

    const input = screen.getByPlaceholderText("input name...");

    fireEvent.change(input, { target: { value: "udin" } });

    expect(input).toHaveValue("udin");
  });

  it("should show error when empty submit", async () => {
    render(<Register />);

    fireEvent.click(screen.getByText(/register/i));

    expect(await screen.findByText(/name/i)).toBeInTheDocument();
  });

  it("should submit successfully", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<Register />);

    fireEvent.change(screen.getByPlaceholderText("input name..."), {
      target: { value: "udin" },
    });

    fireEvent.change(screen.getByPlaceholderText("input email..."), {
      target: { value: "udin@mail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("input password..."), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText(/register/i));

    expect(alertMock).toHaveBeenCalled();
  });

});