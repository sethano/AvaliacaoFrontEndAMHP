import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("should renders a main content", () => {
    render(<Home />);

    const mainContent = screen.getByRole("main");

    expect(mainContent).toBeInTheDocument();
  });
});
