import { Wraper } from "./CardProduct.styled";

const CardProduct = ({ item }) => {
  const {
    brand,
    img,
    description,
    model,
    address,
    type,
    year,
    id,
    mileage,
    rentalCompany,
    rentalConditions,
    functionalities,
    engineSize,
    rentalPrice,
    fuelConsumption,
    accessories,
  } = item;

  return (
    <Wraper>
      <img src={img} alt={brand} />
      <h2>
        {brand}
        <span>{model},</span>
        {year}
      </h2>
      <p>
        Kyiv | Ukraine | id:{id} | year:{year} | type:{type}
      </p>
      <p>
        Fuel consumption: {fuelConsumption}| engineSize:{engineSize}
      </p>

      <p>{description}</p>

      <h3>Accessories and functionalities:</h3>
      <ul>
        {accessories.map((item) => {
          return <li>{item}</li>;
        })}
        {functionalities.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      <h3>Rental Conditions: </h3>
      <ul>
        {rentalConditions.map((item) => {
          return (
            <li>
              <p>{item}</p>
            </li>
          );
        })}
        <li>
          <p>Mileage: {mileage}</p>
        </li>
        <li>
          <p>Price: {rentalPrice}</p>
        </li>
      </ul>

      <h3>Rental company: {rentalCompany}</h3>
      <h3>Address: {address}</h3>

      <button>Rental car</button>
    </Wraper>
  );
};

export default CardProduct;
