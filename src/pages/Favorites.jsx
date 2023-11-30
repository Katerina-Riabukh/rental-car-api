import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/selectors";
import CardItem from "../components/card-item/CardItem";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <h1>Faworites</h1>
      {favorites.map((item) => {
        return <CardItem item={item} key={item.id} />;
      })}
    </>
  );
};

export default Favorites;
