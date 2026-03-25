import { getUser } from "./getUser";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "John" }),
  })
) as jest.Mock;

test("fetchUser returns data", async () => {
  const data = await getUser();

  expect(data.name).toBe("John");
});