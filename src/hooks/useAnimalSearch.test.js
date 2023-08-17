import { describe, expect, test } from "vitest";
import { setupServer } from "msw/node";
import { graphql, rest } from "msw";
import useAnimalSearch from "./useAnimalSearch";

describe("Use Animal Search", () => {
  const posts = [
    {
      type: "Bird",
      name: "Big",
      age: 45,
      id: 1,
    },
  ];

  const restHandlers = [
    rest.get("http://localhost:8080?q=Big", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(posts));
    }),
  ];

  const server = setupServer(...restHandlers, ...[]);

  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

  //  Close server after all tests
  afterAll(() => server.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers());

  beforeEach(() => {
    window.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  test("Should show no animals found if empty", () => {
    // const [animals, useAnimalSearch] = useAnimalSearch();
    // expect(animals.length).toBe(0);
  });
});
