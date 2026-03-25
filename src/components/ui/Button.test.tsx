import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";


test("button click works", () => {
    // mock event
    const handleClick = jest.fn();

    // render button
    render(<Button onClick={handleClick} />);

    // even triger
    const btn = screen.getByText("Click Me");
    fireEvent.click(btn);

    // expect value
    expect(handleClick).toHaveBeenCalled();
});