const Card = ({lefts, tops}) =>{
    return(
        <div style={{
            backgroundColor:"bisque",
            position:"absolute", width:"30%", height:"30%",
            left:lefts,top:tops
        }}>
            <img src="/images/sisters.jpeg" style={{
                position:"absolute", width:"100%", height:"70%"
            }}></img>
        </div>
    )
}
export default Card;