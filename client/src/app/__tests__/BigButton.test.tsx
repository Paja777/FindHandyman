import { screen } from "@testing-library/react";
import BigButton, { BigButtonProps } from "../components/BigButton";
import '@testing-library/jest-dom'
import { renderWithProviders } from "../utils/utils-for-test";

describe("BigButton", () => {
  beforeEach(() => {
    renderWithProviders(<BigButton path="/" title="Search" />)
     
  });

  test("icon button should be rendered", () => {
    const iconEl = screen.getByRole("button");
    expect(iconEl).toBeInTheDocument();
  });

  test("text element should be rendered and got from props", () => {
    const textEl = screen.getByTestId("text");
    expect(textEl).toBeInTheDocument();
    const props: BigButtonProps = { path: "/", title: "Search" };
    expect(textEl).toHaveTextContent(props.title);
  });

  test("should not be text context", () => {
    const textEl = screen.queryByText(/Serch/i);
    expect(textEl).not.toBeInTheDocument();
  });

  
});
