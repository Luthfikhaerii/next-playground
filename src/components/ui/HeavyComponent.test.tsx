import { render, screen } from "@testing-library/react"
import HeavyComponent from "./HeavyComponent"

test("heavy component render", () => {
    render(<HeavyComponent />)

    const title = screen.getByText("This is Heavy Component")

    expect(title).not.toBeNull()
})