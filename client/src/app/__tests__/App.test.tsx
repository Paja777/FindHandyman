import App from "../layout/App";
import { renderWithProviders } from "../utils/utils-for-test";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("App", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  test("contact link should take to Contact page", async () => {
    const contactLink = screen.getByText(/About/i);
    expect(contactLink).toBeInTheDocument();

    await userEvent.click(contactLink);

    expect(screen.getByText(/You are on the About page/i)).toBeInTheDocument();
  });
});
