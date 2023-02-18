import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

test("Button", () => {
  render(<Button />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
