function CardCard ({name,set,price}){
    return(
        <div className = "CardInfo">
            <p>Name: {name}</p>
            <p>Pokemon set: {set}</p>
            <p>Current price: ${price}</p>
        </div>
    )
}

export default CardCard;