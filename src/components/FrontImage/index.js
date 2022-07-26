import "./FrontImage.css";

const FrontImage = () => {
  return (
    <img
      className="FrontImage"
      src={require("./../../images/FrontImage.png")}
      alt="Seth Godin smiling."
    />
  );
};

export default FrontImage;
