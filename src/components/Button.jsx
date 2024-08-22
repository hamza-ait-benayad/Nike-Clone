const Button = ({ label, iconURL, bgcol, textcol, borcol, fullwidth  }) => {
  return (
    <button
      className={`${bgcol ? bgcol : "bg-coral-red"} ${textcol ? textcol : "text-white" } flex px-7 py-4 
    justify-center items-center leading-none rounded-full 
    font-montserrat gap-2 border ${borcol ? borcol : "border-coral-red"} text-lg ${fullwidth && 'w-full'}`}
    >
      {label}
      {iconURL && <img
        src={iconURL}
        alt="arrow rigth icon"
        className="rounded-full ml-2 w-5 h-5"
      />}
    </button>
  );
};

export default Button;
