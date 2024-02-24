import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ribbon from "../components/Ribbon";
import { renderWithProviders } from "../utils/utils-for-test";

describe("Ribbon", () => {
  beforeEach(() => {
    renderWithProviders(<Ribbon />);
  });
  it("contain all links", async () => {
    const aboutText = screen.getAllByRole('link');
    aboutText.forEach(link => {

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(/About/i || /Home/i || /Contact/i);
    })

  });
});
