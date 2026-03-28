import { getUser } from "./getUser";

describe("getUser",() => {
    beforeEach(() => {
        jest.clearAllMocks()
        global.fetch = jest.fn()
    })

    it("should success return data", async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: async () => ({ name: "luthfi" })
        })

        const data = await getUser()

        expect(data).toEqual({ name: "luthfi" })
    })
})