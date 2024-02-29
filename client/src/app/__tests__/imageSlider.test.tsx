import ImageSlider from "../components/ImageSlider";
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { renderWithProviders } from "../utils/utils-for-test";
import image1 from "../../assets/avatar.jpg";
import image2 from "../../assets/electric.png";

const expectedStyles = {
    width: '3vw',
    height: '60vh',
    opacity: '0.5',
    backgroundColor: 'grey',
  };

describe("ImageSlider", () => {
  beforeEach(() => {
    renderWithProviders(<ImageSlider images={[image1, image2]} />);
  });

  it("should contain image/images", () => {
    const images = screen.queryAllByRole("img");
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
});
    it("should preview on click", async() => {
        const sideButtons = screen.getAllByTestId("sideButton")
        expect(sideButtons[0]).toBeInTheDocument();

        const currentImage = screen.getByTestId("current-image")
        expect(currentImage).toHaveAttribute('src', image1);

        // on click should change image
        fireEvent.click(sideButtons[1]);

        await waitFor(() => {
            expect(currentImage).toHaveAttribute('src', image2);
        })
    })
});
