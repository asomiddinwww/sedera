import logoimg from "../components/img/logo.png";
import insta from "../components/img/insta.png";
import face from "../components/img/fack.png";




const Footer = () => {
  return (
    <div className="pt-3.5 pb-3.5 w-full shadow-lg z-11 relative">
      <div className="max-w-[1220px] pl-3 pr-3 m-auto flex items-center flex-col justify-between">
        <div className="flex items-center justify-between w-full pb-13 border-[#359740] border-b-1 max-[758px]:flex-col gap-5">
          <ul className="flex gap-5">
            <li className="p-1 pr-7 border-r-1">ALL PRODUCTS</li>
            <li className="p-1 pr-7 border-r-1">ABOUT SEEDRA</li>
            <li className="p-1 pr-7 border-r-1">OUR BLOG</li>
          </ul>
          <img src={logoimg} className="w-30" alt="" />
          <ul className="flex gap-5">
            <li className="p-1 pr-7 border-r-1">Terms&Conditions</li>
            <li className="p-1 pr-7 border-r-1">Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-between pt-4">
          <div className="flex gap-5">
            <img src={insta} alt="" />
            <img src={face} alt="" />
          </div>
          <div>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
