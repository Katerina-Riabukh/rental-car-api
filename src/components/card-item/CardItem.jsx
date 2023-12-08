import { Heart, IMG, Wraper } from "./Carditem.styled";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { favoriteslistAdd, favoritesListDelete } from "../../redux/filterSlice";
import { selectFavorites } from "../../redux/selectors";
import { useState } from "react";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isOpen, setIsOpen] = useState(false);

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

  // const country = address.split(" ")[4];
  // const city = address.split(" ")[3];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeAdd = () => {
    dispatch(favoriteslistAdd(item));
  };

  const handleChangeDelete = () => {
    dispatch(favoritesListDelete(item.id));
  };
  const isFavorite = favorites.find((car) => {
    return car.id === item.id;
  });

  return (
    <Wraper>
      <IMG>
        <img src={img} alt={brand} width={270} height={268} />
        {!isFavorite ? (
          <Heart type="button" onClick={handleChangeAdd}>
            <IoIosHeartEmpty width={18} height={18} />
          </Heart>
        ) : (
          <Heart type="button" onClick={handleChangeDelete}>
            <IoIosHeart width={18} height={18} />
          </Heart>
        )}
      </IMG>
      <h2>
        {brand}
        <span>{model},</span>
        {year}
        {rentalPrice}
      </h2>
      {/* <p>
        {city} | {country} | {rentalCompany}
      </p> */}
      <p>
        {address} | {rentalCompany}
      </p>
      <p>
        {type}| {model} | {mileage} | {functionalities}
      </p>

      <button type button onClick={toggleModal}>
        Learn more
      </button>
    </Wraper>
  );
};

export default CardItem;
