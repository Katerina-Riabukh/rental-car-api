import { Wraper } from "./Carditem.styled";

const CardItem = ({ item }) => {
  const {
    address,
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
  const country = address.split(" ")[4];
  const city = address.split(" ")[3];

  return (
    <Wraper>
      <img src={img} alt={brand} width={270} height={268} />
      <h2>
        {brand}
        <span>{model},</span>
        {year}
        {rentalPrice}
      </h2>
      <p>
        {city} | {country} | {rentalCompany}
      </p>
      <p>
        {type}| {model} | {mileage} | {functionalities}
      </p>

      <button>Learn more</button>
    </Wraper>
  );
};

export default CardItem;
