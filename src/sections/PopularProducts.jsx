import PopularProdutCard from "../components/PopularProdutCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular </span>Products
        </h2>
        <p className="font-montserrat lg:max-w-lg text-slate-gray mt-2">
          Experiance top-notch quality and style with our sought-after
          selections. Discover a world of comfort, desing, and value
        </p>
      </div>
      <div
        className="grid lg:grid-cols-4 md:grid-cols-3 
      sm:grid-cols-2 sm:gap-4 justify-center
      gap-14 mt-16"
      >
        {products.map((product) => (
          <PopularProdutCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
