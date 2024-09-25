import classes from './LoginError.module.css'

function LoginError() {
  return (
      <div className={classes.div}>
          <p className={classes.error}>Invalid username or password!</p>
    </div>
  )
}

export default LoginError