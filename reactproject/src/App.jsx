import WhatsAppBubble from "./components/WhatsAppBubble/index";
import Home from "./components/Home";
import Services from "./components/Services";

const App = () => {
  return (
    <div className='bg-aqua-teal-950 text-aqua-teal-50'>
      <Home />
      <Services />
      <WhatsAppBubble />
    </div>
  );
};

export default App;
