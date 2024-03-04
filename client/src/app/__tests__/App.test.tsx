// import App from "../layout/App";
// import { renderWithProviders } from "../utils/utils-for-test";
// import {
//   fireEvent,
//   getByText,
//   render,
//   screen,
//   waitFor,
// } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { BrowserRouter, MemoryRouter } from "react-router-dom";

// describe("App", () => {
//   beforeEach(() => {
//     renderWithProviders(<App />);
//   });

//   test("should contain about link and github link", async () => {
//     const aboutLink = screen.getByText(/About/i);
//     
//     expect(aboutLink).toBeInTheDocument();

//     fireEvent.click(aboutLink);

//     await waitFor(() => {
//       const aboutPage = screen.findByTestId("about-page");
//       
//       expect(aboutPage).toBeInTheDocument();
//     });
//   });
// });
