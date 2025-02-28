import { useNavigate } from "react-router-dom";
import "./style.scss";
export const Card = ({ announcement }) => {
  const { id, infoLocal, title, price, image, info } = announcement;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${id}`, { state: { announcement } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div>
        <img className="image" src={image} />
      </div>
      <div className="title">
        <span>{infoLocal}</span>
        <span>R${price}</span>
      </div>
      <div className="describe">
        <span>{title}</span>
        <span>{info}</span>
      </div>
    </div>
  );
};
