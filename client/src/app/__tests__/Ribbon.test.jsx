import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ribbon from "../components/Ribbon";
import { renderWithProviders } from "../utils/utils-for-test";

describe("Ribbon", () => {
  beforeEach(() => {
    renderWithProviders(<Ribbon />);
  });
  it("should navigete to /about when clicked on about link", async () => {
    const aboutText = screen.getByText(/About/i);
    expect(aboutText).toBeInTheDocument();

    fireEvent.click(aboutText)
    const aboutPageText = screen.getByText(/You are on About page/i);

    await expect(aboutPageText).toBeInTheDocument();
  });
});
