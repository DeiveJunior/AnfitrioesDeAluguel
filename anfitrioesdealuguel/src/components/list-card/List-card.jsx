import "./styles.scss"

import { Card } from "./card/Card"

export const ListCard = () => {

    const itens = [
        {
            title: "Apartamento em Balneário Camboriu", 
            price: "2.800,00",
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2182942/DdSs8G3me?w=640",
            describe:"Luxo Vista Mar a 250 mts da Praia, Rua 2850 UG2425"
        },
        {
            title: "Apartamento em Florianópolis",
            price: "1.500,00",
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111361/jfgrH1C9x?w=640",
            describe:"Apartamento de estilo com vista mar N1760"
        },

    ]

    return <div className="list-card">
        {itens.map(item =>
             <Card announcement={item}/>)}
        </div>
    }