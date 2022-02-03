import{Link} from "react-router-dom"
const Navigation = () => {
    return(
        <div className="navigation">
            <img src="/images/logo.png" className="logo"></img>
            <div className="navigation-title">Duck Fasion Show</div>
            <Link to="/" style={{
                position:"absolute",
                color:'white',
                width:"10%",
                height:"40%",
                fontSize:"1.5vw",
                left:"55%",
                top:"45%",
            }}>Home</Link>
            <Link to="/voting" style={{
                position:"absolute",
                color:'white',
                width:"10%",
                height:"40%",
                fontSize:"1.5vw",
                left:"61%",
                top:"45%",
            }}>Voting</Link>
            <Link to="/winner" style={{
                position:"absolute",
                color:'white',
                width:"20%",
                height:"40%",
                fontSize:"1.5vw",
                left:"67%",
                top:"45%",
            }}>Pass Winners</Link>
            <Link to="/album" style={{
                position:"absolute",
                color:'white',
                width:"10%",
                height:"40%",
                fontSize:"1.5vw",
                left:"78%",
                top:"45%",
            }}>Photo Album</Link>
        </div>
    )
}

export default Navigation;