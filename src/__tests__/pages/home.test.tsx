import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should renders a div content", () => {
    render(<Home />);

    const divContent = screen.getByRole("div");

    expect(divContent).toBeInTheDocument();
  });
});
