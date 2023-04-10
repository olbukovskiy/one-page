import { IUser } from "../types";
import sprite from "../assets/images/sprite/svg-sprite.svg";

type Props = {
  user: IUser;
};

const UserCard: React.FunctionComponent<Props> = (props) => {
  const {
    img = `${sprite}#icon-photo-cover`,
    name,
    position,
    email,
    phone,
  } = props.user;

  return (
    <li>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{position}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
    </li>
  );
};

export default UserCard;
