import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("counter increments", () => {
  // panggil hook
  const { result } = renderHook(() => useCounter())

  // scenario method
  act(() => {
    result.current.increment();
  })

  // expect value
  expect(result.current.count).toBe(1)
});