import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10 pt-20">
      <h3 className="text-4xl font-palanquin font-bold capitalize lg:max-w-lg leading-[68px]">
        Sign Up for <span className="text-coral-red">updates</span> & Newsletter
      </h3>
      <div
        className="flex gap-5 items-center p-2.5 lg:max-w-[40%] w-full 
      rounded-full sm:border sm:border-slate-gray"
      >
        <input type="text" className="input" placeholder="subscribe@nike.com" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"SignUp"} fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
