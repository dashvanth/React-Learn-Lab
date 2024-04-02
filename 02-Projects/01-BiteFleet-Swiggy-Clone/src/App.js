import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// const API = "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
/*
 * Header
    - Logo
    - Nav Items

 * Body
    - Search
    - Restaurants Container
        - Restaurant card
 * Footer
    - Copyright
    - Links
    - Contact Info
 */

// console.log(resList);

const AppLayout = () => {
  return (
    <div id="wrapper">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
