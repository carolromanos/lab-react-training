const PostSignupMessage = (props) =>  {

    const { nationality, email} = props;

   const greetingMessage = (nationality) => {
        let greeting;

        switch(nationality) {
            case 'fr':
            greeting = 'Bonjour';
            break;
            case 'de':
            greeting = 'Hallo';
            break;
            default:
            greeting = 'Hello';
        }

        return greeting;
    }

        return (
            <div>
                <p>{greetingMessage(nationality)} </p>
                <p>Your email address is: {email}</p>
                <p>Your email address is correct</p>
            </div>
        )
}

export default PostSignupMessage