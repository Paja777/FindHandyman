import App from "../layout/App";
import { renderWithProviders } from "../utils/utils-for-test";
import { getByText, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  test("about link should be in app", async () => {
    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();

    await userEvent.click(contactLink);
    const contactText =  screen.getByText("Contact Page");

    await waitFor(() => {
      expect(contactText).toBeInTheDocument();
    });
  });
});
