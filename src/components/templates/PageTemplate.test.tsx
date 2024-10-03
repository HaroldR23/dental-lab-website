import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageTemplate from "./PageTemplate";

describe("PageTemplate", () => {
  it("should render a header and a footer components", () => {
    render(
      <PageTemplate body={<div>Body</div>} carousel={<div>Carousel</div>} />
    );

    const header = screen.getByTestId("header");
    const footer = screen.getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
  it("should render the carousel and body component when they are given as prop", () => {
    render(
      <PageTemplate body={<div>Body</div>} carousel={<div>Carousel</div>} />
    );

    const carousel = screen.getByText("Carousel");
    const body = screen.getByText("Body");

    expect(body).toBeInTheDocument();
    expect(carousel).toBeInTheDocument();
  });

  it("should not render the carousel component when it is not given as prop", () => {
    render(<PageTemplate body={<div>Body</div>} />);

    const carousel = screen.queryByText("Carousel");

    expect(carousel).not.toBeInTheDocument();
  });
});