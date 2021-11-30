function Random (props){
    console.log("max is", props.max);
    const randomNumber =  (Math.floor(Math.random() * (props.max - props.min + 1) + props.min))
    return(
        <p>Random value between {props.min} and {props.max} is {randomNumber}</p>
    )

}

export default Random