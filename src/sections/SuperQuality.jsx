import { shoe8 } from "../assets/images";
import Button from "../components/Button";


const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex flex-col lg:flex-row gap-10 justify-between max-container w-full"
    >
      <div className="flex flex-1 flex-col justify-center items-start">
        <h2
        className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg"
        >
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p
        className="mt-4 info-text lg:max-w-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed
          pariatur omnis consequuntur nobis? Eum atque dolores, harum error
          vitae in fuga, dicta reiciendis odit praesentium, repellendus
          repudiandae! Aperiam, tempore! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat odit delectus assumenda architecto.
        </p>
        <p
        className="mt-6 info-text lg:max-w-lg"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          officia amet aspernatur commodi.
        </p>
        <div className="mt-11">
        <Button label={"View details"} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={shoe8} alt="shoes" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
