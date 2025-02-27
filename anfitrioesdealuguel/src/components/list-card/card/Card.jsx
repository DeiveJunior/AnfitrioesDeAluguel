import "./style.scss"
export const Card = ({announcement}) => {
const {title, price, image, describe} = announcement
    return <div className="card">
        <div>
           <img className="image" src={image}/>
        </div>
        <div className="title">
            <span>{title}</span>
            <span>R${price}</span>
        </div>
        <div className="describe">
            <span>{describe}</span>
        </div>
    </div>
    }