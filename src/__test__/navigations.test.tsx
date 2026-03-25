import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

test("navigate to about page", () => {
  const push = jest.fn();

  const mockedUseRouter = useRouter as jest.Mock;
  mockedUseRouter.mockReturnValue({ push });

  const Button = () => {
    const router = useRouter();

    return (
      <button onClick={() => router.push("/about")}>
        Go
      </button>
    );
  }

  render(<Button />);

  fireEvent.click(screen.getByText("Go"));

  expect(push).toHaveBeenCalledWith("/about");
});