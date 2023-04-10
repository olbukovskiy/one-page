import sprite from "../assets/images/sprite/svg-sprite.svg";

const AfterSend = () => {
  return (
    <div className="container">
      <h2 className="heading heading--distance">
        User successfully registered
      </h2>
      <svg width="328" height="290">
        <use href={`${sprite}#icon-success-image`}></use>
      </svg>
    </div>
  );
};

export default AfterSend;
