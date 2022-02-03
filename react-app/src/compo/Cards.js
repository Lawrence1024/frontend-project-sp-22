import Card from "./Card"
const Cards = ({card}) =>{
    return(
        <div>
            <Card lefts="10%" tops="25%"></Card>
            <Card lefts="50%" tops="60%"></Card>
            <Card lefts="10%" tops="60%"></Card>
            <Card lefts="50%" tops="25%"></Card>
        </div>
        
    )
}
export default Cards;