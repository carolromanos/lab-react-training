function Greetings(props){
    const greetingText = {
        "de": "Hallo",
        "fr": "Bonjour",
        "it": "Ciao",
        "es": "Hola",
        "en": "Hello"
    }
    return(
        <p>{greetingText[props.lang]} {props.children}</p>
    )
}

export default Greetings