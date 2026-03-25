import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

test("counter increments", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});