import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h5>{lastMileTravelString} minutes</h5>
    </div>
  );
};

export default RestrauntCard;
