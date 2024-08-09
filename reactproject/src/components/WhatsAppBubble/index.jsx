import WhatsAppIcon from "./assets/WhatsAppIcon";

const WhatsAppBubble = () => {
  return (
    <div className='bg-lime-500 rounded-full fixed p-3 w-20 bottom-0 right-0 mx-10 my-5 transition-all duration-700 hover:my-10'>
      <a href='https://api.whatsapp.com/send?phone=573196475253'>
        <WhatsAppIcon className='fill-lime-50 w-full h-full' />
      </a>
    </div>
  );
};

export default WhatsAppBubble;
