import { star } from "../assets/icons";

const ReviewCard = ({ customerName, feedback, imgURL, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt={customerName}
        width={120}
        className="rounded-full object-cover"
      />
      <p className="text-center text-slate-gray max-w-sm mt-6 info-text">
        {feedback}
      </p>
      <div className="flex gap-2 text-slate-gray text-xl font-montserrat mt-3 leading-normal ">
        <img src={star} alt="star" width={24} height={24} />({rating})
      </div>
      <h2 className="mt-1 font-bold text-3xl">{customerName}</h2>
    </div>
  );
};

export default ReviewCard;
