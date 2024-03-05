// import { screen, fireEvent, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { renderWithProviders } from "../utils/utils-for-test";
// import SearchBar from "../components/SearchBar";
// import HomePage from "../layout/HomePage";

// // integrational test

// describe("HomePage", () => {
//   beforeEach(() => {
//     renderWithProviders(<HomePage />);
//   });
//   it("should search ads when user types in search textbox", async () => {
//     const inputEl = screen.getByRole("textbox");
//     expect(inputEl).toBeInTheDocument();
  
//     // Type in the textbox
//     fireEvent.change(inputEl, { target: { value: "Struja" } });
  
//     // Wait for the ad card to appear
//     setTimeout(async () => {

//       const ad1 = await screen.findByText("jocko is looking for help in category: Struja");
//       expect(ad1).toBeInTheDocument();
//       const ad2 = await screen.findByText("jocko is looking for help in category: electricity");
//       expect(ad1).not.toBeInTheDocument();
//     }, 4000)
//   });
// });
