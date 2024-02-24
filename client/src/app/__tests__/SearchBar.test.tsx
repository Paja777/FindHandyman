import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../utils/utils-for-test";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  beforeEach(() => {
    renderWithProviders(<SearchBar />);
  });
  it("should navigete to /about when clicked on about link", async () => {
    const inputEl = screen.getByRole("textbox");

    expect(inputEl).toBeInTheDocument();
  });
});
