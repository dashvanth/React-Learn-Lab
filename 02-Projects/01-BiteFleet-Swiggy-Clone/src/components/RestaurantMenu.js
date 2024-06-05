import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const data = await response.json();
      console.log(data);
      setResInfo(data.data);
    } catch (err) {
      console.log("Error fetching menu:", err);
    }
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.itemCards[0].card.info.name
  // );

  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        <h4> rating - {avgRating}</h4>
      </div>
      <p>
        {cuisines?.join()} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs."}{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
