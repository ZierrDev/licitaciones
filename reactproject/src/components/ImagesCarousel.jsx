import Carousel from "../containers/Carousel";

const elements = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    alt: "3D rendering of an imaginary orange planet in space",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    alt: "3D rendering of an imaginary green planet in space",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    alt: "3D rendering of an imaginary blue planet in space",
  },
];

const ImagesCarousel = () => {
  return (
    <div>
      <Carousel elements={elements} />
    </div>
  );
};

export default ImagesCarousel;
