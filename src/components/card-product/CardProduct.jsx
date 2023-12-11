import {
  AccessoriesUL,
  Header2,
  Header3,
  RentalConditionsLI,
  RentalConditionsUL,
  ShortDescription,
  ShortDescriptionWraper,
  Description,
  Span,
  Wraper,
  Numbers,
  Button,
  AccrssoriesLI,
} from "./CardProduct.styled";
import { v4 as uuidv4 } from "uuid";

const CardProduct = ({ item }) => {
  const {
    make,
    img,
    description,
    model,
    address,
    type,
    year,
    id,
    mileage,
    rentalConditions,
    functionalities,
    engineSize,
    rentalPrice,
    fuelConsumption,
    accessories,
  } = item;

  const rentalConditionsSplit = rentalConditions.split("\n");
  const country = address.split(" ")[4];
  const cityPrepear = address.split(" ")[3];
  const cityMiddle = cityPrepear.split("");
  cityMiddle.pop();
  const city = cityMiddle.join("");

  console.log(accessories);

  return (
    <Wraper>
      <img src={img} alt={make} width={461} height={248} />
      <Header2>
        {make}
        <Span>{model}</Span>,{year}
      </Header2>
      <ShortDescriptionWraper>
        <ShortDescription>
          {city} | {country} | id:{id} | year:{year} | type:{type}
        </ShortDescription>
        <ShortDescription>
          Fuel consumption: {fuelConsumption} | engineSize:{engineSize}
        </ShortDescription>
      </ShortDescriptionWraper>

      <Description>{description}</Description>

      <Header3>Accessories and functionalities:</Header3>
      {/* <AccessoriesUL>
        {accessories.map((i) => {
          console.log(accessories[0]);
          return <AccrssoriesLI key={uuidv4()}>{i}</AccrssoriesLI>;
        })}
        {functionalities.map((i) => {
          return <AccrssoriesLI key={uuidv4()}>{i}</AccrssoriesLI>;
        })}
      </AccessoriesUL> */}
      <AccessoriesUL>
        <AccrssoriesLI key={uuidv4()}>{accessories[0]} |</AccrssoriesLI>
        <AccrssoriesLI key={uuidv4()}>{accessories[1]} |</AccrssoriesLI>
        <AccrssoriesLI key={uuidv4()}>{accessories[2]}</AccrssoriesLI>
        <AccrssoriesLI key={uuidv4()}>{functionalities[0]} |</AccrssoriesLI>
        <AccrssoriesLI key={uuidv4()}>{functionalities[1]} |</AccrssoriesLI>
        <AccrssoriesLI key={uuidv4()}>{functionalities[2]}</AccrssoriesLI>
      </AccessoriesUL>

      <Header3>Rental Conditions: </Header3>
      <RentalConditionsUL>
        <RentalConditionsLI>
          <p>
            {rentalConditionsSplit[0].split(":")[0]}:
            <Numbers>{rentalConditionsSplit[0].split(":")[1]}</Numbers>
          </p>
        </RentalConditionsLI>
        <RentalConditionsLI>
          <p>{rentalConditionsSplit[1]}</p>
        </RentalConditionsLI>
        <RentalConditionsLI>
          <p>{rentalConditionsSplit[2]}</p>
        </RentalConditionsLI>
        <RentalConditionsLI>
          <p>
            Mileage: <Numbers>{mileage}</Numbers>
          </p>
        </RentalConditionsLI>
        <RentalConditionsLI>
          <p>
            Price: <Numbers>{rentalPrice}</Numbers>
          </p>
        </RentalConditionsLI>
      </RentalConditionsUL>

      {/* <h3>Rental company: {rentalCompany}</h3>
      <h3>Address: {address}</h3> */}

      <Button>Rental car</Button>
    </Wraper>
  );
};

export default CardProduct;
