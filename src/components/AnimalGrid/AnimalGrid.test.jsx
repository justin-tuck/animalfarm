import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AnimalGrid from "./AnimalGrid";

describe("Animal Grid test", () => {
  beforeEach(() => {
    window.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  test("Should show no animals found if empty", () => {
    const animals = [];
    render(<AnimalGrid animals={animals} />);
    const noAnimalsFoundMessage = screen.getByText(/No animals found./i);
    expect(noAnimalsFoundMessage).toBeDefined();
  });
});
