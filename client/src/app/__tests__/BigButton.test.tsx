import { screen } from "@testing-library/react";
import BigButton, { BigButtonProps } from "../components/BigButton";
import { renderWithProviders } from "../utils/utils-for-test";

beforeEach(() => {
  const title = "Search";
  renderWithProviders(<BigButton path="/" title={title} />);
});

test("icon should be rendered", () => {
  const iconEl = screen.getByTestId("icon");
  expect(iconEl).toBeInTheDocument();
});

test("text element should be rendered", () => {
  const textEl = screen.getByTestId("text");
  expect(textEl).toBeInTheDocument();
  const props: BigButtonProps = { path: "/", title: "Search" };
  expect(textEl).toHaveTextContent(props.title);
});
