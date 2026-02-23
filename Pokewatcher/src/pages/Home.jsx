import CardCard from "../components/CardCard.jsx"

function Home () {

    return(
        <div className = "homePage">
            <h1>Welcome and enjoy tracking card prices!</h1>
            <CardCard name={"Pikachu"} set={"Base Set"} price={15.99}/>
            <CardCard name={"Charizard"} set={"Base Set"} price={25.99}/>
            <CardCard name={"Blastoise"} set={"Base Set"} price={20.99}/>
        </div>
    )
}

export default Home