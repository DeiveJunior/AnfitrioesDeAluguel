import { useLocation, useParams } from "react-router-dom"
import "./styles.scss"

export const Details = () => {
    const location = useLocation();
    const announcement = location?.state?.announcement;

  if (!announcement) {
    return <p>Nenhum announcement encontrado!</p>;
  }

    return (
        <div className="details">
            <img src={announcement.image} />

        <div className="info">
          <h4>{announcement.infoLocal}</h4>
            <h1>{announcement.title}</h1>
            <h3>{announcement.info}</h3>
            <span className="describe">
              {announcement.describe}
            </span>
          </div>
        </div>
    )
    }