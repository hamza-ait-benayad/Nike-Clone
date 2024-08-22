import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed
          pariatur omnis consequuntur nobis? Eum atque dolores, harum error
          vitae in fuga, dicta reiciendis odit praesentium, repellendus
          repudiandae! Aperiam, tempore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat odit delectus assumenda architecto.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          officia amet aspernatur commodi.
        </p>
        <div className="mt-11 flex gap-4 flex-wrap">
          <Button label={"Shop Now"} iconURL={arrowRight} />
          <Button
            label={"Learn more"}
            bgcol={"bg-white"}
            textcol={"text-slate-gray"}
            borcol={"border-slate-gray"}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
