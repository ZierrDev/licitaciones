import Header from "./containers/Header";
import ImagesCarousel from "./components/ImagesCarousel";
import WhatsAppBubble from "./components/WhatsAppBubble/index";

const App = () => {
  return (
    <>
      <Header>
        <ImagesCarousel />
      </Header>
      <WhatsAppBubble />
      <h1 className='text-4xl'>Hola Mundo</h1>
    </>
  );
};

export default App;
