import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../utils/utils-for-test";
import CreateAd from "../features/roleHandyman/CreateAd";

describe("CrateAd", () => {
  beforeEach(() => {
    renderWithProviders(<CreateAd />);
  });

  test("button should be disabled", () => {
    const buttonEl = screen.getByRole("button", { name: /Create/i });
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toBeDisabled();
  });
  it("should be in component", () => {
    const describeTextElement = screen.getByPlaceholderText("Describe your services (maximum 300 caracters)");
    expect(describeTextElement).toBeInTheDocument();
    
    
    fireEvent.change(describeTextElement, {target : { value: "aloooooooooooooooooooooooooooooooooooooooooooooooooooooo"}});
    expect(describeTextElement).toHaveValue('aloooooooooooooooooooooooooooooooooooooooooooooooooooooo')
  });
  // it("should be enabled after adding service", () => {
    // const buttonEl = screen.getByRole("button", {name: /Create/i});
    // const serviceTextElements = screen.getByPlaceholderText(/service name1/i);
    // const priceTextElements = screen.getByPlaceholderText(/service price1/i);
    // const describeTextElements = screen.getByTestId("describe");
    // expect(priceTextElements).toBeInTheDocument()
    // expect(serviceTextElements).toBeInTheDocument()
    // expect(describeTextElements).toBeInTheDocument()
    // fireEvent.change(serviceTextElements, {target : { value: "Pranje"}});
    // expect(serviceTextElements).toHaveValue('Pranje')
    // fireEvent.change(priceTextElements, {target : { value: "$100"}});
    // expect(priceTextElements).toHaveValue('$100')
    // fireEvent.change(describeTextElements, {target : { value: "aloooooooooooooooooooooooooooooooooooooooooooooooooooooo"}});
    // expect(describeTextElements).toHaveValue('aloooooooooooooooooooooooooooooooooooooooooooooooooooooo')
    // expect(buttonEl).toBeDisabled();
  // });
});
