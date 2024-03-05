import App from "../App";
import { renderWithProviders } from "../../utils/utils-for-test";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

describe("App", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it("should change path to AboutPage when link is clicked", async () => {
    const aboutLink = screen.getByRole("link", { name: /About/i });
    expect(aboutLink).toBeInTheDocument();
    // click on link
    fireEvent.click(aboutLink);
    // timer for slow loading
    setTimeout(async () => {
      const aboutPage = await screen.findByTestId("about-page");
      expect(aboutPage).toBeInTheDocument();
    }, 4000);
  });

  it("should change path to ContactPage when link is clicked", async () => {
    const contactLink = screen.getByRole("link", { name: /Contact/i });
    expect(contactLink).toBeInTheDocument();
    // click on link
    fireEvent.click(contactLink);
    // timer for slow loading
    setTimeout(async () => {
      const contactPage = await screen.findByTestId("contact");
      expect(contactPage).toBeInTheDocument();
    }, 4000);
  });

  it("should change path to HomePage when link is clicked", async () => {
    const homeLink = screen.getByRole("link", { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    // click on link
    fireEvent.click(homeLink);
    // timer for slow loading
    setTimeout(async () => {
      const homePage = await screen.findByTestId("contact");
      expect(homePage).toBeInTheDocument();
    }, 4000);
  });
});
