import ShimmerCards from "./ShimmerCards";

const Shimmer = () => {
  const shimmerCount = 18; // Number of ShimmerCards you want to render
  const shimmerCardsArray = Array.from({ length: shimmerCount }); // Create an array of length shimmerCount

  return (
    <div id="shimmer-container">
      {shimmerCardsArray.map((_, index) => (
        <ShimmerCards key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
