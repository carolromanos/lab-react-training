function CreditCard(props){
const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color
}
console.log(props.expirationYear)
    return(
        <div className="credit-cards">
            <div style={divStyle} className="card">
                <p>{props.type}</p>
                <p>...........{props.number.slice(12)}</p>
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>

        </div>
    )

}

export default CreditCard