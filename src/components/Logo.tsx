import sprite from "../assets/images/sprite/svg-sprite.svg";

const Logo = () => {
  return (
    <div className="logo">
      <svg width="104" height="26">
        <use href={`${sprite}#icon-Logo`}></use>
      </svg>
    </div>
  );
};

export default Logo;
