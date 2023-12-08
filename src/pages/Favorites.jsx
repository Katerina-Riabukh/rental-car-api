import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/selectors";
import CardItem from "../components/card-item/CardItem";
// import { fetchFavoritesCars } from "../redux/fetch";
import { UL } from "../components/cars-list/CarsList.styled";
// import { useState } from "react";

const Favorites = () => {
  //  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log(favorites);
  // const favoritesList = useSelector(selectFavoritesList);

  // useEffect(() => {favorites.map((id) => {
  //   console.log(id);
  //   return dispatch(fetchFavoritesCars(id));
  // });}, [dispatch, favorites]);

  return (
    <>
      <h1>FAVORITES</h1>
      <UL>
        {favorites.map((item) => {
          console.log(item);
          return <CardItem item={item} key={item.id} />;
        })}
      </UL>
    </>
  );
};

export default Favorites;
