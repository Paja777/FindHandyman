import AdsList from "../AdsList";
import { renderWithProviders } from "../../utils/utils-for-test";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

describe("AdsList", () => {
  beforeEach(() => {
    renderWithProviders(<AdsList ads={[]} />);
  });

  it("should render ad on app init", async () => {
    const ads = await screen.findByText('');
    
  });

  
});