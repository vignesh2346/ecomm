import Button from "../button/button.component";
import { useState, useContext } from "react";
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInwithEmailandPassword,
} from "../Utils/Firebase/Firebase";

import { Usercontext } from "../context/User.context";
import InputForm from "./InputForm.component";
import "../Signin.styles.scss";

const SigninForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [signinEmail, setsigninEmail] = useState("");
  const [signinpassword, setsigninPassword] = useState("");

  //   const { setCurrentUser } = useContext(Usercontext);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log(user);
    // setCurrentUser(user);
  };
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "Confirm Password") {
      setCPassword(e.target.value);
    }
    if (e.target.name === "signinEmail") {
      setsigninEmail(e.target.value);
    }
    if (e.target.name === "SigninPassword") {
      setsigninPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      alert("The confirm passord does not match with the password");
    } else {
      try {
        const { user } = await createAuthWithEmailAndPassword(email, password);
        createUserDocumentFromAuth(user, name);
        resetFields();
        alert(`User ${user.email} has been created successfully`);
        // setCurrentUser(user);
      } catch (error) {
        console.log(`we encountered an error ${error}`);
      }
    }
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCPassword("");
    setsigninEmail("");
    setsigninPassword("");
  };

  const signInSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInwithEmailandPassword(
        signinEmail,
        signinpassword
      );
      //   setCurrentUser(user);
      resetFields();
    } catch (error) {
      alert(`There was an error signing in ${error}`);
    }
  };
  return (
    <div>
      <div className="sigin-in-container">
        <h2>I already have an account!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={signInSubmit}>
          <InputForm
            value={signinEmail}
            onChange={handleChange}
            type="email"
            name="signinEmail"
            label="Email"
          />
          <InputForm
            value={signinpassword}
            onChange={handleChange}
            type="password"
            name="SigninPassword"
            label="Password"
          />
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={logGoogleUser} buttontype="google">
            Sign up with Google
          </Button>
        </form>
      </div>
      <div className="sigin-in-container">
        <h2>I do not have an account!</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <InputForm
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            label="Name"
          />
          <InputForm
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            label="Email"
          />
          <InputForm
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            label="Password"
          />
          <InputForm
            value={cPassword}
            onChange={handleChange}
            type="password"
            name="Confirm Password"
            label="Confirm Password"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;
