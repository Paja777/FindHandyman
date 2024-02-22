import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import Ribbon from "../components/Ribbon";

const history = createMemoryHistory();

describe("Ribbon", () => {
  beforeEach(() => {
    renderWithProviders(<SideBar />);
  });
  it("should navigete to /about when clicked on about link", async () => {
    
    
    const user = userEvent.setup();
    
    expect(screen.getByText(/About/i).toBeInTheDocument());

    await user.click(screen.getByText(/About/i));

    expect(screen.getByText(/You are on About page/i)).toBeInTheDocument();
  });
});
