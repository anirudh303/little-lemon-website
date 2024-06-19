import React from "react";
import ratings from "../../assets/Icons/rating.png";
import profile1 from "../../assets/images/profile1.jpg";
import profile2 from "../../assets/images/profile2-copy-0.jpg";
import profile3 from "../../assets/images/profile3.jpg";
import profile4 from "../../assets/images/profile2.jpg";
import bgImage from "../../assets/images/bg-testimonials.jpg";
function Testimonials() {
  const testimonialsInfo = [
    {
      name: "Alexa K.",
      review:
        "The delightful blend of spices in the Bruschetta makes every bite a joy at Little Lemon.",
    },
    {
      name: "Marco P.",
      review:
        "The freshness of the Greek salad was beyond my expectations. Crisp, flavorful, and perfectly dressed!",
    },
    {
      name: "Isabella T.",
      review:
        "You simply can't miss the Greek Salad here—it's a staple that brings me back every time!",
    },
    {
      name: "Julian S.",
      review:
        "A tranquil atmosphere paired with top-notch cuisine. Highly recommend the seasonal specials!",
    },
  ];

  return (
    <section className="flex flex-col items-center  w-full shadow-lg shadow-t-xl overflow-x-scroll">
      <hr className="w-4/5"></hr>
      <div className="flex flex-col justify-center items-center w-full mt-6  text-center p-4">
        <h1 className="text-5xl font-serif font-bold text-[#495e57]   w-full">
          What Our Customers Say
        </h1>
      </div>

      <div className="flex h-[600px]  mt-20 justify-center  mb-20 flex-shrink-0 w-8/10 text-[#495e57]  ">
        {testimonialsInfo.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-full w-[500px] h-[500px] bg-[#F3F7EC]  shadow-lg mx-36  my-10 p-8 flex flex-col items-center justify-around"
          >
            <h2 className="text-lg font-serif font-semibold my-1">
              {testimonial.name}
            </h2>
            <p className="font-sans font-medium">{testimonial.review}</p>
            <img
              className="w-1/4 mt-[-1rem] mb-4 rounded-full"
              src={ratings}
              alt="ratings"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
