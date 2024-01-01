import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import { review2, review4, review5 } from "../assets/images";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const review = [
    {
      desc: "I just came to Burger King with my dad and they had a great customer service. They have patience with customers. Also, they made good food such as burgers (whoppers). Fries tastes good too! I will most likely come back again.",
      imgURL: review4,
      name: "Josh",
      address: "EL Paso, TX",
    },
    {
      desc: "My wife and I came to this BK for dinner and it was so good. The service was so good and the food was very good and made just how we wanted it.. We recommend everyone to come to this one if you want good bk food!",
      imgURL: review2,
      name: "Patrick",
      address: "Saint Petersburg, FL",
    },
    {
      desc: "The staff is very friendly and efficient. Food is always great. The store is always clean. I go here a lot because of the friendly people and great service. Ms Wendy and the ladies are great at their job and the service is always quick.",
      imgURL: review5,
      name: "Laura",
      address: "Dawson Creek, Other",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex(currentIndex + review.length - 1) % review.length;
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % review.length);
  };

  return (
    <section
      id="review"
      className="container bg-primaryColorLight dark:bg-darkColorLight mb-10"
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="sec-title">Customer Review</h2>
        <div className="seperator mx-auto"></div>
        <p className="para">
          The original HOME OF THE WHOPPER, our commitment to ingredients,
          signature recipes, and end-to-end online Burger.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-5 rounded-lg p-6 bg-primaryColor dark:bg-darkColorLight mt-10">
          <p className="para">{review[currentIndex].desc}</p>
          <div className="flex items-center">
            <button
              className="text-sm relative text-secondaryColor -top-6 right-5"
              onClick={handlePrev}
            >
              <FaLessThan />
            </button>
            <img
              src={review[currentIndex].imgURL}
              alt={review[currentIndex].name}
              className="w-12 h-12 rounded-full"
            />

            <div className="ml-4">
              <p className="font-oswald uppercase">
                {review[currentIndex].name}
              </p>
              <p className="para">{review[currentIndex].address}</p>
            </div>
            <FaQuoteRight className="text-4xl text-secondaryColor ml-auto" />
            <button
              className="text-sm text-secondaryColor relative -top-6 -right-5"
              onClick={handleNext}
            >
              <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
