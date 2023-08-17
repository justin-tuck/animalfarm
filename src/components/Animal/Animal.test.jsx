import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Animal from "./Animal";

describe("Animal test", () => {
  test("Should show Animal Type", () => {
    const animal = {
      type: "Bird",
      name: "Big",
      age: 45,
    };
    render(<Animal {...animal} />);
    const type = screen.getByText(/bird/i);
    expect(type).toBeDefined();
  });

  test("Should show Animal Name", () => {
    const animal = {
      type: "Bird",
      name: "Big",
      age: 45,
    };
    render(<Animal {...animal} />);
    const name = screen.getByText(/big/i);
    expect(name).toBeDefined();
  });

  test("Should show Animal Age", () => {
    const animal = {
      type: "Bird",
      name: "Big",
      age: 45,
    };
    render(<Animal {...animal} />);
    const age = screen.getByText(/45/i);
    expect(age).toBeDefined();
  });
});
