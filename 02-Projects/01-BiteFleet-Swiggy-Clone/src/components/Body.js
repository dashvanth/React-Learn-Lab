import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      return <h1>Error : {err}</h1>;
    }
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.3
    );
    setFilteredRestaurant(filteredList);
  };

  const handleSearch = () => {
    const filSearchRestaurant = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filSearchRestaurant);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div id="filter">
        <div id="search-container">
          <input
            type="text"
            name=""
            placeholder="Search the restaurant"
            id=""
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button id="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div id="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
