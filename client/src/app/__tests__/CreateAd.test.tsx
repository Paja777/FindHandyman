import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../utils/utils-for-test";
import CreateAd from "../features/roleHandyman/CreateAd";

describe("CrateAd", () => {
  beforeEach(() => {
    renderWithProviders(<CreateAd  />);
  });

  test("button should be disabled", () => {
    const buttonEl = screen.getByRole("button", {name: /Create/i});
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toBeDisabled();
  });
  it("should be enabled after adding service", () => {
    const buttonEl = screen.getByRole("button", {name: /Create/i});
    const serviceTextElements = screen.getAllByPlaceholderText(/service name1/i);
    const priceTextElements = screen.getAllByPlaceholderText(/service price1/i);
    expect(priceTextElements[0]).toBeInTheDocument()
    expect(serviceTextElements[0]).toBeInTheDocument()
    fireEvent.change(serviceTextElements[0], {target : { value: "Pranje"}});
    expect(serviceTextElements[0]).toHaveValue('Pranje')
    fireEvent.change(priceTextElements[0], {target : { value: "$100"}});
    expect(priceTextElements[0]).toHaveValue('$100')
    expect(buttonEl).toBeDisabled();
  });
});
