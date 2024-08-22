import { star } from "../assets/icons";

const PopularProdutCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="text-slate-gray flex gap-2.5 mt-8">
        <img src={star} alt="rating" width={24} />
        <p className="text-xl leading-normal font-montserrat">(4.5)</p>
      </div>
      <h3
        className=" text-2xl font-semibold 
      mt-2 font-palanquin leading-normal"
      >
        {name}
      </h3>
      <p
        className="text-coral-red 
        text-2xl font-montserrat 
        font-semibold mt-2 leading-normal"
      >
        {price}
      </p>
    </div>
  );
};

export default PopularProdutCard;
