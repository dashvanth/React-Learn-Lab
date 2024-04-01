import { CDN_URL } from "../utils/constant";
const ResCard = (resData) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } =
    resData.resData.info;
  return (
    <div id="res-card">
      <img
        className="food-img"
        src={CDN_URL + cloudinaryImageId}
        alt="food img"
      />
      <h4>{name}</h4>
      <div className="rating-delivery-time">
        <div className="rating">
          <i className="fas fa-star"></i>
          {avgRating}
        </div>
        <div className="delivery-time">{sla.deliveryTime} mins</div>
      </div>
      <p className="cuisine">{cuisines.join(", ")}</p>
    </div>
  );
};

export default ResCard;
