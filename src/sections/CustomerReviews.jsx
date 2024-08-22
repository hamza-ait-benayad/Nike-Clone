import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl m-auto font-bold capitalize text-center font-palanquin">
        what our <span className="text-coral-red"> customers </span> sya?
      </h3>
      <p className="max-w-lg text-center text-slate-gray m-auto info-text mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, culpa.
        Quasi voluptas eum quam quod expedita optio neque sed! Pariatur.
      </p>
      <div className="flex mt-14 justify-evenly max-lg:flex-col gap-14 items-center">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
