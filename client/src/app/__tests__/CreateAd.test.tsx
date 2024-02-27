import { fireEvent, screen, waitFor } from "@testing-library/react";
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
    const describeTextElement = screen.getByPlaceholderText(
      "Describe your services (maximum 300 caracters)"
    );
    expect(describeTextElement).toBeInTheDocument();
    fireEvent.change(describeTextElement, {
      target: {
        value: "aloooooooooooooooooooooooooooooooooooooooooooooooooooooo",
      },
    });
    expect(describeTextElement).toHaveValue(
      "aloooooooooooooooooooooooooooooooooooooooooooooooooooooo"
    );
  });
  it("should be enabled after adding service", async () => {
    const buttonEl = screen.getByRole("button", { name: /Create/i });
    const serviceTextElement = screen.getByPlaceholderText(/service name1/i);
    const priceTextElement = screen.getByPlaceholderText(/service price1/i);
    expect(priceTextElement).toBeInTheDocument();
    expect(serviceTextElement).toBeInTheDocument();
    fireEvent.change(serviceTextElement, { target: { value: "Pranje" } });
    expect(serviceTextElement).toHaveValue("Pranje");
    fireEvent.change(priceTextElement, { target: { value: "$100" } });
    expect(priceTextElement).toHaveValue("$100");
    // wait for button to become enabled
    await waitFor(() => {
      expect(buttonEl).toBeEnabled();
    });
  });
});
