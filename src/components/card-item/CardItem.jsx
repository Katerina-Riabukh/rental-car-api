import { Wraper } from "./Carditem.styled";

const CardItem = ({ item }) => {
  const {
    brand,
    img,
    model,
    type,
    year,
    mileage,
    rentalCompany,
    functionalities,
    rentalPrice,
  } = item;

  return (
    <Wraper>
      <img src={img} alt={brand} />
      <h2>
        {brand}
        <span>{model},</span>
        {year}
        {rentalPrice}
      </h2>
      <p>Kyiv | Ukraine | {rentalCompany} | Premium</p>
      <p>
        {type}| {model} | {mileage} | {functionalities}
      </p>

      <button>Learn more</button>
    </Wraper>
  );
};

export default CardItem;
