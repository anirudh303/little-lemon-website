import React from "react";
import bruschetta from "../../assets/images/bruchetta.svg"; // Ensure correct spelling in the import
import salad from "../../assets/images/greek-salad1.jpg";
import dessert from "../../assets/images/lemon-dessert1.jpg";
import { Button, Card } from "react-bootstrap";

// Data for specials
const specialsData = [
  {
    img: salad,
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    img: bruschetta, // Corrected spelling here
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
  },
  {
    img: dessert,
    title: "Lemon Cake",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function SpecialCard({ img, title, price, description }) {
  return (
    <Card className="p-8 mt-8 w-96 shadow-lg shadow-t-xl  overflow-hidden">
      <Card.Img
        variant="top"
        src={img}
        className="w-full rounded-lg mt-[-0.2em] shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <Card.Body className="font-sans mr-4 p-4 leading-8 h-64">
        <div className="flex justify-between items-center">
          <Card.Title className="font-medium text-lg">{title}</Card.Title>
          <p className="text-slate-600 text-xl">${price}</p>
        </div>
        <Card.Text className="h-40 flex mb-4">{description}</Card.Text>
        <Button className="mr-2 bg-[#495e57] text-[#fdfae9] hover:bg-[#efe6c1] hover:text-slate-600 font-bold py-2 px-4 rounded">
          Order a delivery
        </Button>
      </Card.Body>
    </Card>
  );
}

function Specials() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-wrap justify-between items-center w-full mb-8">
        <h3 className="text-3xl font-serif mt-5 pl-20 mb-1 text-[#495e57] font-semibold">
          This Week Specials!
        </h3>
        <button className="mr-7 bg-[#495e57] text-white hover:bg-[#efe6c1] hover:text-slate-600 font-sans font-bold text-lg w-48 h-12 mt-8 rounded-full shadow transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md">
          Online Menu
        </button>
      </div>
      <div className="flex justify-around flex-wrap w-full mb-12 mt-[-2em]">
        {specialsData.map((item, index) => (
          <SpecialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Specials;
