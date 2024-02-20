import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/utils-for-test";
import SideBar from "../components/SideBar";

beforeEach(() => {
  renderWithProviders(<SideBar />);
});

test("It should have heading text with word Welcome", () => {
  const welcomeTextEl = screen.getByText(/Welcome/i);
  expect(welcomeTextEl).toBeInTheDocument();
});

test("It should have text context 'Choose options:' ", () => {
  const textEl = screen.getByText(/Choose options:/i);
  expect(textEl).toBeInTheDocument();
});

test("It should have text context 'Looking for handyman ads?' ", () => {
  const textEl = screen.getByText(/Looking for handyman ads?/i);
  expect(textEl).toBeInTheDocument();
});

test("It should display all BigButton elements", () => {
  const bigButtonElements = screen.queryAllByText(
    /Create your ad|Search customer ads|Search handyman ads/i
  );
  // Assert that all BigButton elements are present in the document
  expect(bigButtonElements).toHaveLength(3);
  bigButtonElements.forEach((button) => {
    expect(button).toBeInTheDocument();
  });
});
