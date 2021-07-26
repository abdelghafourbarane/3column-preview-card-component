import CardContainer from "../card-container/CardContainer.component";

import classes from "./CardsContainer.styles.module.scss";

const CARDS = [
  {
    id: 1,
    icon: "/assets/images/icon-sedans.svg",
    title: "SEDAN",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    backColor: "#e28525",
  },
  {
    id: 2,
    icon: "/assets/images/icon-suvs.svg",
    title: "SUVS",
    description:
      "Take a SUV for its spacious interior,power,and versality. Perfect for your next family vacation and off-road adventures.",
    backColor: "#016972",
  },
  {
    id: 3,
    icon: "/assets/images/icon-luxury.svg",
    title: "LUXURY",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style",
    backColor: "#00403f",
  },
];

function CardsContainer() {
  return (
    <div className={classes.MainContainer}>
      {CARDS.map((card) => (
        <CardContainer key={card.id} {...card} />
      ))}
    </div>
  );
}

export default CardsContainer;
