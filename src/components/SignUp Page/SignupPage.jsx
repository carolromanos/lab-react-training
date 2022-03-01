import { useState } from 'react';
import PostSignupMessage from './PostSignupMessage';

const SignupPage = () => {
  const [formBody, setFormBody] = useState({
    email: '',
    password: '',
    nationality: '',
    showPostSubmit: false,
  });

  const [errorMsg, setErrorMsg] = useState({
    emailError: null,
    emailValid: false,
    passwordError: null,
    passwordValid: false,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setFormBody({
        ...formBody,
        email: value,
      });
      validateEmail(value);
    } else if (name === 'password') {
      setFormBody({
        ...formBody,
        password: value,
      });

      validatePassword(value);
    } else {
      setFormBody({
        ...formBody,
        [name]: value,
      });
    }
  };

  const validatePassword = (password) => {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
      setErrorMsg({
        ...errorMsg,
        passwordError: 'Your password is too weak.',
        passwordValid: false,
      });
    } else {
      setErrorMsg({
        ...errorMsg,
        passwordError: 'Your password is strong.',
        passwordValid: true,
      });
    }
  };

  const validateEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(email)) {
      setErrorMsg({
        ...errorMsg,
        emailError: 'You typed an invalid email.',
        emailValid: false,
      });
    } else {
      setErrorMsg({
        ...errorMsg,
        emailError: 'You typed a valid email.',
        emailValid: true,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { showPostSubmit } = formBody;
    const { emailValid, passwordValid } = errorMsg;

    if (emailValid && passwordValid) {
      setFormBody({
        ...formBody,
        showPostSubmit: !showPostSubmit,
      });
    } else {
      return alert(
        'Please fill all the fields and make sure your input is valid!'
      );
    }
  };

  const { email, password, nationality, showPostSubmit } = formBody;
  const { emailError, passwordError, emailValid, passwordValid } = errorMsg;

  return (
    <div className="flex flex-col w-full">
      <form className="flex flex-col w-2/4">
        <label className="mb-2 text-lg">Email</label>
        <input
          className="mb-2 border-2 rounded-md p-2"
          type="text"
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="Your Email Address"
        />
        {emailError && emailValid ? (
          <span className="text-green-500 mb-2">{emailError}</span>
        ) : (
          <span className="text-red-500 mb-2">{emailError}</span>
        )}

        <label className="mb-2 text-lg">Password</label>
        <input
          className="mb-2 border-2 rounded-md p-2"
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          placeholder="Your Password"
        />
        {passwordError && passwordValid ? (
          <span className="text-green-500 mb-2">{passwordError}</span>
        ) : (
          <span className="text-red-500 mb-2">{passwordError}</span>
        )}

        <label className="mb-2 text-lg">Nationality</label>
        <select
          className="mb-4 border-2 rounded-md p-2"
          value={nationality}
          onChange={handleInput}
          name="nationality"
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button
          className="mb-2 border-2 rounded-md p-2 bg-blue-200"
          type="submit"
          onClick={handleSubmit}
        >
          Sign up
        </button>
      </form>
      {showPostSubmit && (
        <PostSignupMessage nationality={nationality} email={email} />
      )}
    </div>
  );
};

export default SignupPage;