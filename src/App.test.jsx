import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

import { graphql, rest } from "msw";
import App from "./App";

describe("App test", () => {
  describe("Basic App layout", () => {
    beforeEach(() => {
      // window.ResizeObserver = vi.fn().mockImplementation(() => ({
      //   observe: vi.fn(),
      //   unobserve: vi.fn(),
      //   disconnect: vi.fn(),
      // }));
      vi.mock("./hooks/useAnimalSearch", () => ({
        default: () => {
          return [[], vi.fn()];
        },
      }));
      render(<App />);
    });
    test("should have header of animal farm", () => {
      const header = screen.getByText(/Animal Farm/i);
      expect(header).toBeDefined();
    });
    test("should have an input for Animal Search", () => {
      const searchField = screen.getByLabelText(/animal search/i);
      expect(searchField).toBeDefined();
    });
    test("Show no animals found if no animals", () => {
      const noAnimalsFoundMessage = screen.getByText(/No animals found./i);
      expect(noAnimalsFoundMessage).toBeDefined();
    });
    test("Should retrieve animals", async () => {
      const noAnimalsFoundMessage = screen.getByText(/No animals found./i);
      const searchField = screen.getByLabelText(/animal search/i);
      await userEvent.type(searchField, "Big");
      expect(noAnimalsFoundMessage).toBeDefined();
    });
  });
});
