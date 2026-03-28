import { renderHook, waitFor } from "@testing-library/react"
import useFetch from "./useFetch"
import { json } from "stream/consumers"

describe("useFetch", () => {
    // clear mock API
    beforeEach(() => {
        jest.clearAllMocks()
        global.fetch = jest.fn()
    })

    it("should fetch data success", async () => {
        // init mock & return apa
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: async () => ({ name: "luthfi" })
        })

        // panggil hook
        const { result } = renderHook(() => useFetch("/user"))

        // expected value
        await waitFor(() => {
            expect(result.current.data).toBe({ name: "luthfi" })
        })
        expect(result.current.loading).toBe(false)
        expect(result.current.error).toBe(null)
    })

    it("should handle error", async () => {
        (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("api Error"))

        const { result } = renderHook(() => useFetch("/user"))


        await waitFor(() => {
            expect(result.current.error).toBeTruthy()
        })
        expect(result.current.data).toBe(null)
        expect(result.current.loading).toBe(false)
    })

    it("should set loading true while fetching", async () => {
        // Arrange
        let resolvePromise: any
        const promise = new Promise((res) => {
            resolvePromise = res
        })

        ;(global.fetch as jest.Mock).mockReturnValueOnce(promise)

        // Act
        const { result } = renderHook(() => useFetch("/users"))

        // Assert (sebelum selesai)
        expect(result.current.loading).toBe(true)

        resolvePromise({
            json: async () => ({})
        })

        await waitFor(() => {
            expect(result.current.loading).toBe(false)
        })
    })
})