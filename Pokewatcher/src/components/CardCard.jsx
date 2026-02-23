import "../css/CardCard.css"

function CardCard ({name,set,price}){
    return(
        <div className = "CardCard">
            <div className = "CardImage">
                //Placeholder for card image, will add later when I have the API working
            </div>
            <div className = "CardInfo">
            <p>Name: {name}</p>
            <p>Pokemon set: {set}</p>
            <p>Current price: ${price}</p>
            </div>
        </div>
    )
}

export default CardCard;