import { screen } from "@testing-library/react";
import BigButton from "./BigButton";
import { renderWithProviders } from "../utils/utils-for-test";

test("icon should be rendered", () => {
    renderWithProviders(<BigButton path="/" title="Search" />);
    const iconEl = screen.getByTestId("icon");
    expect(iconEl).toBeInTheDocument();
  });
