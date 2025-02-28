import "./styles.scss"

import { Card } from "./card/card"

export const ListCard = () => {

    const itens = [
        {   
            id: 1,
            price: 200,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2182942/DdSs8G3me?w=640",
            title:"Luxo Vista Mar a 250 mts da Praia, Rua 2850 UG2425",
            info: "Casa inteira • 6 hóspedes • 3 quartos • 3 camas • 3 banheiros",
            infoLocal: "Apartamento no Balneário Camboriú",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
        {   
            id: 2,
            price: 97,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111361/jfgrH1C9x",
            title: "Luxo Vista Mar a 250 mts da Praia, Rua 2850 UG2425",
            info: "2 quartos • 2 camas • 2 banheiros",
            infoLocal: "Apartamento no Balneário Camboriú",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
        {   
            id: 1,
            price: 230,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2182999/LhdnKfrNE?w=2048",
            title:"Apê Moderno perto do mar, Novo Campeche AP2043",
            info: "Casa inteira • 2 hóspedes • 1 quarto • 1 cama • 1 banheiro",
            infoLocal: "Apartamento no Florianópolis",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
        {   
            id: 2,
            price: 50,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/1893343/bINWGeLUt",
            title: "Casa Pé na Areia na Praia dos Ingleses WK4531",
            info: "Casa inteira • 9 hóspedes • 3 quartos • 5 camas • 3 banheiros",
            infoLocal: "Casa no Florianópolis",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
        {   
            id: 1,
            price: 320,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/1894754/H67UTMuPi",
            title:"Casa de Praia no Centrinho dos Ingleses DA6683",
            info: "Casa inteira • 4 hóspedes • 1 quarto • 2 camas • 1 banheiro",
            infoLocal: "Apartamento no Florianópolis",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
        {   
            id: 2,
            price: 87,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111351/OgpIjqeNg",
            title: "Casa c/ Piscina a 250m da Lagoa da Conceição P2211",
            info: "Casa inteira • 9 hóspedes • 4 quartos • 5 camas • 4 banheiros",
            infoLocal: "Casa no Florianópolis",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
        {   
            id: 1,
            price: 86,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111352/ceaypVOgD",
            title:"Vila Florida: Quadra Mar nos Ingleses Norte TC4747",
            info: "Casa inteira • 4 hóspedes • 1 quarto • 3 camas • 1 banheiro",
            infoLocal: "Apartamento no Florianópolis",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
        {   
            id: 2,
            price: 45,
            image: "https://images.dtravel.com/7446f41d-35fa-4fc6-bf6c-bcaf28cdc3a0/dtravel/2111355/SAnx4c0Fs",
            title: "Jardim Suspenso na Praia dos Ingleses ING13",
            info: "Casa inteira • 5 hóspedes • 2 quartos • 3 camas • 2 banheiros",
            infoLocal: "Apartamento no Florianópolis",
            describe: "Viva uma experiência incrível se hospedando em um apartamento completo e finamente decorado no Centro de Balneário Camboriú! Localização privilegiada a apenas 100 metros da Avenida Brasil e 250 metros da Avenida Atlântica e da praia.Você terá acesso a ótimos restaurantes, bares, pubs, para curtir uma saída sem precisar pegar o carro. Além disso, estamos a 750 metros do Passeio San Miguel, 1,8 km do Oceanic Aquarium e 3 km do Parque Unipraias.As acomodações oferecem:- Sacada em reiki com churrasqueira, mesa, cadeiras e vista mar;- Living bem iluminado e arejado com Smart Tv de 59 polegadas e internet wi-fi de 300 mega, de uso exclusivo;- Ambientes de convívio integrados em cômodo amplo, sala de estar junto ao espaço de refeições e cozinha estilo americana;- Cozinha totalmente equipada com eletrodomésticos, incluindo máquina de lavar louças, cervejeira, filtro de água e utensílios para preparar e servir suas refeições;- Acomoda confortavelmente até 6 hóspedes em 3 suítes climatizadas, sendo a suíte master com cama queen size e vista privilegiada do mar;- As outras duas suítes contam com uma cama de casal cada e estação de trabalho para home office ou estudos;- Disponibilizamos roupas de cama padrão de hotel, além de 1 kit de toalhas de banho por hóspede;- 3 vagas de garagem privativas (com capacidade para carros de grande porte);- 3 banheiros completos com ducha quente para banhos relaxantes + 1 lavabo;- Área de serviço com máquina lava/seca e ferro para passar roupas.O condomínio Windsor Village é um empreendimento da Embraed, conhecida por suas contruções de qualidade e alto padrão. Venha se hospedar conosco e aproveite uma experiência única!IMPORTANTE: as áreas comuns do condomínio não podem ser utilizadas pelos hóspedes",
        },
    ]


    return (
        <div className="list-card">
        <div>
            <span className="showing">Exibindo {itens.length} propriedades</span>
        </div>
        <div className="cards">
            {itens.map(item => <Card announcement={item}/>)}
        </div>
        </div>
    )
    }