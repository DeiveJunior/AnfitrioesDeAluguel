import { useNavigate } from "react-router-dom";
import "./styles.scss";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div onClick={handleClick}>
        <img
          width={120}
          height={40}
          src="https://images.dtravel.com/profile/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/75aa6b98-a022-4551-9a04-f6ac442cd1aa/logo/663?h=120"
        />
      </div>
      <div className="filters">
        <button>Localização</button>
        <button>Qualquer data</button>
        <button>Hóspedes</button>
      </div>
      <div className="options">
        <span>Português</span>
        <span>USD</span>
        <button>Contato</button>
      </div>
    </div>
  );
};
