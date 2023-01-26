import React, { useState } from 'react'
import styles from "./SignUp.module.css"
import './Main.css'

import InputControl from './InputControl'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export default function SignUp() {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrormsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrormsg("All fields are mandatory");
      return;
    }
    setErrormsg("");

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrormsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.heading}>

          <div className="wel1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTuiznXmA4XPtMrHB5mnd9jx6ooCmzBnArg&usqp=CAU" alt="/home" />
            <div className='wellhead'>
              <h1>Welcome To Bardeen</h1>
              <p>Let's login to launch your automations</p>
            </div>
          </div>
          <h1>SignUp</h1>

          <InputControl label="Name" type="text"
            placeholder="Enter your name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))} />

          <InputControl label="Email" type="email"
            placeholder="Enter email address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))} />

          <InputControl label="Password" type="password"
            placeholder="Enter Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, password: event.target.value }))} />

          <div className={styles.footer}>

            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission}
              disabled={submitButtonDisabled}>Sign Up</button>

            <p>Already have an account?{" "} <span>
              <Link to="/">Login</Link>
            </span></p>

          </div>

        </div>
      </div>
    </div>
  )
}
