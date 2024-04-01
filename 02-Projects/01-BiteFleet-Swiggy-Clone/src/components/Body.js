import ResCard from "./ResCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  let listOfRestaurants2 = [
    {
      info: {
        id: "534235",
        name: "Cheesecake & Co.",
        cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹250 for two",
        cuisines: ["Bakery"],
        avgRating: 4.5,
        parentId: "387417",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId:
          "cid=12015515~p=1~eid=0000018e-9555-a2fc-335c-b1b4002f010b~srvts=1711902401276~45826",
        sla: {
          deliveryTime: 28,
        },
      },
    },
    {
      info: {
        id: "531235",
        name: "KFC",
        cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
        locality: "BTM Layout",
        areaName: "BTM Layout",
        costForTwo: "₹250 for two",
        cuisines: ["burger", "pizza", "french fries"],
        avgRating: 4.1,
        parentId: "387417",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId:
          "cid=12015515~p=1~eid=0000018e-9555-a2fc-335c-b1b4002f010b~srvts=1711902401276~45826",
        sla: {
          deliveryTime: 15,
        },
      },
    },
  ];
  console.log(listOfRestaurants);
  return (
    <div id="body">
      <div id="filter">
        <button
          id="filter-btn"
          onClick={() => {
            filteredRes = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setListOfRestaurants(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div id="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
