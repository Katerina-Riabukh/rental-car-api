import {
  Button,
  Header2,
  Heart,
  IMG,
  SpanPrice,
  Wraper,
} from "./Carditem.styled";
import { useDispatch, useSelector } from "react-redux";
import { favoriteslistAdd, favoritesListDelete } from "../../redux/filterSlice";
import { selectFavorites } from "../../redux/selectors";
import { useState } from "react";
import Modal from "../modal/Modal";
import CardProduct from "../card-product/CardProduct";
import { ShortDescription, Span } from "../card-product/CardProduct.styled";
// import CardProduct from "../card-product/CardProduct";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isOpen, setIsOpen] = useState(false);

  const {
    address,
    make,
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
  const cityPrepear = address.split(" ")[3];
  const cityMiddle = cityPrepear.split("");
  cityMiddle.pop();
  const city = cityMiddle.join("");

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
    <>
      {isOpen && (
        <Modal>
          <CardProduct item={item} />
          <Heart type="button" onClick={toggleModal}>
            Close
          </Heart>
        </Modal>
      )}
      <Wraper>
        <div>
          <IMG>
            <img src={img} alt={make} width={270} height={268} />
            {!isFavorite ? (
              <Heart type="button" onClick={handleChangeAdd}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Heart>
            ) : (
              <Heart type="button" onClick={handleChangeDelete}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
                    fill="#3470FF"
                    stroke="#3470FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Heart>
            )}
          </IMG>
          <Header2>
            {make}
            <Span>{model},</Span>
            {year}
            <SpanPrice>{rentalPrice}</SpanPrice>
          </Header2>
          <ShortDescription>
            {city} | {country} | {rentalCompany}
          </ShortDescription>
          <ShortDescription>
            {type}| {model} | {mileage} | {functionalities[0]}
          </ShortDescription>
        </div>
        <Button type="button" onClick={toggleModal}>
          Learn more
        </Button>
      </Wraper>
    </>
  );
};

export default CardItem;
