import classes from "./Login.module.css";
import LoginError from "./LoginError";
import LoginForm from "./LoginForm";

function Login() {
  return (
    // Page Container
    <div className={classes.container}>
      {/* Modal Window Container */}
      <div className={classes.modalContainer}>
        {/* Page Heading & Detail Section */}
        <div>
          <h1 className={classes.heading}>Sign in</h1>
        </div>
        {/* <LoginError /> */}
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
