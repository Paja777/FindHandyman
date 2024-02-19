import { v4 as uuidv4 } from "uuid";
import plumbing from "../../assets/plumb.webp";
import plumbing2 from "../../assets/plumbing.jpg";
import electricity from "../../assets/el.jpg";
import electricity2 from "../../assets/electric.png";
import painting from "../../assets/interior-painting.png";
import painting2 from "../../assets/painter.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.png";
import img31 from "../../assets/imag31.png";
import img32 from "../../assets/img32.webp";
import painting3 from "../../assets/painting3.webp";
import painting4 from "../../assets/painting4.jpg";
import pl1 from "../../assets/pl1.jpg";
import pl2 from "../../assets/pl2.webp";
import david1 from "../../assets/david1.jpg";
import david2 from "../../assets/david2.jpg";
import puser1 from "../../assets/puser1.png";
import puser2 from "../../assets/puser2.png";
import euser1 from "../../assets/euser1.webp";
import euser2 from "../../assets/euser2.webp";
import plumbuser1 from "../../assets/plumbuser1.jpg";
import plumbuser2 from "../../assets/plumbuser2.webp";

const lorelIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nulla vehicula turpis nec ipsum varius viverra. Sed lobortis mi in odio 
  interdum, in consectetur dui vestibulum. Duis posuere, leo at efficitur 
  porttitor, elit eros vestibulum ex, a posuere purus orci vel libero.`;

export const dummyListUser = [
    {
      id: uuidv4(),
      name: "Jovan",
      description: lorelIpsum,
      category: "painting",
      contact: "065225252",
      rating: 4,
      images: [img1, puser1, puser2],
    },
    {
      id: uuidv4(),
      name: "Marko",
      description: lorelIpsum,
      category: "electricity",
      contact: "06522400",
      rating: 4,
      images: [img2, euser1, euser2],
    },
    {
      id: uuidv4(),
      name: "Filip",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065244588",
      rating: 4,
      images: [img3, plumbuser1, plumbuser2],
    },
    {
      id: uuidv4(),
      name: "David",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065233388",
      rating: 4,
      images: [david1, david2],
    },
  ];

export const dummyListHandyman = [
    {
      id: uuidv4(),
      name: "Milos",
      description: lorelIpsum,
      category: "painting",
      contact: "065225252",
      rating: 4,
      images: [painting, painting3, painting4, painting2],
    },
    {
      id: uuidv4(),
      name: "Dragan",
      description: lorelIpsum,
      category: "electricity",
      contact: "06522000",
      rating: 4,
      images: [electricity, electricity2, img31, img32],
    },
    {
      id: uuidv4(),
      name: "Bora",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065445588",
      rating: 4,
      images: [plumbing, pl1, pl2, plumbing2],
    },
    {
      id: uuidv4(),
      name: "Pera",
      description: lorelIpsum,
      category: "plumbing",
      contact: "065445577",
      rating: 4,
      images: [p1, p2],
    },
  ];