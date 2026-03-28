import { renderHook } from "@testing-library/react"
import { useDebounce } from "./useDebounce"

describe("useDebounce", () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it("should return initial value", () => {
        const { result } = renderHook(({ value }) => useDebounce(value, 500), {
            initialProps: { value: "hello" }
        })

        expect(result.current).toBe("hello")
    })

    it("should update debounce value after delay", async () => {
        const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
            initialProps: { value: "hello" }
        })

        rerender({ value: "world" })

        expect(result.current).toBe("hello")

        jest.advanceTimersByTime(500)

        expect(result.current).toBe("world")
    })

})