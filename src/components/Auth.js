import classes from "./Auth.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Auth = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const inputIsValid =
      enteredEmail.trim() !== "" && enteredPassword.trim() !== "";
    if (inputIsValid) {
      dispatch(authActions.login());
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
