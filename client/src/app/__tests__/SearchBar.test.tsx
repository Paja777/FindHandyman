// import { screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { renderWithProviders } from "../utils/utils-for-test";
// import SearchBar from "../components/SearchBar";

// describe("SearchBar", () => {
//   beforeEach(() => {
//     renderWithProviders(<SearchBar />);
//   });
//   it("should navigete contain text that user type", async () => {
//     const inputEl = screen.getByRole("textbox");

//     expect(inputEl).toBeInTheDocument();
//     fireEvent.change(inputEl, { target: { value: "Proba, jedan dva" } });
//     expect(inputEl).toHaveValue("Proba, jedan dva");
//   });
//   it("should clear input field after button click", async () => {
//     const buttonEl = screen.getByRole("button");
//     const inputEl = screen.getByRole("textbox");

//     expect(buttonEl).toBeInTheDocument();
//     fireEvent.click(buttonEl);
//     expect(inputEl).toHaveValue("");
//   });
// });
