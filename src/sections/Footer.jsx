import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={footerLogo} alt="footerLogo" width={230} height={48} />
        <p className="text-slate-gray mt-6 text-lg max-w-md leading-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          distinctio provident. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Similique distinctio provident.
        </p>
      </div>
      <div className="flex gap-4 mt-10">
        {socialMedia.map((e) => (
          <div
            className="bg-white rounded-full flex justify-center items-center p-2.5"
            key={e.alt}
          >
            <a href="">
              <img src={e.src} alt={e.alt} width={32} />
            </a>
          </div>
        ))}
      </div>
      <div className="text-white mt-16 flex  justify-start gap-14 ">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="flex flex-col">
            <h3 className="text-3xl font-montserrat">{footerLink.title}</h3>
            <div className="flex flex-col gap-4 justify-start mt-6 ">
              {footerLink.links.map((link) => (
                <a
                  href=""
                  key={link.name}
                  className="text-slate-gray hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div 
      className="text-slate-gray mt-16 flex justify-between text-xl font-palanquin font-bold"
      >
        <h2>copyright</h2>
        <h2>Terms & Conditions</h2>
      </div>
    </footer>
  );
};

export default Footer;
