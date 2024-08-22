const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex-1 sm:min-w[350px] rounded-[20px] px-10 py-16 shadow-3xl w-full">
      <div className="flex justify-center items-center w-11 h-11 rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-bold text-3xl mt-6 leading-normal">{label}</h3>
      <p className="text-slate-gray mt-3 break-words font-montserrat text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
