import { useState } from "react";
import { Checkbox, Heart, IMG, Wraper } from "./Carditem.styled";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { favoriteslistAdd, favoritesListDelete } from "../../redux/filterSlice";

const CardItem = ({ item }) => {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
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

  // const [favoritesList, setFavoriteslist] = useState([]);

  // localStorage.setItem("favoritesList", JSON.stringify(favoritesList));

  const handleChange = () => {
    setChecked(!checked);
    if (checked === true) {
      // setFavoriteslist(item);
      dispatch(favoriteslistAdd(item));
    } else {
      dispatch(favoritesListDelete(item.id));
    }
  };
  // console.log(favoritesList);

  return (
    <Wraper>
      <IMG>
        <img src={img} alt={brand} width={270} height={268} />

        <Heart>
          <IoIosHeartEmpty width={18} height={18} />
        </Heart>
        <Checkbox type="checkbox" onChange={handleChange} />
      </IMG>
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
