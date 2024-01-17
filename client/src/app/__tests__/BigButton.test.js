import { screen } from "@testing-library/react";
import BigButton from "../components/BigButton";
import { renderWithProviders } from "../utils/utils-for-test";

test("icon should be rendered", () => {
    renderWithProviders(<BigButton path="/" title="Search" />);
    const iconEl = screen.getByTestId("icon");
    expect(iconEl).toBeInTheDocument();
  });

  test("text element should be rendered", () => {
    renderWithProviders(<BigButton path="/" title="Search" />);
    const textEl = screen.getByTestId("text");
    expect(textEl).toBeInTheDocument();
  })
