import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ribbon from "../components/Ribbon";
import { renderWithProviders } from "../utils/utils-for-test";

describe("Ribbon", () => {
  beforeEach(() => {
    renderWithProviders(<Ribbon />);
  });
  it("contain all links", async () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);

    links.forEach((link) => {
      const textContent = link.textContent;
      expect(link).toBeInTheDocument();
      if (textContent?.includes("Home")) {
        expect(link).toHaveTextContent(/Home/i);
      } else if (textContent?.includes("About")) {
        expect(link).toHaveTextContent(/About/i);
      } else if (textContent?.includes("Contact")) {
        expect(link).toHaveTextContent(/Contact/i);
      }
    });
  });
});
